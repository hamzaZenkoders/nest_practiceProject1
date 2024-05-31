import { SerialsService } from './serials.service';
import { CreateSerialDto } from './dto/create-serial.dto';
import { UpdateSerialDto } from './dto/update-serial.dto';
export declare class SerialsController {
    private readonly serialsService;
    constructor(serialsService: SerialsService);
    create(createSerialDto: CreateSerialDto): Promise<import("./entities/serial.entity").Serial>;
    findAll(): Promise<import("./entities/serial.entity").Serial[]>;
    findOne(id: string): Promise<import("./entities/serial.entity").Serial>;
    update(id: string, updateSerialDto: UpdateSerialDto): Promise<import("./entities/serial.entity").Serial>;
    remove(id: string): Promise<import("./entities/serial.entity").Serial>;
}
