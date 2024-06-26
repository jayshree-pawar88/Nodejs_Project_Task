const ENV = process.env;

export = {
    BASE_URL: ENV.BASE_URL,
    APP_BASE_URL: ENV.APP_BASE_URL,
    DB : {
        DATABASE_HOST: ENV.DATABASE_HOST,
        DATABASE_USER: ENV.DATABASE_USER,
        DATABASE_PASSWORD: ENV.DATABASE_PASSWORD,
        DATABASE: ENV.DATABASE,
        TIMEZONE: ENV.MASTER_DB_TIMEZONE
    },
    JWT_TOKEN: {
        SECRET_KEY: ENV.JWT_TOKEN_SECRET_KEY,
        EXPIRY: ENV.JWT_TOKEN_EXPIRY || '1d'
    },
}
