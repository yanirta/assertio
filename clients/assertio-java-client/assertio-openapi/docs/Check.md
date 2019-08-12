

# Check

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timestamp** | [**OffsetDateTime**](OffsetDateTime.md) |  |  [optional]
**identifiers** | [**List&lt;Identifier&gt;**](Identifier.md) | An array of ordered static* identifiers that in combination with the checkUName used as a unique record identifiers. &lt;br&gt; *Static refers to the fact the identifiers will remain in the same order, unless there&#39;s a desired change. |  [optional]
**tags** | [**List&lt;Tag&gt;**](Tag.md) | Non-unique identifiers (tags) for the check that can be searched by. |  [optional]
**leftCompareObj** | **Map&lt;String, Object&gt;** | Actual result |  [optional]
**rightCompareObj** | **Map&lt;String, Object&gt;** | Expected result | 
**operator** | [**OperatorEnum**](#OperatorEnum) | Comparison operator, from left to right, when order matters. |  [optional]
**uname** | **String** | Check unique name (used as id) | 



## Enum: OperatorEnum

Name | Value
---- | -----
EQUALS | &quot;equals&quot;
NOTEQUALS | &quot;notequals&quot;
GREATERTHAN | &quot;greaterthan&quot;
LESSTHAN | &quot;lessthan&quot;
CONTAINS | &quot;contains&quot;
NOTCONTAINS | &quot;notcontains&quot;



