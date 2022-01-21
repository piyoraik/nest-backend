import { NotFoundException } from '@nestjs/common';
import { Shift } from 'src/entity/shift.entity';
import { EntityRepository, ILike, Repository } from 'typeorm';
import { CreateShiftDTO } from './dto/create.shift.dto';

@EntityRepository(Shift)
export class ShiftRepository extends Repository<Shift> {
  // Createの操作
  async createShift(createShiftDTO: CreateShiftDTO) {
    const shift = this.create({
      ...createShiftDTO,
    });
    await this.save(shift);
    return shift;
  }

  // findOne
  async findOneShift(attrs: Partial<Shift>) {
    const shift = await this.findOne(attrs);
    if (!shift) {
      throw new NotFoundException('Shift Not Found');
    }
    return shift;
  }

  // findWhere
  async findWhereLikeShift(attrs: Partial<Shift>) {
    const parseAttrs: Partial<Shift> = {};
    for (const key in attrs) {
      parseAttrs[key] = ILike('%' + attrs[key] + '%');
    }
    const shifts = await this.find({
      where: parseAttrs,
      relations: ['member'],
    });
    if (!shifts) {
      throw new NotFoundException('Shift Not Found');
    }
    return shifts;
  }

  // update
  async updateShift(id: number, attrs: Partial<Shift>) {
    const shift = await this.findOneShift({ id });
    Object.assign(shift, attrs);
    await this.save(shift);
    return shift;
  }

  // softDelete
  async softDeleteShift(id: number) {
    const shift = await this.findOneShift({ id });
    await this.softRemove(shift);
    return shift;
  }
}
