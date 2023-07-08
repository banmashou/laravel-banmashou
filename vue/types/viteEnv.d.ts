/**
 * @description: Vite Environment Variables and Vite import.meta.env Types
 * @author: 斑马兽
 * @interface ViteEnv
 */

interface ImportMetaEnv {
  VITE_ROUTER_AUTOLOAD: boolean
  VITE_API_URL: string
  VITE_HOST: string
  VITE_PORT: number
  VITE_MOCK_ENABLE: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
