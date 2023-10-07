package com.intelliPerp_Pr.exceptions;

public class InvalidDataException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public InvalidDataException(String str) {
		super(str);
	}

	public InvalidDataException() {
		super();
	}
}
