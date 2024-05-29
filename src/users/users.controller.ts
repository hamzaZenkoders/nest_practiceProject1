import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')  //it is defining the route i.e /users
export class UsersController {
   /*  GET /users
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id  
*/
   @Get()   //GET /users
     findAll(){
        return [];
     }

     @Get('interns')
     findAllInterns(){
         return []
     } 

    @Get(':id')   // GET /users/:id
    findOne(@Param('id') id: string){
        return { id } ;
    }
     
   /*  @Post(){
        registerUser(){}
    } */
   
}
