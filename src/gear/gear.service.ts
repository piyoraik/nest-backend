import { Injectable } from '@nestjs/common';
import { GearRepository } from './gear.repository';

@Injectable()
export class GearService {
    constructor(
        private gearRepository: GearRepository,
      ) {}
}
