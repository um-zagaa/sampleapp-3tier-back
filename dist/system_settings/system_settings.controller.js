"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemSettingsController = void 0;
const common_1 = require("@nestjs/common");
const system_settings_service_1 = require("./system_settings.service");
let SystemSettingsController = class SystemSettingsController {
    constructor(systemSettingService) {
        this.systemSettingService = systemSettingService;
    }
    getSystemSettings() {
        return this.systemSettingService.getSystemSettings();
    }
};
exports.SystemSettingsController = SystemSettingsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SystemSettingsController.prototype, "getSystemSettings", null);
exports.SystemSettingsController = SystemSettingsController = __decorate([
    (0, common_1.Controller)('system_settings'),
    __metadata("design:paramtypes", [system_settings_service_1.SystemSettingsService])
], SystemSettingsController);
//# sourceMappingURL=system_settings.controller.js.map