import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PostModule } from './post/post.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './common/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UserModule,
    AuthModule,
    PostModule,
    JwtModule.register({
      global: true,
      secret: 'jwsConstants.secret',
      signOptions: { expiresIn: '1d' }
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [User],
      synchronize: true
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
