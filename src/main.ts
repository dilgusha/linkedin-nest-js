import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from './config';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
const cookieSession = require('cookie-session');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    cookieSession({
      keys: ['mysecretkey'],
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Linkedin clone example')
    .setDescription('The linkedin API description')
    .setVersion('1.0')
    .addTag('linkedin')
    .addBearerAuth()
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, documentFactory);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }));
  await app.listen(3001);
}
bootstrap();
