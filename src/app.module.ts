import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PostModule } from './post/post.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './config';
import { UserEntity } from './user/User.entity';

@Module({
  imports: [UserModule, AuthModule, PostModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite', 
      entities: [UserEntity ],
      synchronize: true,
      // logging: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
