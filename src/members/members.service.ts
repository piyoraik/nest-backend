import { Injectable, NotFoundException, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { Members } from 'src/entity/members.entity';
import { Repository } from 'typeorm';
import { CreateMembersDTO } from './dto/create-members-dto';
import { MembersRepository } from './members.repository';

@Injectable()
export class MembersService {
  constructor(private readonly memberRepo: MembersRepository) {}

  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.memberRepo.find();
  }

  create(createMembersDTO: CreateMembersDTO) {
    const member = this.memberRepo.create(createMembersDTO);
    return this.memberRepo.save(member);
  }

  async findOne(attrs: Partial<Members>) {
    const member = await this.memberRepo.findOne({
      where: attrs,
    });
    if (!member) {
      throw new NotFoundException('Members not found');
    }
    return member;
  }

  async findWhere(attrs: Partial<Members>) {
    const member = await this.memberRepo.find({
      where: attrs,
    });
    return member;
  }

  async update(id: number, attrs: Partial<Members>) {
    const member = await this.memberRepo.findOne({ id });
    if (!member) {
      throw new NotFoundException('Members not found');
    }
    Object.assign(member, attrs);
    return this.memberRepo.save(member);
  }

  async softDelete(id: number) {
    const member = await this.memberRepo.findOne({ id });
    if (!member) {
      throw new NotFoundException('Members not found');
    }
    return this.memberRepo.softRemove(member);
  }
}
