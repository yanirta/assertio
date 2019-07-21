from core.db_adapters.datastore_adapter_base import DatastoreAdapterBase
from tinydb import TinyDB, Query
from openapi_server.models.check import Check


class TinyDbDatastoreAdapter(DatastoreAdapterBase):
    db = None
    bases = None
    history = None

    def __init__(self, dbname='db.json'):
        if(TinyDbDatastoreAdapter.db == None):
            TinyDbDatastoreAdapter.db = TinyDB(dbname)
        if(TinyDbDatastoreAdapter.bases == None):
            TinyDbDatastoreAdapter.bases = TinyDbDatastoreAdapter.db.table(
                'bases')
        if(TinyDbDatastoreAdapter.history == None):
            TinyDbDatastoreAdapter.history = TinyDbDatastoreAdapter.db.table(
                'history')

    def insertCheck(self, check, result):
        # Reformatting date time to be serializable
        if(hasattr(check.timestamp, 'isoformat')):
            check.timestamp = check.timestamp.isoformat()
        return TinyDbDatastoreAdapter.history.insert({'check': check.to_dict(), 'result': result.to_dict()})

    def getBase(self, uname, identifier):
        Base = Query()
        res = TinyDbDatastoreAdapter.bases.search(
            (Base.uname == uname) & (Base.identifier == identifier))
        if len(res) == 0:
            return {}
        elif len(res) == 1:
            return res[0]['base']
        else:
            raise 'Got more than one result'

    def upsertBase(self, uname, identifier, base):
        Base = Query()
        return TinyDbDatastoreAdapter.bases.upsert(
            {'uname': uname, 'identifier': identifier, 'base': base},
            (Base.uname == uname) & (Base.identifier == identifier))

    def getCheck(self, docid):
        return self.history.get(doc_id=docid)

    def getHistory(self):
        return self.history.all()
