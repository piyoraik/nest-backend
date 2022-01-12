import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Members } from 'src/entity/member.entity';
import { Repository } from 'typeorm';
import { CreateMemberDTO } from './dto/create-member-dto';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Members) private readonly memberRepo: Repository<Members>,
  ) {}

  findAll() {
    return this.memberRepo.find();
  }

  create(createMemberDTO: CreateMemberDTO) {
    const member = this.memberRepo.create(createMemberDTO);
    return this.memberRepo.save(member);
  }

  async findOne(id: number) {
    const member = await this.memberRepo.findOne({ id });
    if (!member) {
      throw new NotFoundException('User not found');
    }
    return member;
  }

  async update(id: number, attrs: Partial<Members>) {
    const member = await this.memberRepo.findOne({ id });
    if (!member) {
      throw new NotFoundException('User not found');
    }
    Object.assign(member, attrs);
    return this.memberRepo.save(member);
  }
}
