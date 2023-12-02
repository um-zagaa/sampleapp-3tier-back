"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemSettingsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const system_setting_entity_1 = require("../typeorm/entities/system_setting.entity");
const system_settings_controller_1 = require("./system_settings.controller");
const system_settings_service_1 = require("./system_settings.service");
let SystemSettingsModule = class SystemSettingsModule {
};
exports.SystemSettingsModule = SystemSettingsModule;
exports.SystemSettingsModule = SystemSettingsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([system_setting_entity_1.SystemSettingEntitiy])],
        controllers: [system_settings_controller_1.SystemSettingsController],
        providers: [system_settings_service_1.SystemSettingsService]
    })
], SystemSettingsModule);
//# sourceMappingURL=system_settings.module.js.map