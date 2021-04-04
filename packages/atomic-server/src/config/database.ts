import getConfig from './';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

const {
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  DATABASE_DB,
  DATABASE_LIMIT,
} = getConfig();

export default {
  dialect: 'mysql',
  autoLoadModels: true,
  synchronize: !IS_PRODUCTION,
  models: [],
  host: DATABASE_HOST,
  port: DATABASE_PORT,
  username: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
  database: DATABASE_DB,
  connectionLimit: DATABASE_LIMIT,
};
