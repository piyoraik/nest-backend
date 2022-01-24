import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
} from 'typeorm';
import { Members } from './members.entity';
import { PaymentMethod } from '../enum/paymentMethod.enum';
import { DeliveryMethod } from '../enum/deliveryMethod.enum';
import { AuctionListing } from './auction.listing.entity';

@Entity()
export class Purchase {
  @PrimaryGeneratedColumn({ comment: '購入ID' })
  id: number;

  @ManyToOne(() => AuctionListing, (auctionListing) => auctionListing.purchase)
  auctionListing: AuctionListing;

  @ManyToOne(() => Members, (member) => member.purchase)
  member: Members;

  @Column({ comment: 'オプションの有無' })
  option: boolean;

  @Column({ comment: '印鑑証明書' })
  sealCertificate: boolean;

  @Column({ comment: '印鑑' })
  seal: boolean;

  @Column({ comment: '住民票' })
  residentsCard: boolean;

  @Column({ comment: '自動車検査書' })
  vehicleInspection: boolean;

  @Column({ comment: '自賠責保険証' })
  LiabilityInsurance: boolean;

  @Column({ comment: '委任状' })
  commission: boolean;

  @Column({ comment: '委任状(返)' })
  commissionReturn: boolean;

  @Column({ comment: '車庫証明書' })
  garageCertificate: boolean;

  @Column({ comment: '配送方法' })
  deliveryMethod: DeliveryMethod;

  @Column({ comment: '支払い方法' })
  paymentMethod: PaymentMethod;

  @Column({ comment: '入金' })
  payment: boolean;

  @Column({ comment: '納品' })
  delivery: boolean;

  @Column({ comment: 'キャンセル' })
  cancel: boolean;

  @CreateDateColumn({ comment: '作成日時' })
  createdAt: Date;

  @UpdateDateColumn({ comment: '更新日時' })
  updatedAt: Date;

  @DeleteDateColumn({ comment: '削除日時' })
  deletedAt: Date;
}
