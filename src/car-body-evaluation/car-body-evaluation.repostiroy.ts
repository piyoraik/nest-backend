import { NotFoundException } from '@nestjs/common';
import { CarBodyEvaluation } from 'src/entity/car.body.evaluation.entity';
import { ListingCar } from 'src/entity/listing.car.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateCarBodyEvaluationDTO } from './dto/create-carbodyevaluation.dto';

@EntityRepository(CarBodyEvaluation)
export class CarBodyEvaluationRepository extends Repository<CarBodyEvaluation> {
  async createCarBodyEvaluation(
    createCarBodyEvaluation: CreateCarBodyEvaluationDTO,
    listingCar: ListingCar,
  ) {
    const carBodyEvaluation = this.create({
      listingCar,
      ...createCarBodyEvaluation,
    });
    await this.save(carBodyEvaluation);
    return carBodyEvaluation;
  }

  async findOneCarBodyEvaluation(attrs: Partial<CarBodyEvaluation>) {
    const carBodyEvaluation = await this.findOne(attrs);
    if (!carBodyEvaluation) {
      throw new NotFoundException('CarBodyEvaluation Not Found');
    }
    return carBodyEvaluation;
  }

  async findWhereCarBodyEvaluation(attrs: Partial<CarBodyEvaluation>) {
    const carBodyEvaluations = await this.find(attrs);
    if (!carBodyEvaluations) {
      throw new NotFoundException('CarBodyEvaluation Not Found');
    }
    return carBodyEvaluations;
  }

  async updateCarBodyEvaluation(id: number, attrs: Partial<CarBodyEvaluation>) {
    const carBodyEvaluations = await this.findOneCarBodyEvaluation(attrs);
    Object.assign(carBodyEvaluations, attrs);
    await this.save(carBodyEvaluations);
    return carBodyEvaluations;
  }

  async softDeleteCarBodyEvaluation(id: number) {
    const carBodyEvaluations = await this.findOneCarBodyEvaluation({ id });
    await this.softRemove(carBodyEvaluations);
    return carBodyEvaluations;
  }
}
