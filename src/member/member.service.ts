import { Injectable } from '@nestjs/common';
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
}
