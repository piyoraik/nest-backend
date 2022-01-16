import { Injectable } from '@nestjs/common';
import { CarBodyEvaluationRepository } from './car-body-evaluation.repostiroy';

@Injectable()
export class CarBodyEvaluationService {
  constructor(
    private readonly carBodyEvaluationRepository: CarBodyEvaluationRepository,
  ) {}
}
