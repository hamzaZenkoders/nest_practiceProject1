import { IsEmail, IsString,  IsNotEmpty } from "class-validator";


export class LoginInUserDto{
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @IsString()
    password:string;
/* 
    @IsNotEmpty()
    @IsString()
    role:string;  */
}