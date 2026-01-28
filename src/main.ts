import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from './config';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Linkedin clone example')
    .setDescription('The linkedin API description')
    .setVersion('1.0')
    .addTag('linkedin')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, documentFactory);
  
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }));
  await app.listen( 3000);
}
bootstrap();
