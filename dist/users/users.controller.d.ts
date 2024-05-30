import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(role?: 'Teacher' | 'Student' | 'Admin'): {
        id: number;
        name: string;
        email: string;
        role: string;
    }[];
    findOne(id: number): {
        id: number;
        name: string;
        email: string;
        role: string;
    }[];
    registerUser(user: CreateUserDto): {
        name: string;
        email: string;
        role: "Teacher" | "Student" | "Admin";
        id: number;
    };
    update(id: number, updateUserDto: UpdateUserDto): {
        id: number;
        name: string;
        email: string;
        role: string;
    }[];
    DeleteOne(id: number): {
        id: number;
        name: string;
        email: string;
        role: string;
    }[];
}
