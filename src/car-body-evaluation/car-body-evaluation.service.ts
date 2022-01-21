import { Injectable } from '@nestjs/common';
import { CarBodyEvaluation } from 'src/entity/car.body.evaluation.entity';
import { ListingCar } from 'src/entity/listing.car.entity';
import { CarBodyEvaluationRepository } from './car-body-evaluation.repostiroy';
import { CreateCarBodyEvaluationDTO } from './dto/create-carbodyevaluation.dto';

@Injectable()
// carBodyEvaluation.service.ts
export class CarBodyEvaluationService {
  constructor(
    private carBodyEvaluationRepository: CarBodyEvaluationRepository,
  ) {}

  // create
  async create(
    createCarBodyEvaluationDTO: CreateCarBodyEvaluationDTO,
    listingCar: ListingCar,
  ) {
    return await this.carBodyEvaluationRepository.createCarBodyEvaluation(
      createCarBodyEvaluationDTO,
      listingCar,
    );
  }

  // findAll
  async findAll() {
    return await this.carBodyEvaluationRepository.find();
  }

  // findOneID
  async findOneID(id: number) {
    return await this.carBodyEvaluationRepository.findOneCarBodyEvaluation({
      id,
    });
  }

  // findOne
  async findOne(attrs: Partial<CarBodyEvaluation>) {
    return await this.carBodyEvaluationRepository.findOneCarBodyEvaluation(
      attrs,
    );
  }

  // findWhere
  async findWhere(attrs: Partial<CarBodyEvaluation>) {
    return await this.carBodyEvaluationRepository.findWhereCarBodyEvaluation(
      attrs,
    );
  }

  // update
  async update(id: number, attrs: Partial<CarBodyEvaluation>) {
    return await this.carBodyEvaluationRepository.updateCarBodyEvaluation(
      id,
      attrs,
    );
  }

  // softDelete
  async softDelete(id: number) {
    return await this.carBodyEvaluationRepository.softDeleteCarBodyEvaluation(
      id,
    );
  }
}
