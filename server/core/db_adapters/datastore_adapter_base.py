
class DatastoreAdapterBase:
    def upsertBase(self, checkId, checkLocator, base): raise NotImplementedError
    def getBase(self, checkId, checkLocator): raise NotImplementedError
    def insertCheck(self, check, result): raise NotImplementedError
    def getCheck(self, checkId): raise NotImplementedError
    def getHistory(self): raise NotImplementedError
