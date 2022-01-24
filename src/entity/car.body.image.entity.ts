import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { CarBodyNumber } from './car.body.number.entity';

@Entity()
export class CarBodyImage {
  //車体画像

  @PrimaryGeneratedColumn({ comment: '車体画像ID' })
  id: number;

  @Column({ comment: '車体画像' })
  img: string;

  @ManyToOne(() => CarBodyNumber, (carBodyNumber) => carBodyNumber.CarBodyImage)
  carBodyNumber: CarBodyNumber;
}
