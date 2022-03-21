package com.helloz.lemonaid.common.model.response;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

/**
 * 서버 요청에대한 기본 응답값(바디) 정의.
 */
@Getter
@Setter
@ApiModel("BaseResponseBody")
public class BaseResponseBody {
    @ApiModelProperty(name = "응답 메시지", example = "정상")
    String message = null;
    @ApiModelProperty(name = "응답 코드", example = "200")
    Integer status = null;

    public BaseResponseBody() {
    }

    public BaseResponseBody(Integer status) {
        this.status = status;
    }

    public BaseResponseBody(Integer status, String message) {
        this.status = status;
        this.message = message;
    }

    public static BaseResponseBody of(Integer status, String message) {
        BaseResponseBody body = new BaseResponseBody();
        body.message = message;
        body.status = status;
        return body;
    }
}