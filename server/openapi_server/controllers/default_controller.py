import connexion
import six

from openapi_server.models.check import Check  # noqa: E501
from openapi_server.models.check_result import CheckResult  # noqa: E501
from openapi_server import util
from core.validation_controller import history_get_logic,check_post_logic

def check_id_get(id):  # noqa: E501
    """Get check

     # noqa: E501

    :param id: Check id to get
    :type id: str

    :rtype: Check
    """
    return 'do some magic!'


def check_post(check=None):  # noqa: E501
    """Post check data for assertion

     # noqa: E501

    :param check: 
    :type check: dict | bytes

    :rtype: CheckResult
    """
    if connexion.request.is_json:
        check = Check.from_dict(connexion.request.get_json())  # noqa: E501
    return check_post_logic(check)


def history_get():  # noqa: E501
    """Get check

     # noqa: E501


    :rtype: List[Check]
    """
    return history_get_logic()