type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value
}

declare namespace defs {
  export namespace authService {
    export class ApiResult<T0 = any> {
      /** data */
      data?: Array<defs.authService.AuthDTO>

      /** errCode */
      errCode?: number

      /** errMsg */
      errMsg?: string
    }

    export class AuthDTO {
      /** authId */
      authId?: number

      /** authKey */
      authKey?: string

      /** authName */
      authName?: string

      /** authPath */
      authPath?: string

      /** leaf */
      leaf?: number
    }
  }
}

declare namespace API {
  export namespace authService {
    /**
     * 角色权限管理
     */
    export namespace role {
      /**
       * 根据用户ID获取权限列表
       * /api/auth/v1/role/authListByUserId
       */
      export namespace authListByUserId {
        export class Params {
          /** userId */
          userId: number
        }

        export type Response = defs.authService.ApiResult<
          Array<defs.authService.AuthDTO>
        >
        export const init: Response
        export function request(
          params: Params
        ): Promise<defs.authService.ApiResult<Array<defs.authService.AuthDTO>>>
      }
    }
  }
}
