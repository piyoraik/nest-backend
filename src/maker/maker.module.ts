import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MakerRepository } from './maker.repository';
import { MakerService } from './maker.service';
import { MakerController } from './maker.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MakerRepository])],
  providers: [MakerService],
  exports: [MakerService],
  controllers: [MakerController],
})
export class MakerModule {}
