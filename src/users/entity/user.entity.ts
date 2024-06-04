import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({type: 'text'})
  name: string;

  @Column({unique: true})
  email: string;

  @Column({type:'text'})
  password: string;
 
  @Column({type:'text'})
  role: string; 
  
}
