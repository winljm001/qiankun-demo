import type React from 'react'
import { memo } from 'react'
import type { RouteConfigComponentProps } from 'react-router-config'
import { renderRoutes } from 'react-router-config'

const BlankLayout: React.FC<RouteConfigComponentProps> = memo((props) => {
  const { route } = props
  return renderRoutes(route?.routes)
})

export default BlankLayout
