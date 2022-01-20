import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarBodyEvaluationRepository } from './car-body-evaluation.repostiroy';
import { CarBodyEvaluationService } from './car-body-evaluation.service';

@Module({
  imports: [TypeOrmModule.forFeature([CarBodyEvaluationRepository])],
  providers: [CarBodyEvaluationService],
  exports: [CarBodyEvaluationService],
})
export class CarBodyEvaluationModule {}
