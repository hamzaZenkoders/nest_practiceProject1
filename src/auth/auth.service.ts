import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entity/user.entity';
import { Repository } from 'typeorm';
import { AuthPayloadDto } from './dto/auth-dto';
import * as bcrypt from 'bcrypt';



@Injectable()
export class AuthService {
    constructor(@InjectRepository(User) 
     private userRepository: Repository<User>,
     private jwtService: JwtService,
    )
    {}

   /*  async signUp(signUpDto: SignUpDto){
         const {name,email,password} = signUpDto;
         
         const hashedPassword = await bcrypt.hash(password,10);

         const newUser = this.userRepository.create({
            name,
            email,
            password: hashedPassword,
        });

        await this.userRepository.save(newUser);

        return newUser;


    }
 */
   /*  aysnc validateUser({ email, password }: AuthPayloadDto) {
        const findUser =  await this.userRepository.find({ where: { email: email } });
        if (!findUser) return null;
        if (password === findUser.password) {
          const { password, ...user } = findUser;
          return this.jwtService.sign(user);
        }
    } */
}
