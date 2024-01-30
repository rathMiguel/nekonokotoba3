declare module 'process' {
  global {
    namespace NodeJS {
      interface ProcessEnv {
        NOTION_TOKEN: string;
        NOTION_DATABASE_ID: string;
        WP_BASE_URL: string;
      }
    }
  }
}
