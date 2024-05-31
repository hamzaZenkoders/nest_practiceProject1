import { IsNotEmpty, IsString } from "class-validator";

export class CreateSerialDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()   
    category:string;
}
