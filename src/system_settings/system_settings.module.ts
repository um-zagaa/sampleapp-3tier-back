/* system_settings.module.ts */
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SystemSettingEntitiy } from 'src/typeorm/entities/system_setting.entity';
import { SystemSettingsController } from './system_settings.controller';
import { SystemSettingsService } from './system_settings.service';

@Module({
  imports: [TypeOrmModule.forFeature([SystemSettingEntitiy])],
  controllers: [SystemSettingsController],
  providers: [SystemSettingsService]
})
export class SystemSettingsModule { }