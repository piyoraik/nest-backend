import { CarBodyEvaluation } from 'src/entity/car.body.evaluation.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(CarBodyEvaluation)
export class CarBodyEvaluationRepository extends Repository<CarBodyEvaluation> {}
