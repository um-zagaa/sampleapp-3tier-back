/* systemSettings.controller.ts */
/* eslint-disable prettier/prettier */
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { SystemSettingsService } from './system_settings.service';
@Controller('system_settings')
export class SystemSettingsController {

    constructor(private systemSettingService: SystemSettingsService) { }

    @Get()
    getSystemSettings() {
        return this.systemSettingService.getSystemSettings();
    }

    @Get(':id')
    getSystemSetting(@Param('id', ParseIntPipe) id: number) {
        return this.systemSettingService.getSystemSetting(id);
    }
}