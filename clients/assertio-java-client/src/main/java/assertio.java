import io.assertio.client.ApiException;
import io.assertio.client.api.DefaultApi;
import io.assertio.client.auth.HttpBearerAuth;
import io.assertio.client.model.Check;
import io.assertio.client.model.CheckResult;
import org.threeten.bp.OffsetDateTime;

import java.util.HashMap;
import java.util.Map;

public class assertio {
    private final DefaultApi api = new DefaultApi();

    public assertio(String serverurl, String token) {
        api.getApiClient().setBasePath(serverurl);
        ((HttpBearerAuth) api.getApiClient().getAuthentication("bearerAuth")).setBearerToken(token);
    }

    public void validateEquals(Object right, String checkId) {
        validate(null, right, Check.OperatorEnum.EQUALS, checkId);
    }

    public void assertEquals(Object left, Object right, String checkId) {
        validate(left, right, Check.OperatorEnum.EQUALS, checkId);
    }

    public void assertNotEquals(Object left, Object right, String checkId) {
        validate(left, right, Check.OperatorEnum.NOTEQUALS, checkId);
    }

    private void validate(Object left, Object right, Check.OperatorEnum op, String checkId) {
        try {
            Check check = prepcheck(left, right, op, checkId);
            CheckResult res = api.checkPost(check);
            if (res.getStatus() != CheckResult.StatusEnum.PASSED)
                throw new ValidationFailedException(res.getMessage());
        } catch (ApiException e) {
            //TODO handle exception better with runtime
            e.printStackTrace();
        }
    }

    private Check prepcheck(Object expected, Object actual, Check.OperatorEnum op, String checkId) {
        Check check = new Check();
        if (actual != null) check.leftCompareObj(normalize(actual));
        if (expected != null) check.rightCompareObj(normalize(expected));
        check.operator(op);
        check.uname(checkId);
        check.setTimestamp(OffsetDateTime.now());
        return check;
    }

    private Map<String, Object> normalize(Object o) {
        if (o == null)
            return new HashMap<>();
        else if (o instanceof Map)
            return (Map<String, Object>) o;
        else if (o.getClass().isArray()) {
            HashMap<String, Object> ret = new HashMap<>();
            ret.put(String.format("array(%s)", o.getClass().getComponentType()), o);
            return ret;
        } else {
            HashMap<String, Object> ret = new HashMap<>();
            ret.put(o.getClass().getName(), o);
            return ret;
        }
    }
}
