import { SystemSettingsService } from './system_settings.service';
export declare class SystemSettingsController {
    private systemSettingService;
    constructor(systemSettingService: SystemSettingsService);
    getSystemSettings(): Promise<import("../typeorm/entities/system_setting.entity").SystemSettingEntitiy[]>;
    getSystemSetting(id: number): Promise<import("../typeorm/entities/system_setting.entity").SystemSettingEntitiy[]>;
}
