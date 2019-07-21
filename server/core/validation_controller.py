from core.db_adapters.tinydb_datastore_adapter import TinyDbDatastoreAdapter
from openapi_server.models.check import Check  # noqa: E501
from openapi_server.models.check_result import CheckResult  # noqa: E501
import connexion
import json
import datetime

dbAdapter = TinyDbDatastoreAdapter()


def check_post_logic(check):
    if check.right_compare_obj:
        dbAdapter.upsertBase(
            check.uname, check.identifiers, check.right_compare_obj)
    else:
        check.right_compare_obj = dbAdapter.getBase(
            check.uname, check.identifiers)
    left = json.dumps(check.left_compare_obj, sort_keys=True)
    right = json.dumps(check.right_compare_obj, sort_keys=True)
    status = calculate(left, right, check.operator)
    res = CheckResult(status=status, message="TBD")
    dbAdapter.insertCheck(check, res)
    return res, 200


def calculate(left, right, operator):
    status = 'Undefinded'
    ops = {
        "equals": lambda l, r: l == r,
        "notequals": lambda l, r: l != r,
        "greaterthan": lambda l, r: l > r,
        "lowerthan": lambda l, r: l < r,
        "contains": lambda l, r: 'not implemented yet',
        "notcontains": lambda l, r: 'not implemented yet'
    }

    if operator not in ops:
        raise 'Invalid operation'

    if ops[operator](left, right):
        status = 'Passed'
    else:
        status = 'Failed'
    return status


def history_get_logic():
    checks = dbAdapter.getHistory()
    res = []
    for check in checks:
        item = dict(check)
        item.update(vars(check))
        res.append(item)
    return res, 200
