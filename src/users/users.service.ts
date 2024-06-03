import { HttpException, HttpStatus, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { LoginInUserDto } from './dto/login-user-dto';
import { JwtService } from '@nestjs/jwt';




@Injectable()
export class UsersService {
    /* private users = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "email": "Sincere@april.biz",
            "role": "INTERN",
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "email": "Shanna@melissa.tv",
            "role": "Student",
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "email": "Nathan@yesenia.net",
            "role": "ENGINEER",
        },
        {
            "id": 4,
            "name": "Patricia Lebsack",
            "email": "Julianne.OConner@kory.org",
            "role": "ENGINEER",
        },
        {
            "id": 5,
            "name": "Chelsey Dietrich",
            "email": "Lucio_Hettinger@annie.ca",
            "role": "Student",
        }
    ] */

    constructor(
        @InjectRepository(User)
     private userRepository: Repository<User>,
     private jwtSerice: JwtService,
   ){}

   /*  findAll(role?: 'Teacher' | 'Student' | 'Admin'){
        if(role){
           const rolesArray =  this.users.filter((user)=>user.role === role);

           if(rolesArray.length === 0) throw new NotFoundException("User Role Not Found")

            return rolesArray;
        }

        return this.users;
    }

    findOne(id: number){
       const user = this.users.filter((user)=>user.id === id);

      // console.log(user.length);

       if(user.length === 0) throw new NotFoundException("User Not Found");

       return user;
    }
 */
/*     create(createUserDto: CreateUserDto){
        const usersByHighestId = [...this.users].sort((a,b)=>b.id - a.id);
        const newUser = {
            id: usersByHighestId[0].id + 1,
            ... createUserDto
        }
        this.users.push(newUser);
        return newUser;
    } */

 /*    update(id: number, updatedUserDto:UpdateUserDto){
     
      
       this.users = this.users.map(user => {
          if(user.id === id){
            return {...user, ...updatedUserDto};
          }
        return user;
       })

       return this.findOne(id);

    }

    delete(id: number){
        const removedUser = this.findOne(id);
        this.users = this.users.filter(user => user.id !== id);
        return removedUser;
     } */

     async register(createUserDto: CreateUserDto){
  
            const existingUser = await this.userRepository.findOne({ where: { email: createUserDto.email } });

            
            if (existingUser) {
                throw new HttpException('User already exists', HttpStatus.FORBIDDEN);
            }

            const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
            const newUser = await this.userRepository.create({...createUserDto, password: hashedPassword});
            console.log(newUser);
            const savedUser = await this.userRepository.save(newUser);

            console.log('User saved to database:', savedUser);

            return savedUser;
       
    }

    async logIn(loginInUserDto: LoginInUserDto){

        const UserFound = await this.userRepository.findOne({ where: { email: loginInUserDto.email } });

            
        if (!UserFound) {
          return null;
        }
        
       const passwordMatched = await bcrypt.compare(loginInUserDto.password,UserFound.password);
       
       if(!passwordMatched){
        throw new UnauthorizedException();
       }

       const { password, ...user } = UserFound;
       const token = this.jwtSerice.sign({user});

       return {token};

    }

    async findOne(id: number){
        return this.userRepository.findOne({ where: { id } });
    }

}
