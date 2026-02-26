export const env = {
  apiBaseUrl: process.env.EXPO_PUBLIC_API_BASE_URL ?? 'https://api.avasya.local/v1',
  enableAi: process.env.EXPO_PUBLIC_ENABLE_AI === 'true',
  environment: process.env.EXPO_PUBLIC_ENV ?? 'development'
};
