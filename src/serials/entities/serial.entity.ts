import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Serial {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({unique: true})
  name: string;

  @Column({type: 'text', nullable:true})
  category: string;

  
}


