/*
 * Assertio - Assertion library API
 * Distributed assertion library
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package io.assertio.generated.client.model;

import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import com.sun.istack.internal.Nullable;
import io.swagger.annotations.ApiModelProperty;
import org.threeten.bp.OffsetDateTime;

import java.io.IOException;
import java.util.*;

/**
 * Check
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2019-08-13T20:11:04.266+03:00[Asia/Jerusalem]")
public class Check {
  public static final String SERIALIZED_NAME_TIMESTAMP = "timestamp";
  @SerializedName(SERIALIZED_NAME_TIMESTAMP)
  private OffsetDateTime timestamp;

  public static final String SERIALIZED_NAME_IDENTIFIERS = "identifiers";
  @SerializedName(SERIALIZED_NAME_IDENTIFIERS)
  private List<Identifier> identifiers = new ArrayList<Identifier>();

  public static final String SERIALIZED_NAME_TAGS = "tags";
  @SerializedName(SERIALIZED_NAME_TAGS)
  private List<Tag> tags = new ArrayList<Tag>();

  public static final String SERIALIZED_NAME_LEFT_COMPARE_OBJ = "leftCompareObj";
  @SerializedName(SERIALIZED_NAME_LEFT_COMPARE_OBJ)
  private Map<String, Object> leftCompareObj = new HashMap<String, Object>();

  public static final String SERIALIZED_NAME_RIGHT_COMPARE_OBJ = "rightCompareObj";
  @SerializedName(SERIALIZED_NAME_RIGHT_COMPARE_OBJ)
  private Map<String, Object> rightCompareObj = new HashMap<String, Object>();

  /**
   * Comparison operator, from left to right, when order matters.
   */
  @JsonAdapter(OperatorEnum.Adapter.class)
  public enum OperatorEnum {
    EQUALS("equals"),
    
    NOTEQUALS("notequals"),
    
    GREATERTHAN("greaterthan"),
    
    LESSTHAN("lessthan"),
    
    CONTAINS("contains"),
    
    NOTCONTAINS("notcontains");

    private String value;

    OperatorEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static OperatorEnum fromValue(String value) {
      for (OperatorEnum b : OperatorEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }

    public static class Adapter extends TypeAdapter<OperatorEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final OperatorEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public OperatorEnum read(final JsonReader jsonReader) throws IOException {
        String value = jsonReader.nextString();
        return OperatorEnum.fromValue(value);
      }
    }
  }

  public static final String SERIALIZED_NAME_OPERATOR = "operator";
  @SerializedName(SERIALIZED_NAME_OPERATOR)
  private OperatorEnum operator = OperatorEnum.EQUALS;

  public static final String SERIALIZED_NAME_UNAME = "uname";
  @SerializedName(SERIALIZED_NAME_UNAME)
  private String uname;

  public Check timestamp(OffsetDateTime timestamp) {
    this.timestamp = timestamp;
    return this;
  }

   /**
   * Get timestamp
   * @return timestamp
  **/
  @Nullable
  @ApiModelProperty(value = "")
  public OffsetDateTime getTimestamp() {
    return timestamp;
  }

  public void setTimestamp(OffsetDateTime timestamp) {
    this.timestamp = timestamp;
  }

  public Check identifiers(List<Identifier> identifiers) {
    this.identifiers = identifiers;
    return this;
  }

  public Check addIdentifiersItem(Identifier identifiersItem) {
    if (this.identifiers == null) {
      this.identifiers = new ArrayList<Identifier>();
    }
    this.identifiers.add(identifiersItem);
    return this;
  }

   /**
   * An array of ordered static* identifiers that in combination with the checkUName used as a unique record identifiers. &lt;br&gt; *Static refers to the fact the identifiers will remain in the same order, unless there&#39;s a desired change.
   * @return identifiers
  **/
  @Nullable
  @ApiModelProperty(value = "An array of ordered static* identifiers that in combination with the checkUName used as a unique record identifiers. <br> *Static refers to the fact the identifiers will remain in the same order, unless there's a desired change.")
  public List<Identifier> getIdentifiers() {
    return identifiers;
  }

  public void setIdentifiers(List<Identifier> identifiers) {
    this.identifiers = identifiers;
  }

  public Check tags(List<Tag> tags) {
    this.tags = tags;
    return this;
  }

  public Check addTagsItem(Tag tagsItem) {
    if (this.tags == null) {
      this.tags = new ArrayList<Tag>();
    }
    this.tags.add(tagsItem);
    return this;
  }

   /**
   * Non-unique identifiers (tags) for the check that can be searched by.
   * @return tags
  **/
  @Nullable
  @ApiModelProperty(value = "Non-unique identifiers (tags) for the check that can be searched by.")
  public List<Tag> getTags() {
    return tags;
  }

  public void setTags(List<Tag> tags) {
    this.tags = tags;
  }

  public Check leftCompareObj(Map<String, Object> leftCompareObj) {
    this.leftCompareObj = leftCompareObj;
    return this;
  }

  public Check putLeftCompareObjItem(String key, Object leftCompareObjItem) {
    if (this.leftCompareObj == null) {
      this.leftCompareObj = new HashMap<String, Object>();
    }
    this.leftCompareObj.put(key, leftCompareObjItem);
    return this;
  }

   /**
   * Actual result
   * @return leftCompareObj
  **/
  @Nullable
  @ApiModelProperty(value = "Actual result")
  public Map<String, Object> getLeftCompareObj() {
    return leftCompareObj;
  }

  public void setLeftCompareObj(Map<String, Object> leftCompareObj) {
    this.leftCompareObj = leftCompareObj;
  }

  public Check rightCompareObj(Map<String, Object> rightCompareObj) {
    this.rightCompareObj = rightCompareObj;
    return this;
  }

  public Check putRightCompareObjItem(String key, Object rightCompareObjItem) {
    this.rightCompareObj.put(key, rightCompareObjItem);
    return this;
  }

   /**
   * Expected result
   * @return rightCompareObj
  **/
  @ApiModelProperty(required = true, value = "Expected result")
  public Map<String, Object> getRightCompareObj() {
    return rightCompareObj;
  }

  public void setRightCompareObj(Map<String, Object> rightCompareObj) {
    this.rightCompareObj = rightCompareObj;
  }

  public Check operator(OperatorEnum operator) {
    this.operator = operator;
    return this;
  }

   /**
   * Comparison operator, from left to right, when order matters.
   * @return operator
  **/
  @Nullable
  @ApiModelProperty(value = "Comparison operator, from left to right, when order matters.")
  public OperatorEnum getOperator() {
    return operator;
  }

  public void setOperator(OperatorEnum operator) {
    this.operator = operator;
  }

  public Check uname(String uname) {
    this.uname = uname;
    return this;
  }

   /**
   * Check unique name (used as id)
   * @return uname
  **/
  @ApiModelProperty(required = true, value = "Check unique name (used as id)")
  public String getUname() {
    return uname;
  }

  public void setUname(String uname) {
    this.uname = uname;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Check check = (Check) o;
    return Objects.equals(this.timestamp, check.timestamp) &&
        Objects.equals(this.identifiers, check.identifiers) &&
        Objects.equals(this.tags, check.tags) &&
        Objects.equals(this.leftCompareObj, check.leftCompareObj) &&
        Objects.equals(this.rightCompareObj, check.rightCompareObj) &&
        Objects.equals(this.operator, check.operator) &&
        Objects.equals(this.uname, check.uname);
  }

  @Override
  public int hashCode() {
    return Objects.hash(timestamp, identifiers, tags, leftCompareObj, rightCompareObj, operator, uname);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Check {\n");
    sb.append("    timestamp: ").append(toIndentedString(timestamp)).append("\n");
    sb.append("    identifiers: ").append(toIndentedString(identifiers)).append("\n");
    sb.append("    tags: ").append(toIndentedString(tags)).append("\n");
    sb.append("    leftCompareObj: ").append(toIndentedString(leftCompareObj)).append("\n");
    sb.append("    rightCompareObj: ").append(toIndentedString(rightCompareObj)).append("\n");
    sb.append("    operator: ").append(toIndentedString(operator)).append("\n");
    sb.append("    uname: ").append(toIndentedString(uname)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

