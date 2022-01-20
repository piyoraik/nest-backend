import { Injectable } from '@nestjs/common';
import { PurchaseRepository } from './purchase.repository';

@Injectable()
export class PurchaseService {
    constructor(
        private purchaseRepository:PurchaseRepository,
        ){}
}
