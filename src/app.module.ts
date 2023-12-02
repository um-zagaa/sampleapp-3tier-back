/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SystemSettingEntitiy } from './typeorm/entities/system_setting.entity';
import { SystemSettingsModule } from './system_settings/system_settings.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'sampleapp3tier_api_development',
    entities: [SystemSettingEntitiy],
    synchronize: true
  }), SystemSettingsModule],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule { }