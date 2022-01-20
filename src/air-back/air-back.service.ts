import { Injectable } from '@nestjs/common';
import { AirBackRepository } from './air-back.repository';

@Injectable()
export class AirBackService {
    constructor(
        private airBackRepository: AirBackRepository,
      ) {}
}
