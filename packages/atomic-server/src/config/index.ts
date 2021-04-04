import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

/**
 * 根据项目环境获取对应.env.production 或 .env.development 文件中的配置信息
 */
export default () => {
  const env = process.env.NODE_ENV || 'development';
  const config = dotenv.parse(
    fs.readFileSync(path.resolve(__dirname, '../../', `.env.${env}`)),
  );
  return config;
};
