import { Module, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './shared/middlewares/logger.middleware';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule, ConfigService } from 'nestjs-config';
import { SequelizeModule } from '@nestjs/sequelize';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.load(
      path.resolve(__dirname, 'config', '**/!(*.d|index).{ts,js}'),
    ),
    SequelizeModule.forRootAsync({
      useFactory: (config: ConfigService) => {
        console.log(config.get('database'));
        return config.get('database');
      },
      inject: [ConfigService],
    }),
    AuthModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware);
  }
}
