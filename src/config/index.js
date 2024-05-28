const AppConfig = {
    NODE_ENV: process.env.NODE_ENV || "DEV",
    APP_PORT: process.env.APP_PORT || "5000",
    DB_HOST: process.env.DB_HOST || "127.0.0.1",
    DB_PORT: process.env.DB_PORT || 27017,
    DB_NAME: process.env.DB_NAME || "test",
    NODE_MAILER_USERNAME: process.env.NODE_MAILER_USERNAME,
    NODE_MAILER_PASSWORD: process.env.NODE_MAILER_PASSWORD,
    PROGRAM_ID: process.env.PROGRAM_ID || "",
    PRIVATE_KEY: process.env.PRIVATE_KEY || "",
};

module.exports = AppConfig;
