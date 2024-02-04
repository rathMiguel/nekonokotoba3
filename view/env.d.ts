declare module 'process' {
  global {
    namespace NodeJS {
      interface ProcessEnv {
        NOTION_TOKEN: string;
        NOTION_DATABASE_ID: string;
        WP_API_URL: string;
        WP_BASE_URL: string;
        SHEET_ID: string;
        GOOGLE_API_KEY: string;
        GTM_KEY: string;
      }
    }
  }
}
