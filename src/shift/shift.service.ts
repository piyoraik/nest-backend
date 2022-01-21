import { Injectable } from '@nestjs/common';
import { Shift } from 'src/entity/shift.entity';
import { CreateShiftDTO } from './dto/create.shift.dto';
import { ShiftRepository } from './shift.repository';

@Injectable()
// shift.service.ts
export class ShiftService {
  constructor(private shiftRepository: ShiftRepository) {}

  // create
  async create(createShiftDTO: CreateShiftDTO) {
    return await this.shiftRepository.createShift(createShiftDTO);
  }

  // findAll
  async findAll() {
    return await this.shiftRepository.find();
  }

  // findOneID
  async findOneID(id: number) {
    return await this.shiftRepository.findOneShift({ id });
  }

  // findOne
  async findOne(attrs: Partial<Shift>) {
    return await this.shiftRepository.findOneShift(attrs);
  }

  // findWhere
  async findWhere(attrs: Partial<Shift>) {
    return await this.shiftRepository.findWhereLikeShift(attrs);
  }

  // update
  async update(id: number, attrs: Partial<Shift>) {
    return await this.shiftRepository.updateShift(id, attrs);
  }

  // softDelete
  async softDelete(id: number) {
    return await this.shiftRepository.softDeleteShift(id);
  }
}
