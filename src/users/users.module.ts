import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { PassportModule } from '@nestjs/passport';
//import { LocalStrategy } from './strategies/local.strategy';
//import { LocalGuard } from './guards/authentication.guards';



@Module({
    imports: [TypeOrmModule.forFeature([User]),PassportModule],
    controllers: [UsersController],
    providers: [UsersService]
})
export class UsersModule {}
