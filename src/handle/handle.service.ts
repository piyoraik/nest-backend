import { Injectable } from '@nestjs/common';
import { Handle } from 'src/entity/handle.entity';
import { CreateHandleDTO } from './dto/create.handle.dto';
import { HandleRepository } from './handle.repository';

@Injectable()
// handle.service.ts
export class HandleService {
  constructor(private handleRepository: HandleRepository) {}

  // create
  async create(createHandleDTO: CreateHandleDTO) {
    return await this.handleRepository.createHandle(createHandleDTO);
  }

  // findAll
  async findAll() {
    return await this.handleRepository.find();
  }

  // findOneID
  async findOneID(id: number) {
    return await this.handleRepository.findOneHandle({ id });
  }

  // findOne
  async findOne(attrs: Partial<Handle>) {
    return await this.handleRepository.findOneHandle(attrs);
  }

  // findWhere
  async findWhere(attrs: Partial<Handle>) {
    return await this.handleRepository.findWhereLikeHandle(attrs);
  }

  // update
  async update(id: number, attrs: Partial<Handle>) {
    return await this.handleRepository.updateHandle(id, attrs);
  }

  // softDelete
  async softDelete(id: number) {
    return await this.handleRepository.softDeleteHandle(id);
  }
}
