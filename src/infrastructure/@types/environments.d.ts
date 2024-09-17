declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_VERSION: string,
      NODE_ENV: 'development' | 'production' | 'test',
    }
  }
}

export {};
