import { Injectable } from '@nestjs/common';
import { AdminRepository } from './admin.repository';
import { CreateAdminDTO } from './dto/create.admin.dto';

@Injectable()
export class AdminService {
  AdminRepository: any;
  constructor(private adminRepository: AdminRepository) {}

  // create
  async create(createAdminDTO: CreateAdminDTO) {
    return this.AdminRepository.createAdmin(createAdminDTO);
  }
}
