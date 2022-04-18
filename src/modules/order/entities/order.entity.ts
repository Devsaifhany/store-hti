import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { User } from '../../auth/entities/user.entity';
import {Status} from '../../../commons/enums/order-status.enum';
import { Branch } from 'src/commons/enums/branch.entity';

@Entity('orders')
export class Order extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column('jsonb', {nullable: true})
  orderedName?: object[];

  //  @Column('jsonb')
  //  tasks: Foo[];

  // @Column("simple-json")
  // orderedName:{ name: string; count: number }

  @Column({
    default: false
  })
  acceptFromManagerStore: Boolean;

  @Column()
  notes: string;

  @Column({
    default: ''
  })
  dateOfOrder: string;

  @Column({
    default: ''
  })
  dateOfsent: string;

  @ManyToOne(type => User, user => user.orders, {
    eager: false
  })
  user: User;

  // Foreign Key
  @Column()
  userId: number

  @Column({
    type: 'enum',
    enum: Status,
    array: true,
  })
  status: Status[];

  @Column({
    type: 'enum',
    enum: Branch,
    array: true,
  })
  branch: Branch[];


}
