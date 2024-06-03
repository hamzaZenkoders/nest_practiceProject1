import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entity/user.entity';
import { Repository } from 'typeorm';
export declare class AuthService {
    private userRepository;
    private jwtService;
    constructor(userRepository: Repository<User>, jwtService: JwtService);
}
