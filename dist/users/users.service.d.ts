import { CreateUserDto } from './dto/create-user-dto';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { LoginInUserDto } from './dto/login-user-dto';
import { JwtService } from '@nestjs/jwt';
export declare class UsersService {
    private userRepository;
    private jwtSerice;
    constructor(userRepository: Repository<User>, jwtSerice: JwtService);
    register(createUserDto: CreateUserDto): Promise<User>;
    logIn(loginInUserDto: LoginInUserDto): Promise<{
        token: string;
    }>;
    findOne(id: any): Promise<User>;
}
