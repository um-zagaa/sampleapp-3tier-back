/* systemSettings.service.ts */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SystemSettingEntitiy } from 'src/typeorm/entities/system_setting.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SystemSettingsService {

    constructor(
        @InjectRepository(SystemSettingEntitiy) private systemSettingRepository: Repository<SystemSettingEntitiy>,
    ) { }

    getSystemSettings() {
        return this.systemSettingRepository.find();
    }
 
    getSystemSetting(id: number) {
        return this.systemSettingRepository.find();
        // return this.systemSettingRepository.findOne({ id });
    }
}