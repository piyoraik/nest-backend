import { NotFoundException } from '@nestjs/common';
import { ExhibitorEntry } from 'src/entity/exhibitor.entry.entity';
import { ListingCar } from 'src/entity/listing.car.entity';
import { EntityRepository, ILike, Repository } from 'typeorm';
import { CreateExhibitorEntryDTO } from './dto/create.exhibitor-entry.dto';

@EntityRepository(ExhibitorEntry)
export class ExhibitorEntryRepository extends Repository<ExhibitorEntry> {
  // Createの操作
  async createExhibitorEntry(
    createExhibitorEntryDTO: CreateExhibitorEntryDTO,
    listingCar: ListingCar,
  ) {
    const exhibitorEntry = this.create({
      ...createExhibitorEntryDTO,
      listingCar,
    });
    await this.save(exhibitorEntry);
    return exhibitorEntry;
  }

  // findOne
  async findOneExhibitorEntry(attrs: Partial<ExhibitorEntry>) {
    const exhibitorEntry = await this.findOne(attrs);
    if (!exhibitorEntry) {
      throw new NotFoundException('ExhibitorEntry Not Found');
    }
    return exhibitorEntry;
  }

  // findWhere
  async findWhereLikeExhibitorEntry(attrs: Partial<ExhibitorEntry>) {
    const parseAttrs: Partial<ExhibitorEntry> = {};
    for (const key in attrs) {
      parseAttrs[key] = ILike('%' + attrs[key] + '%');
    }
    const exhibitorEntrys = await this.find({
      where: parseAttrs,
      relations: ['member'],
    });
    if (!exhibitorEntrys) {
      throw new NotFoundException('ExhibitorEntry Not Found');
    }
    return exhibitorEntrys;
  }

  // update
  async updateExhibitorEntry(id: number, attrs: Partial<ExhibitorEntry>) {
    const exhibitorEntry = await this.findOneExhibitorEntry({ id });
    Object.assign(exhibitorEntry, attrs);
    await this.save(exhibitorEntry);
    return exhibitorEntry;
  }

  // softDelete
  async softDeleteExhibitorEntry(id: number) {
    const exhibitorEntry = await this.findOneExhibitorEntry({ id });
    await this.softRemove(exhibitorEntry);
    return exhibitorEntry;
  }
}
