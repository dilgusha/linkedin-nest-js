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
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CurrentUserInterceptor } from './interceptor/current-user.interceptor';
import { ExperienceModule } from './experience/experience.module';
import { Experience } from './common/entities/experience.entity';

@Module({
  imports: [
    UserModule,
    AuthModule,
    PostModule,
    EducationModule,
    ExperienceModule,
    JwtModule.register({
      global: true,
      secret: 'jwsConstants.secret',
      signOptions: { expiresIn: '1d' }
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [User, Education, Experience],
      synchronize: true
    })],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CurrentUserInterceptor
    }
  ],
})
export class AppModule { }
