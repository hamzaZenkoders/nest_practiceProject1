import { CreateSerialDto } from './dto/create-serial.dto';
import { UpdateSerialDto } from './dto/update-serial.dto';
import { Repository } from 'typeorm';
import { Serial } from './entities/serial.entity';
export declare class SerialsService {
    private readonly serialRepository;
    constructor(serialRepository: Repository<Serial>);
    create(createSerialDto: CreateSerialDto): Promise<Serial>;
    findAll(): Promise<Serial[]>;
    findOne(id: number): Promise<Serial>;
    update(id: number, updateSerialDto: UpdateSerialDto): Promise<Serial>;
    remove(id: number): Promise<Serial>;
}
