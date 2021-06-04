<<<<<<< HEAD
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
=======
import { commodityService as defs } from './baseClass'
export { commodityService } from './mods/'
export { defs }
>>>>>>> fa233df7eb1a8e0951b59c488c47b786c4ecb3f1
