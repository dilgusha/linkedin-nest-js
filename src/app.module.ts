import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PostModule } from './post/post.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './common/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { EducationModule } from './education/education.module';
import { Education } from './common/entities/education.entity';

@Module({
  imports: [
    UserModule,
    AuthModule,
    PostModule,
    EducationModule,
    JwtModule.register({
      global: true,
      secret: 'jwsConstants.secret',
      signOptions: { expiresIn: '1d' }
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [User, Education],
      synchronize: true
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
