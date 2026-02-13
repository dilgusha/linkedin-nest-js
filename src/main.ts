import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import cookieSession from 'cookie-session';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    cookieSession({
      name: 'session',
      keys: ['secret_keys_1'],
      maxAge: 24 * 60 * 60 * 1000
    })
  )

  const config = new DocumentBuilder()
    .setTitle('Llinkedin class example')
    .setDescription('The Linkedin API description')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('Linkedin')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }))
  await app.listen(process.env.PORT ?? 3014);
}
bootstrap();
