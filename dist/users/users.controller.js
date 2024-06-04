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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const create_user_dto_1 = require("./dto/create-user-dto");
const login_user_dto_1 = require("./dto/login-user-dto");
const authentication_guards_1 = require("./guards/authentication.guards");
const authorization_guards_1 = require("./guards/authorization.guards");
const roles_decorators_1 = require("../decorators/roles.decorators");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    findOneUser({ user }, id) {
        console.log(user);
        const userFind = this.usersService.findOne(id);
        return userFind;
    }
    signUp(user) {
        return this.usersService.register(user);
    }
    signIn(loginInUserDto) {
        return this.usersService.logIn(loginInUserDto);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, roles_decorators_1.Role)('admin'),
    (0, common_1.UseGuards)(authentication_guards_1.AuthenticationGuard, authorization_guards_1.AuthorizationGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findOneUser", null);
__decorate([
    (0, common_1.Post)('/signUp'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "signUp", null);
__decorate([
    (0, common_1.Post)('/signIn'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_user_dto_1.LoginInUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "signIn", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map