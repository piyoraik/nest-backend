import { NotFoundException } from '@nestjs/common';
import { Handle } from 'src/entity/handle.entity';
import { EntityRepository, ILike, Repository } from 'typeorm';
import { CreateHandleDTO } from './dto/create.handle.dto';

@EntityRepository(Handle)
export class HandleRepository extends Repository<Handle> {
  // Createの操作
  async createHandle(createHandleDTO: CreateHandleDTO) {
    const handle = this.create({
      ...createHandleDTO,
    });
    await this.save(handle);
    return handle;
  }

  // findOne
  async findOneHandle(attrs: Partial<Handle>) {
    const handle = await this.findOne(attrs);
    if (!handle) {
      throw new NotFoundException('Handle Not Found');
    }
    return handle;
  }

  // findWhere
  async findWhereLikeHandle(attrs: Partial<Handle>) {
    const parseAttrs: Partial<Handle> = {};
    for (const key in attrs) {
      parseAttrs[key] = ILike('%' + attrs[key] + '%');
    }
    const handles = await this.find({
      where: parseAttrs,
      relations: ['member'],
    });
    if (!handles) {
      throw new NotFoundException('Handle Not Found');
    }
    return handles;
  }

  // update
  async updateHandle(id: number, attrs: Partial<Handle>) {
    const handle = await this.findOneHandle({ id });
    Object.assign(handle, attrs);
    await this.save(handle);
    return handle;
  }

  // softDelete
  async softDeleteHandle(id: number) {
    const handle = await this.findOneHandle({ id });
    await this.softRemove(handle);
    return handle;
  }
}
