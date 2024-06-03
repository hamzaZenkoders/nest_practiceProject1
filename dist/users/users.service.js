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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entity/user.entity");
const typeorm_2 = require("typeorm");
const jwt_1 = require("@nestjs/jwt");
let UsersService = class UsersService {
    constructor(userRepository, jwtSerice) {
        this.userRepository = userRepository;
        this.jwtSerice = jwtSerice;
    }
    async register(createUserDto) {
        const existingUser = await this.userRepository.findOne({ where: { email: createUserDto.email } });
        if (existingUser) {
            throw new common_1.HttpException('User already exists', common_1.HttpStatus.FORBIDDEN);
        }
        const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
        const newUser = await this.userRepository.create({ ...createUserDto, password: hashedPassword });
        console.log(newUser);
        const savedUser = await this.userRepository.save(newUser);
        console.log('User saved to database:', savedUser);
        return savedUser;
    }
    async logIn(loginInUserDto) {
        const UserFound = await this.userRepository.findOne({ where: { email: loginInUserDto.email } });
        if (!UserFound) {
            throw new common_1.UnauthorizedException();
        }
        const passwordMatched = await bcrypt.compare(loginInUserDto.password, UserFound.password);
        if (!passwordMatched) {
            throw new common_1.UnauthorizedException();
        }
        const token = this.jwtSerice.sign({ id: UserFound.name });
        return { token };
    }
    async findOne(id) {
        return this.userRepository.findOne(id);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], UsersService);
//# sourceMappingURL=users.service.js.map