import { Injectable, PipeTransform } from '@nestjs/common';
import { CreateCarBodyNumberForeignKeyDTO } from '../dto/create.car-body-number.dto';

@Injectable()
export class ConvertIntPipe implements PipeTransform {
  transform(
    stringForeignKeyDTO: CreateCarBodyNumberForeignKeyDTO,
  ): CreateCarBodyNumberForeignKeyDTO {
    Object.entries(stringForeignKeyDTO).forEach(
      ([currentKey, currentValue]) => {
        Object.assign(stringForeignKeyDTO, {
          [currentKey]: parseInt(currentValue),
        });
      },
    );
    return stringForeignKeyDTO;
  }
}
