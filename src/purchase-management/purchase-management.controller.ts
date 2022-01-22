import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiQuery, ApiTags, PartialType } from '@nestjs/swagger';
import { PurchaseManagement } from 'src/entity/purchase.management.entity';
import { CreatePurchaseManagementDTO } from './dto/create.purchase-management.dto';
import { UpdatePurchaseManagementDTO } from './dto/update.purchase-management.dto';
import { PurchaseManagementService } from './purchase-management.service';

@ApiTags('仕入れ管理')
@Controller('purchase-management')
export class PurchaseManagementController {
  constructor(
    private readonly purchaseManagementService: PurchaseManagementService,
  ) {}

  @Post()
  create(@Body() body: CreatePurchaseManagementDTO) {
    return this.purchaseManagementService.create(body);
  }

  @Get()
  findAll() {
    return this.purchaseManagementService.findAll();
  }

  @ApiQuery({ type: PartialType(CreatePurchaseManagementDTO), required: false })
  @Get('search')
  search(@Query() attrs: Partial<PurchaseManagement>) {
    return this.purchaseManagementService.findWhere(attrs);
  }

  @Get(':purchaseManagementID')
  findOneId(@Param('purchaseManagementID') id: string) {
    return this.purchaseManagementService.findOneID(+id);
  }

  @Patch(':purchaseManagementID')
  update(
    @Param('purchaseManagementID') id: string,
    @Body() body: UpdatePurchaseManagementDTO,
  ) {
    return this.purchaseManagementService.update(+id, body);
  }

  @Delete(':purchaseManagementID')
  delete(@Param('purchaseManagementID') id: string) {
    return this.purchaseManagementService.softDelete(+id);
  }
}
