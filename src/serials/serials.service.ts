import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSerialDto } from './dto/create-serial.dto';
import { UpdateSerialDto } from './dto/update-serial.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Serial } from './entities/serial.entity';


@Injectable()
export class SerialsService {
  constructor(@InjectRepository(Serial)  private readonly serialRepository: Repository<Serial>)
    {}

  async create(createSerialDto: CreateSerialDto) {
   const serial = this.serialRepository.create(createSerialDto);

   return await this.serialRepository.save(serial);
  }

  async findAll() {
    return await this.serialRepository.find();
  }

  async findOne(id: number) {
    return await this.serialRepository.findOne({
      where: {id}
    });
  }

  async update(id: number, updateSerialDto: UpdateSerialDto) {
    const serial = await this.findOne(id);
     
    if(!serial){
      throw new NotFoundException("No such serial found");
    }

    Object.assign(serial, updateSerialDto);

    return await this.serialRepository.save(serial);

  }

 async remove(id: number) {
    const serial = await this.findOne(id);
     
    if(!serial){
      throw new NotFoundException("No such serial found");
    }

    return await this.serialRepository.remove(serial);
  }

}
