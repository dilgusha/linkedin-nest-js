import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PostModule } from './post/post.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './config';
import { UserEntity } from './user/User.entity';
import { EducationEntity } from './education/education.entity';
import { JwtModule } from '@nestjs/jwt';
import { EducationModule } from './education/education.module';
import { CategoryModule } from './category/category.module';
import { ExperienceModule } from './experience/experience.module';
import { Experience } from './experience/experience.entity';

@Module({
  imports: [UserModule, AuthModule, PostModule,EducationModule,ExperienceModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite', 
      entities: [UserEntity,EducationEntity,Experience],
      synchronize: true,
      // logging: true,
    }),
    JwtModule.register({
      global: true,
      secret: 'secretKey',
      signOptions: { expiresIn: '7d' },
    }),
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
