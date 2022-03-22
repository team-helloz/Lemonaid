package com.helloz.lemonaid.common.exception;

public class NotFoundException extends RuntimeException {
    public NotFoundException(){
        super("Not Found Exception");
    }
}
