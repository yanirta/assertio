from core.db_adapters.datastore_adapter_base import DatastoreAdapterBase
from tinydb import TinyDB, Query
from openapi_server.models.check import Check
from threading import RLock


class TinyDbDatastoreAdapter(DatastoreAdapterBase):
    db = None
    bases = None
    history = None
    lock = RLock()

    def __init__(self, dbname='db.json'):
        try:
            TinyDbDatastoreAdapter.lock.acquire()
            if(TinyDbDatastoreAdapter.db == None):
                TinyDbDatastoreAdapter.db = TinyDB(dbname)
            if(TinyDbDatastoreAdapter.bases == None):
                TinyDbDatastoreAdapter.bases = TinyDbDatastoreAdapter.db.table(
                    'bases')
            if(TinyDbDatastoreAdapter.history == None):
                TinyDbDatastoreAdapter.history = TinyDbDatastoreAdapter.db.table(
                    'history')
        finally:
            TinyDbDatastoreAdapter.lock.release()

    def insertCheck(self, check, result):
        try:
            TinyDbDatastoreAdapter.lock.acquire()
            # Reformatting date time to be serializable
            if(hasattr(check.timestamp, 'isoformat')):
                check.timestamp = check.timestamp.isoformat()
            return TinyDbDatastoreAdapter.history.insert({'check': check.to_dict(), 'result': result.to_dict()})
        finally:
            TinyDbDatastoreAdapter.lock.release()

    def getBase(self, uname, identifier):
        try:
            TinyDbDatastoreAdapter.lock.acquire()
            Base = Query()
            res = TinyDbDatastoreAdapter.bases.search(Base.uname == uname)
            # TBD & (Base.identifier == identifier))
            if ((res == None) or len(res) == 0):
                return {}
            elif len(res) == 1:
                return res[0]['base']
            else:
                raise 'Got more than one result'
        except BaseException as e:
            print(e)
        finally:
            TinyDbDatastoreAdapter.lock.release()

    def upsertBase(self, uname, identifier, base):
        Base = Query()
        try:
            TinyDbDatastoreAdapter.lock.acquire()
            return TinyDbDatastoreAdapter.bases.upsert(
                {'uname': uname, 'identifier': identifier, 'base': base},
                (Base.uname == uname))
            # TBD & (Base.identifier == identifier))
        finally:
            TinyDbDatastoreAdapter.lock.release()

    def getCheck(self, docid):
        return self.history.get(doc_id=docid)

    def getHistory(self):
        return self.history.all()
