import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entity/user.entity';
import { Repository } from 'typeorm';
import { SignUpDto } from './dto/sign-up-dto';
export declare class AuthService {
    private userRepository;
    private jwtService;
    constructor(userRepository: Repository<User>, jwtService: JwtService);
    signUp(signUpDto: SignUpDto): Promise<User>;
}
