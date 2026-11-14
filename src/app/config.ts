export const config = {
  envName: import.meta.env.VITE_ENV_NAME,
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL,
  isLoggerEnabled: import.meta.env.VITE_ENABLE_LOGGER === 'true',
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
} as const;


