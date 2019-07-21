import pytest
import os
import datetime
import json
from core.db_adapters.tinydb_datastore_adapter import TinyDbDatastoreAdapter
from openapi_server.models.check import Check
from openapi_server.models.check_result import CheckResult


class TestTinyDBAdapter:
    @pytest.fixture(scope="module")
    def dbadapter(self):
        dbfile = 'testdb.json'
        if os.path.exists(dbfile) and os.path.isfile(dbfile):
            os.remove(dbfile)
        return TinyDbDatastoreAdapter(dbname=dbfile)

    def test_smokeCheck(self, dbadapter):
        assert os.path.exists('testdb.json')
        check = Check(timestamp=datetime.datetime.now().isoformat(),
                      locators=None, tags=None, actual_obj={'a': 1}, expected_obj={'b': 2})
        result = CheckResult("Failed", "TBD")
        record_id = dbadapter.insertCheck(check, result)
        record_id = dbadapter.insertCheck(check, result)
        check_fromdb = dbadapter.getCheck(record_id)
        # note, Check.from_dict is not able to translate keys back to uppercase,
        # same as to_dict does the opposit, hence at this point we compare them as dictionaries
        assert json.dumps(check.to_dict(), sort_keys=True) == json.dumps(
            check_fromdb['check'], sort_keys=True)
        all_checks = dbadapter.getChecks()
        assert len(all_checks) == 2

    def test_checkGet(self, dbadapter):
        pass

    def test_checksGet(self):
        pass

    def test_baseUpsert(self):
        # TBD
        pass

    def test_baseGet(self):
        # TBD
        pass
