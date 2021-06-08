class ApiResult {
  /** data */
  data = []

  /** errCode */
  errCode = undefined

  /** errMsg */
  errMsg = ''
}

class AuthDTO {
  /** authId */
  authId = undefined

  /** authKey */
  authKey = ''

  /** authName */
  authName = ''

  /** authPath */
  authPath = ''

  /** leaf */
  leaf = undefined
}

export const authService = {
  ApiResult,
  AuthDTO
}
