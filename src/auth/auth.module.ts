import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm'; // Import TypeOrmModule
import { User } from 'src/users/entity/user.entity'; // Import User entity
import * as bcrypt from 'bcrypt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), // Import the User entity

    PassportModule,

    JwtModule.register({
      secret: 'your_secret_key', // Replace with your actual secret key
      signOptions: { expiresIn: '1h' }, // Adjust the expiration time as needed
    }),
  ],
  providers: [AuthService],
})
export class AuthModule {}
