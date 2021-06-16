/**
 * 配置文件
 */
interface CommonIConfig {
  authKey: string
}
interface EnvIconfig {
  /** api host */
  apiHost: string
  /** 上传host */
  uploadHost: string
  /** 项目根路径 */
  baseUrl: string
}
export interface Iconfig extends CommonIConfig, EnvIconfig {}

const env = import.meta.env?.VITE_APP_ENV
// 配置(公共)
const commonConfig: CommonIConfig = {
  authKey: 'Authorization',
}
// 配置(根据环境变量区分)
export const envConfig: Record<typeof env, EnvIconfig> = {
  // 开发环境
  dev: {
    apiHost: 'https://pitaya-dev.hjgpscm.com',
    uploadHost: 'https://pitaya-dev.hjgpscm.com',
    baseUrl: '/pitaya-app',
  },
  // 测试环境
  test: {
    apiHost: 'https://pitaya-dev.hjgpscm.com',
    uploadHost: 'https://pitaya-dev.hjgpscm.com',
    baseUrl: '/pitaya-app',
  },
  // 生产环境
  prod: {
    apiHost: 'https://durian.hjgpscm.com',
    uploadHost: 'https://durian.hjgpscm.com',
    baseUrl: '/pitaya-app',
  },
}
const config = { ...commonConfig, ...envConfig[env] }
export default config
