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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SerialsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const serial_entity_1 = require("./entities/serial.entity");
let SerialsService = class SerialsService {
    constructor(serialRepository) {
        this.serialRepository = serialRepository;
    }
    async create(createSerialDto) {
        const serial = this.serialRepository.create(createSerialDto);
        return await this.serialRepository.save(serial);
    }
    async findAll() {
        return await this.serialRepository.find();
    }
    async findOne(id) {
        return await this.serialRepository.findOne({
            where: { id }
        });
    }
    async update(id, updateSerialDto) {
        const serial = await this.findOne(id);
        if (!serial) {
            throw new common_1.NotFoundException("No such serial found");
        }
        Object.assign(serial, updateSerialDto);
        return await this.serialRepository.save(serial);
    }
    async remove(id) {
        const serial = await this.findOne(id);
        if (!serial) {
            throw new common_1.NotFoundException("No such serial found");
        }
        return await this.serialRepository.remove(serial);
    }
};
exports.SerialsService = SerialsService;
exports.SerialsService = SerialsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(serial_entity_1.Serial)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], SerialsService);
//# sourceMappingURL=serials.service.js.map