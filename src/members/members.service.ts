import { Injectable, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Members } from 'src/entity/members.entity';
import { CreateMembersDTO } from './dto/create-members-dto';
import { MembersRepository } from './members.repository';

@Injectable()
export class MembersService {
  constructor(private readonly memberRepository: MembersRepository) {}

  @UseGuards(AuthGuard('jwt'))
  async findAll() {
    return await this.memberRepository.find();
  }

  async create(createMembersDTO: CreateMembersDTO) {
    return await this.memberRepository.createMembers(createMembersDTO);
  }

  async findOneId(id: number) {
    return await this.memberRepository.findOne({ id });
  }

  async findOne(attrs: Partial<Members>) {
    return await this.memberRepository.findOneMembers(attrs);
  }

  async findWhere(attrs: Partial<Members>) {
    return await this.memberRepository.findWhereLikeMembers(attrs);
  }

  async update(id: number, attrs: Partial<Members>) {
    return await this.memberRepository.updateMembers(id, attrs);
  }

  async softDelete(id: number) {
    return await this.memberRepository.softDeleteMembers(id);
  }
}
