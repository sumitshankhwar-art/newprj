import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyModule } from './property/property.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { pgConfig } from 'dbconfig';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import dbconfig from './config/dbconfig';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true,
      expandVariables:true,
      load:[dbconfig]
    }),
    PropertyModule,TypeOrmModule.forRootAsync({
      useFactory:dbconfig}
    ), UserModule, AuthModule,

  ],
  controllers: [AppController],
  providers: [AppService],

})

export class AppModule {}
