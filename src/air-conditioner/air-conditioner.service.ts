import { Injectable } from '@nestjs/common';
import { AirConditionerRepository } from './air-conditioner.repository';

@Injectable()
export class AirConditionerService {
  constructor(private airConditionerRepository: AirConditionerRepository) {}
}
