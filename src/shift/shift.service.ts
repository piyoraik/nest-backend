import { Injectable } from '@nestjs/common';
import { ShiftRepository } from './shift.repository';

@Injectable()
export class ShiftService {
    constructor(
        private shiftRepository: ShiftRepository,
      ) {}
}
