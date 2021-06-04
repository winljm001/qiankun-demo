import {
  defs as commodityServiceDefs,
  commodityService
} from './commodityService'

import { defs as authServiceDefs, authService } from './authService'

import { defs as userServiceDefs, userService } from './userService'

;(window as any).defs = {
  commodityService: commodityServiceDefs,
  authService: authServiceDefs,
  userService: userServiceDefs
}
;(window as any).API = {
  commodityService,
  authService,
  userService
}
