import { Injectable } from '@nestjs/common';
import { MakerRepository } from './maker.repository';

@Injectable()
export class MakerService {
    constructor(
        private makerRepository: MakerRepository,
      ) {}
}
