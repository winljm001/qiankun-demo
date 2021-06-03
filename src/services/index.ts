import { defs as userServiceDefs, userService } from './userService'

import { defs as authServiceDefs, authService } from './authService'

import {
  defs as commodityServiceDefs,
  commodityService
} from './commodityService'

;(window as any).defs = {
  userService: userServiceDefs,
  authService: authServiceDefs,
  commodityService: commodityServiceDefs
}
;(window as any).API = {
  userService,
  authService,
  commodityService
}
