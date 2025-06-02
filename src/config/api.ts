export const API_CONFIG = {
  BASE_URL: 'https://api.coingecko.com/api/v3',
  HEADERS: {
    'accept': 'application/json',
    'x-cg-demo-api-key': process.env.NEXT_PUBLIC_COINGECKO_API_KEY || ''
  }
} as const; 