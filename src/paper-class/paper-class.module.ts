import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListingCarModule } from 'src/listing-car/listing-car.module';
import { PaperClassRepository } from './paper-class.repository';
import { PaperClassService } from './paper-class.service';

@Module({
  imports: [TypeOrmModule.forFeature([PaperClassRepository]), ListingCarModule],
  providers: [PaperClassService],
})
export class PaperClassModule {}
