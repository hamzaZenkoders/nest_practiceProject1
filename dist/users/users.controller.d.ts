import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user-dto';
import { LoginInUserDto } from './dto/login-user-dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findOne(id: number): Promise<import("./entity/user.entity").User>;
    signUp(user: CreateUserDto): Promise<import("./entity/user.entity").User>;
    signIn(loginInUserDto: LoginInUserDto): Promise<{
        token: string;
    }>;
}
