import { NotFoundException } from '@nestjs/common';
import { Admin } from 'src/entity/admin.entity';
import { EntityRepository, ILike, Repository } from 'typeorm';
import { CreateAdminDTO } from './dto/create.admin.dto';
import { SearchAdminDTO } from './dto/search.admin.dto';

@EntityRepository(Admin)
export class AdminRepository extends Repository<Admin> {
  // Createの操作
  async createAdmin(createAdminDTO: CreateAdminDTO) {
    const admin = this.create({
      ...createAdminDTO,
    });
    await this.save(admin);
    return admin;
  }

  // findOne
  async findOneAdmin(attrs: Partial<Admin>) {
    const admin = await this.findOne(attrs);
    if (!admin) {
      throw new NotFoundException('Admin Not Found');
    }
    return admin;
  }

  // findWhere
  async findWhereLikeAdmin(attrs: SearchAdminDTO) {
    for (const key in attrs) {
      attrs[key] = ILike('%' + attrs[key] + '%');
    }
    console.log(attrs);
    const admins = await this.find({
      where: attrs,
    });
    if (!admins) {
      throw new NotFoundException('Admin Not Found');
    }
    return admins;
  }

  // update
  async updateAdmin(id: number, attrs: Partial<Admin>) {
    const admin = await this.findOneAdmin({ id });
    Object.assign(admin, attrs);
    await this.save(admin);
    return admin;
  }

  // softDelete
  async softDeleteAdmin(id: number) {
    const admin = await this.findOneAdmin({ id });
    await this.softRemove(admin);
    return admin;
  }
}
