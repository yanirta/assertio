# DefaultApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkIdGet**](DefaultApi.md#checkIdGet) | **GET** /check/{id} | Get check
[**checkPost**](DefaultApi.md#checkPost) | **POST** /check | Post check data for assertion
[**historyGet**](DefaultApi.md#historyGet) | **GET** /history | Get check


<a name="checkIdGet"></a>
# **checkIdGet**
> Check checkIdGet(id)

Get check

### Example
```java
// Import classes:
import io.assertio.client.ApiClient;
import io.assertio.client.ApiException;
import io.assertio.client.Configuration;
import io.assertio.client.auth.*;
import io.assertio.client.models.*;
import io.assertio.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://localhost:8080");
    
    // Configure HTTP basic authorization: bearerAuth
    HttpBasicAuth bearerAuth = (HttpBasicAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setUsername("YOUR USERNAME");
    bearerAuth.setPassword("YOUR PASSWORD");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    String id = "id_example"; // String | Check id to get
    try {
      Check result = apiInstance.checkIdGet(id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#checkIdGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Check id to get |

### Return type

[**Check**](Check.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get check result |  -  |
**401** | Access token is missing or invalid |  -  |
**0** | Oops, something went really wrong... |  -  |

<a name="checkPost"></a>
# **checkPost**
> CheckResult checkPost(check)

Post check data for assertion

### Example
```java
// Import classes:
import io.assertio.client.ApiClient;
import io.assertio.client.ApiException;
import io.assertio.client.Configuration;
import io.assertio.client.auth.*;
import io.assertio.client.models.*;
import io.assertio.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://localhost:8080");
    
    // Configure HTTP basic authorization: bearerAuth
    HttpBasicAuth bearerAuth = (HttpBasicAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setUsername("YOUR USERNAME");
    bearerAuth.setPassword("YOUR PASSWORD");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    Check check = new Check(); // Check | 
    try {
      CheckResult result = apiInstance.checkPost(check);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#checkPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **check** | [**Check**](Check.md)|  | [optional]

### Return type

[**CheckResult**](CheckResult.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Post check successful result |  -  |
**401** | Access token is missing or invalid |  -  |
**0** | Oops, something went really wrong... |  -  |

<a name="historyGet"></a>
# **historyGet**
> List&lt;Check&gt; historyGet()

Get check

### Example
```java
// Import classes:
import io.assertio.client.ApiClient;
import io.assertio.client.ApiException;
import io.assertio.client.Configuration;
import io.assertio.client.auth.*;
import io.assertio.client.models.*;
import io.assertio.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://localhost:8080");
    
    // Configure HTTP basic authorization: bearerAuth
    HttpBasicAuth bearerAuth = (HttpBasicAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setUsername("YOUR USERNAME");
    bearerAuth.setPassword("YOUR PASSWORD");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      List<Check> result = apiInstance.historyGet();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#historyGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List&lt;Check&gt;**](Check.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get historic results |  -  |
**401** | Access token is missing or invalid |  -  |
**0** | Oops, something went really wrong... |  -  |

