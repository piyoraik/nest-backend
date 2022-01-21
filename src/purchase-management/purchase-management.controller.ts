import { Body, Controller, Post } from '@nestjs/common';
import { CreatePurchaseManagementDTO } from './dto/create.purchase-management.dto';
import { PurchaseManagementService } from './purchase-management.service';

@Controller('purchase-management')
export class PurchaseManagementController {
  constructor(
    private readonly purchaseManagementService: PurchaseManagementService,
  ) {}

  @Post()
  create(@Body() body: CreatePurchaseManagementDTO) {
    return this.purchaseManagementService.create(body);
  }
}
