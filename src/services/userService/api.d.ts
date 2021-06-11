type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value
}

declare namespace defs {
  export namespace userService {
    export class ApiResult<T0 = any> {
      /** data */
      data?: T0

      /** errCode */
      errCode?: number

      /** errMsg */
      errMsg?: string
    }

    export class LoginDto {
      /** 短信验证码 */
      checkCode?: string

      /** 用户电话号码 */
      phoneNum?: string

      /** userPlatform */
      userPlatform?: 'APP' | 'WEB'
    }

    export class MobileDto {
      /** 手机号 */
      phoneNum?: string
    }

    export class UserLoginResponseVO {
      /** 公司ID */
      organizationId?: number

      /** 公司名称 */
      organizationName?: string

      /** 用户token */
      token?: string

      /** 用户ID */
      userId?: number

      /** 用户名称 */
      userName?: string
    }
  }
}

declare namespace API {
  export namespace userService {
    /**
     * web-用户模块
     */
    export namespace userWeb {
      /**
       * login
       * /api/user/v1/web/user/login
       */
      export namespace login {
        export class Params {}

        export type Response = defs.userService.ApiResult<
          defs.userService.UserLoginResponseVO
        >
        export const init: Response
        export function request(
          params: Params,
          bodyParams: defs.userService.LoginDto
        ): Promise<
          defs.userService.ApiResult<defs.userService.UserLoginResponseVO>
        >
      }

      /**
       * sendCheckCode
       * /api/user/v1/web/user/sendCheckCode
       */
      export namespace sendCheckCode {
        export class Params {}

        export type Response = defs.userService.ApiResult<boolean>
        export const init: Response
        export function request(
          params: Params,
          bodyParams: defs.userService.MobileDto
        ): Promise<defs.userService.ApiResult<boolean>>
      }
    }
  }
}
