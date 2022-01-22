import { Injectable, PipeTransform } from '@nestjs/common';
import { CreateCarBodyNumberForeignKeyDTO } from '../dto/create.car-body-number.dto';

@Injectable()
export class ConvertIntPipe implements PipeTransform {
  transform(
    stringForeignKeyDTO: CreateCarBodyNumberForeignKeyDTO,
  ): CreateCarBodyNumberForeignKeyDTO {
    const dto = {};
    Object.entries(stringForeignKeyDTO).forEach(
      ([currentKey, currentValue]) => {
        Object.assign(dto, { [currentKey]: parseInt(currentValue) });
      },
    );
    return dto as CreateCarBodyNumberForeignKeyDTO;
  }
}
