import { SystemSettingEntitiy } from 'src/typeorm/entities/system_setting.entity';
import { Repository } from 'typeorm';
export declare class SystemSettingsService {
    private systemSettingRepository;
    constructor(systemSettingRepository: Repository<SystemSettingEntitiy>);
    getSystemSettings(): Promise<SystemSettingEntitiy[]>;
}
