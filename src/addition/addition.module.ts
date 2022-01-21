import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdditionRepository } from './addition.repository';
import { AdditionService } from './addition.service';

@Module({
  imports: [TypeOrmModule.forFeature([AdditionRepository])],
  providers: [AdditionService],
  exports: [AdditionService],
})
export class AdditionModule {}
