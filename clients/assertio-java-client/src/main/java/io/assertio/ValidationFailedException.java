package io.assertio;

public class ValidationFailedException extends AssertionError {
    public ValidationFailedException(String message) {
        super(message);
    }
}
