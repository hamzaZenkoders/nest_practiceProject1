import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe, ValidationPipe, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';
import { LoginInUserDto } from './dto/login-user-dto';
import { AuthGuard } from 'src/auth/auth.guard';


@Controller('users')  //it is defining the route i.e /users
export class UsersController {
     
   constructor(private readonly usersService: UsersService){}

 /*   @Get()   //GET /users
     findAll(@Query('role') role ?: 'Teacher' | 'Student' | 'Admin'){
        return this.usersService.findAll(role);
     }

    @Get(':id')   // GET /users/:id
    findOne(@Param('id', ParseIntPipe) id: number){
        return this.usersService.findOne(id);
    }
     
    @Post() //register user
     registerUser(@Body(ValidationPipe) user: CreateUserDto){
         return this.usersService.create(user);
     } 
     
     @Patch(':id')  //PATCH /users/:id
     update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateUserDto: UpdateUserDto){
       return this.usersService.update(id,updateUserDto);

     }

     @Delete(':id')   // Delete /users/:id
     DeleteOne(@Param('id', ParseIntPipe) id: number){
         return this.usersService.delete(id);
     }
 */
     @UseGuards(AuthGuard)
     @Get(':id')
     findOne(@Param('id', ParseIntPipe) id: number){
      return this.usersService.findOne(id);
  }
     @Post('/signUp')
     signUp(@Body() user:CreateUserDto){
         return this.usersService.register(user);
     }

     @Post('/signIn')
     signIn(@Body() loginInUserDto: LoginInUserDto){
       return this.usersService.logIn(loginInUserDto);
     }
   
}
