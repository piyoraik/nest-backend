import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExhibitorEntryRepository } from './exhibitor-entry.repository';
import { ExhibitorEntryService } from './exhibitor-entry.service';

@Module({
  imports: [TypeOrmModule.forFeature([ExhibitorEntryRepository])],
  providers: [ExhibitorEntryService],
  exports: [ExhibitorEntryService]
})
export class ExhibitorEntryModule {}
