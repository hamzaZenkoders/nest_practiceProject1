import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { SerialsModule } from './serials/serials.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth/constants';


@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'dxtx100',
    database: 'postgres',
    entities: [__dirname + '/../**/*.entity.js'],
    synchronize: true,
  }),
  
  JwtModule.register({
    global: true,
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '2h' },
  }),
  
  UsersModule, TasksModule, SerialsModule, AuthModule
],
  controllers: [AppController],
  providers: [AppService],
}) 



export class AppModule {}
