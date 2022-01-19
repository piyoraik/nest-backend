import { NotFoundException } from '@nestjs/common';
import { ListingCar } from 'src/entity/listing.car.entity';
import { SalesPoint } from 'src/entity/sales.point.entity';
import { EntityRepository, Repository, getConnection } from 'typeorm';
import { CreateSalesPointDTO } from './dto/create-salespoint.dto';

@EntityRepository(SalesPoint)
export class SalesPointRepository extends Repository<SalesPoint> {
  async createSalesPoint(
    createSalesPoint: CreateSalesPointDTO,
    listingCar: ListingCar,
  ) {
    const salesPoint = this.create({
      listingCar,
      ...createSalesPoint,
    });
    await this.save(salesPoint);
    return salesPoint;
  }

  async findOneSalesPoint(attrs: Partial<SalesPoint>) {
    const salesPoint = await this.findOne(attrs);
    if (!salesPoint) {
      throw new NotFoundException('SalesPoint Not Found');
    }
    return salesPoint;
  }

  async findWhereSalesPoint(attrs: Partial<SalesPoint>) {
    const salesPoints = await this.find(attrs);
    if (!salesPoints) {
      throw new NotFoundException('SalesPoint Not Found');
    }
    return salesPoints;
  }

  async updateSalesPoint(id: number, attrs: Partial<SalesPoint>) {
    const salesPoint = await this.findOneSalesPoint(attrs);
    Object.assign(salesPoint, attrs);
    await this.save(salesPoint);
    return salesPoint;
  }

  async softDeleteSalesPoint(id: number) {
    const salesPoint = await this.findOneSalesPoint({ id });
    await this.softRemove(salesPoint);
    return salesPoint;
  }
}
