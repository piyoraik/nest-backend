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

  async findOne(attrs: Partial<Members>) {
    console.log(attrs);
    const member = await this.memberRepo.findOne({
      where: attrs,
    });
    console.log(member);
    if (!member) {
      throw new NotFoundException('Member not found');
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
      throw new NotFoundException('Member not found');
    }
    Object.assign(member, attrs);
    return this.memberRepo.save(member);
  }

  async softDelete(id: number) {
    const member = await this.memberRepo.findOne({ id });
    if (!member) {
      throw new NotFoundException('Member not found');
    }
    return this.memberRepo.softRemove(member);
  }
}
