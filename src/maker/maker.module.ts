import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MakerRepository } from './maker.repository';
import { MakerService } from './maker.service';

@Module({
  imports: [TypeOrmModule.forFeature([MakerRepository])],
  providers: [MakerService],
  exports: [MakerService]
})
export class MakerModule {}
