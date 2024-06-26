import { IsEmail, IsString, IsEnum, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

 
    @IsString()
    role: string;

    @IsNotEmpty()
    password:string;

  /*   @IsEnum(['Teacher','Student','Admin'],{
        message:"Provide a valid role"
    }) */

  //  role: 'Teacher' | 'Student' | 'Admin'
}