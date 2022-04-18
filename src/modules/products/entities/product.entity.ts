import { Store } from './../../store/entities/store.entity';
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';
import {Status} from '../../../commons/enums/order-status.enum';

@Entity('products')
export class Product extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    default: false
  })
  name: string;

  @Column()
  count: number;

  @Column({
    default: ''
  })
  nameofsupplier: string;

  @Column({
    default: ''
  })
  phoneofsupplier: string;

  @Column({
    default: ''
  })
  supplieredCompany: string;

  @ManyToOne(type => Store, store => store.products, {
    eager: false
  })
  store: Store;


  // Foreign Key
  @Column()
  storeId: number

  @Column({
    type: 'enum',
    enum: Status,
    array: true,
  })
  status: Status[];


}
