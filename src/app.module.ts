import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { SerialsModule } from './serials/serials.module';
import { AuthModule } from './auth/auth.module';


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
  }),UsersModule, TasksModule, SerialsModule, AuthModule
],
  controllers: [AppController],
  providers: [AppService],
}) 


/* @Module({
  imports: [
  UsersModule,
  TypeOrmModule.forRoot(),
],
  controllers: [AppController],
  providers: [AppService],
})
 */

export class AppModule {}
