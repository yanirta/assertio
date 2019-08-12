import org.junit.Ignore;
import org.junit.Test;

@Ignore
public class assertioTest {

    @Test
    public void assertBasics() {
        assertio assertion = new assertio("http://localhost:8080/api/0.0.1", "TBD");
        assertion.assertEquals(null, null, "Nulls should match");
        assertion.assertEquals("abc", "abc", "Strings should match");
        assertion.assertEquals(1, 1, "Numbers should match");
        assertion.assertEquals(1.23, 1.23, "Floating numbers should match");
        assertion.assertEquals(true, true, "Booleans should match");
        assertion.assertEquals('a', 'a', "Chars should match");

        assertion.assertEquals(new int[]{1, 2, 3}, new int[]{1, 2, 3}, "Int arrays should match");
        assertion.assertEquals(new String[]{"abc", "def", "ge"}, new String[]{"abc", "def", "ge"}, "String arrays should match");
        assertion.assertEquals(new double[]{1.2, 2.3, 3.4}, new double[]{1.2, 2.3, 3.4}, "Double arrays should match");
        assertion.assertEquals(new byte[]{'a', 'b', 'c'}, new byte[]{'a', 'b', 'c'}, "Byte arrays should match");
        assertion.assertEquals(new char[]{'a', 'b', 'c', 'd'}, new char[]{'a', 'b', 'c', 'd'}, "Char arrays should match");
        assertion.assertEquals(new boolean[]{true, true, false}, new boolean[]{true, true, false}, "Bool arrays should match");

        assertion.assertNotEquals("abc", "abd", "Strings should match");
        assertion.assertNotEquals(1, 2, "Numbers should match");
        assertion.assertNotEquals(1.23, 1.24, "Floating numbers should match");
        assertion.assertNotEquals(true, false, "Booleans should match");
        assertion.assertNotEquals('a', 'b', "Chars should match");

        assertion.assertNotEquals(new int[]{1, 2, 3}, new int[]{1, 2, 4}, "Int arrays should match");
        assertion.assertNotEquals(new String[]{"abc", "def", "geh"}, new String[]{"abc", "def", "gehh"}, "String arrays should match");
        assertion.assertNotEquals(new double[]{1.2, 2.3, 3.4}, new double[]{1.2, 2.3, 3.3}, "Double arrays should match");
        assertion.assertNotEquals(new byte[]{'a', 'b', 'c'}, new byte[]{'a', 'b', 'd'}, "Byte arrays should match");
        assertion.assertNotEquals(new char[]{'a', 'b', 'c', 'd'}, new char[]{'a', 'b', 'c'}, "Char arrays should match");
        assertion.assertNotEquals(new boolean[]{true, false}, new boolean[]{true, true, false}, "Bool arrays should match");

        assertion.assertGreater(1000, 0, "1000 should be greater than 0");
        assertion.assertGreater(0.1, 0.01, "0.1 should be greater than 0.01");

        assertion.assertLower(0, 1000, "1000 should be lower than 0");
        assertion.assertLower(0.01, 0.1, "0.01 should be lower than 0.1");

    }

    @Test(expected = ValidationFailedException.class)
    public void assertException() {
        assertio assertion = new assertio("http://localhost:8080/api/0.0.1", "TBD");
        assertion.assertEquals("abc", 1, "Strings should match");
    }

    @Test(expected = ValidationFailedException.class)
    public void assertEqualFail() {
        assertio assertion = new assertio("http://localhost:8080/api/0.0.1", "TBD");
        assertion.assertEquals(null, 1, "Strings should match");
    }

    @Test
    public void validations() {
        assertio assertion = new assertio("http://localhost:8080/api/0.0.1", "TBD");
        assertion.validateEquals(null, "Nulls should match");
        assertion.validateEquals("abc", "Strings should match");
        assertion.validateEquals(1, "Numbers should match");
        assertion.validateEquals(1.23, "Floating numbers should match");
        assertion.validateEquals(true, "Booleans should match");
        assertion.validateEquals('a', "Chars should match");
    }
}