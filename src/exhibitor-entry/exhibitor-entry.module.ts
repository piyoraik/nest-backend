import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListingCarModule } from 'src/listing-car/listing-car.module';
import { ExhibitorEntryRepository } from './exhibitor-entry.repository';
import { ExhibitorEntryService } from './exhibitor-entry.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ExhibitorEntryRepository]),
    ListingCarModule,
  ],
  providers: [ExhibitorEntryService],
  exports: [ExhibitorEntryService],
})
export class ExhibitorEntryModule {}
