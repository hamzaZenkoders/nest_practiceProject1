import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class SignUpDto {
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;
  
    @IsString()
    @IsNotEmpty()
    password: string;
  
}
