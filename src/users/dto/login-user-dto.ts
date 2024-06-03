import { IsEmail, IsString,  IsNotEmpty } from "class-validator";


export class LoginInUserDto{
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    password:string;
}