import {
  defs as commodityServiceDefs,
  commodityService
} from './commodityService'

import { defs as userServiceDefs, userService } from './userService'

import { defs as authServiceDefs, authService } from './authService'

;(window as any).defs = {
  commodityService: commodityServiceDefs,
  userService: userServiceDefs,
  authService: authServiceDefs
}
;(window as any).API = {
  commodityService,
  userService,
  authService
}
