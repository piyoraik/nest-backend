import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Admin } from 'src/entity/admin.entity';
import { AdminService } from './admin.service';
import { CreateAdminDTO } from './dto/create.admin.dto';
import { SearchAdminDTO } from './dto/search.admin.dto';
import { UpdateAdminDTO } from './dto/update.admin.dto';

@Resolver(() => Admin)
export class AdminResolver {
  constructor(private adminService: AdminService) {}

  @Query(() => [Admin], { name: 'admins' })
  findAll() {
    return this.adminService.findAll();
  }

  @Query(() => Admin, { name: 'findOneIdAdmin' })
  findOneId(@Args('id') id: number) {
    return this.adminService.findOneID(+id);
  }

  @Query(() => [Admin], { name: 'adminSearch', nullable: true })
  search(@Args('searchWord') searchWord: SearchAdminDTO) {
    console.log(searchWord);
    return this.adminService.findWhere(searchWord);
  }

  @Mutation(() => Admin, { name: 'admin' })
  create(@Args('adminAdd') adminAdd: CreateAdminDTO) {
    return this.adminService.create(adminAdd);
  }

  @Mutation(() => Admin, { name: 'updateAdmin' })
  update(
    @Args('id') id: number,
    @Args('adminUpdate') adminUpdate: UpdateAdminDTO,
  ) {
    return this.adminService.update(id, adminUpdate);
  }

  @Mutation(() => Admin, { name: 'deleteAdmin' })
  delete(@Args('id') id: number) {
    return this.adminService.softDelete(id);
  }
}
