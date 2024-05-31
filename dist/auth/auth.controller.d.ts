import { AuthService } from './auth.service';
import { SignUpDto } from './dto/sign-up-dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    create(signUpDto: SignUpDto): Promise<import("../users/entity/user.entity").User>;
}
