import { Module } from '@nestjs/common';
import { SerialsService } from './serials.service';
import { SerialsController } from './serials.controller';
import { Serial } from './entities/serial.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([Serial])],
  controllers: [SerialsController],
  providers: [SerialsService],
})
export class SerialsModule {}
