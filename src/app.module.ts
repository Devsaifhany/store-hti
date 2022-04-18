import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './modules/auth/auth.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import {config} from '../config';


@Module({
  imports: [
    TypeOrmModule.forRoot(config.db2 as TypeOrmModuleOptions)
    ,AuthModule
  ],
  controllers: [AppController],
  
})
export class AppModule {}
