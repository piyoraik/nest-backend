import { Injectable } from '@nestjs/common';
import { CarBodyEvaluation } from 'src/entity/car.body.evaluation.entity';
import { ListingCar } from 'src/entity/listing.car.entity';
import { CarBodyEvaluationRepository } from './car-body-evaluation.repostiroy';
import { CreateCarBodyEvaluationDTO } from './dto/create-carbodyevaluation.dto';

@Injectable()
export class CarBodyEvaluationService {
  constructor(
    private readonly carBodyEvaluationRepository: CarBodyEvaluationRepository,
  ) {}

  async create(
    createCarBodyEvaluationDTO: CreateCarBodyEvaluationDTO,
    listingCar: ListingCar,
  ) {
    return this.carBodyEvaluationRepository.createCarBodyEvaluation(
      createCarBodyEvaluationDTO,
      listingCar,
    );
  }

  async findOne(id: number) {
    return this.carBodyEvaluationRepository.findOneCarBodyEvaluation({ id });
  }

  async find(attrs: Partial<CarBodyEvaluation>) {
    return this.carBodyEvaluationRepository.findWhereCarBodyEvaluation(attrs);
  }

  async update(id: number, attrs: Partial<CarBodyEvaluation>) {
    return this.carBodyEvaluationRepository.updateCarBodyEvaluation(id, attrs);
  }

  async delete(id: number) {
    return this.carBodyEvaluationRepository.softDeleteCarBodyEvaluation(id);
  }
}
