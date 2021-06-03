class ApiResult {
  /** data */
  data = new UserLoginResponseVO()

  /** errCode */
  errCode = undefined

  /** errMsg */
  errMsg = ''
}

class LoginDto {
  /** 短信验证码 */
  checkCode = ''

  /** 用户电话号码 */
  phoneNum = ''

  /** userPlatform */
  userPlatform = 'APP'
}

class UserLoginResponseVO {
  /** 公司ID */
  organizationId = undefined

  /** 公司名称 */
  organizationName = ''

  /** 用户token */
  token = ''

  /** 用户ID */
  userId = undefined

  /** 用户名称 */
  userName = ''
}

export const userService = {
  ApiResult,
  LoginDto,
  UserLoginResponseVO
}
