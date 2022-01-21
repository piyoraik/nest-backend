import { Injectable } from '@nestjs/common';
import { Admin } from 'typeorm';
import { AdminRepository } from './admin.repository';
import { CreateAdminDTO } from './dto/create.admin.dto';

@Injectable()
// admin.service.ts
export class AdminService {
  constructor(private adminRepository: AdminRepository) {}

  // create
  async create(createAdminDTO: CreateAdminDTO) {
    return await this.adminRepository.createAdmin(createAdminDTO);
  }

  // findAll
  async findAll() {
    return await this.adminRepository.find();
  }

  // findOneID
  async findOneID(id: number) {
    return await this.adminRepository.findOneAdmin({ id });
  }

  // findOne
  async findOne(attrs: Partial<Admin>) {
    return await this.adminRepository.findOneAdmin(attrs);
  }

  // findWhere
  async findWhere(attrs: Partial<Admin>) {
    return await this.adminRepository.findWhereLikeAdmin(attrs);
  }

  // update
  async update(id: number, attrs: Partial<Admin>) {
    return await this.adminRepository.updateAdmin(id, attrs);
  }

  // softDelete
  async softDelete(id: number) {
    return await this.adminRepository.softDeleteAdmin(id);
  }
}
