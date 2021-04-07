import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ExceptionsFilter } from './shared/filters/exceptions.filter';
import { ApiValidationPipe } from './shared/pipes/api-validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // swagger API 文档添加
  const config = new DocumentBuilder()
    .setTitle('atomic-admin')
    .setDescription('The atomic-admin API description')
    .setVersion('1.0')
    .addTag('api')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);

  // 异常捕捉过滤器添加
  app.useGlobalFilters(new ExceptionsFilter());

  // 全局过滤管道
  app.useGlobalPipes(new ApiValidationPipe());

  await app.listen(3000);
}
bootstrap();
