import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsString, ValidateNested } from 'class-validator';
import { CreateAirBackDTO } from 'src/air-back/dto/create.air-back.dto';
import { CreateAirConditionerDTO } from 'src/air-conditioner/dto/create.air-conditioner.dto';
import { CreateCarModelDTO } from 'src/car-model/dto/create.car-model.dto';
import { CreateColorDTO } from 'src/color/dto/create.color.dto';
import { AirBack } from 'src/entity/air.back.entity';
import { AirConditioner } from 'src/entity/air.conditioner.entity';
import { CarModel } from 'src/entity/car.model.entity';
import { Color } from 'src/entity/color.entity';
import { Fuel } from 'src/entity/fuel.entity';
import { Gear } from 'src/entity/gear.entity';
import { Handle } from 'src/entity/handle.entity';
import { ImportedCar } from 'src/entity/imported.car.entity';
import { Maker } from 'src/entity/maker.entity';
import { Shape } from 'src/entity/shape.entity';
import { Shift } from 'src/entity/shift.entity';
import { CreateFuelDTO } from 'src/fuel/dto/create.fuel.dto';
import { CreateGearDTO } from 'src/gear/dto/create.gear.dto';
import { CreateHandleDTO } from 'src/handle/dto/create.handle.dto';
import { CreateImportedCarDTO } from 'src/imported-car/dto/create.imported-car.dto';
import { CreateMakerDTO } from 'src/maker/dto/create.maker.dto';
import { CreateShapeDTO } from 'src/shape/dto/create.shape.dto';
import { CreateShiftDTO } from 'src/shift/dto/create.shift.dto';

export class CreateCarBodyNumberDTO {
  @ApiProperty()
  @IsNumber()
  doorNumber: number;

  @ApiProperty()
  @IsString()
  grade: string;

  @ApiProperty()
  @IsString()
  format: string;

  @ApiProperty()
  @IsNumber()
  engineSize: number;

  @ApiProperty()
  @IsNumber()
  modelYear: number;

  @ApiProperty()
  @IsNumber()
  colorNo: number;

  @ApiProperty()
  @IsNumber()
  carBodyNumber: number;

  @ApiProperty()
  @IsNumber()
  crewNumber: number;

  // ここから紐付いてるやつ

  @ApiProperty({
    type: CreateAirBackDTO,
  })
  @ValidateNested()
  @Type(() => CreateAirBackDTO)
  AirBack?: AirBack;

  @ApiProperty({
    type: CreateShiftDTO,
  })
  @ValidateNested()
  @Type(() => CreateShiftDTO)
  Shift?: Shift;

  @ApiProperty({
    type: CreateFuelDTO,
  })
  @ValidateNested()
  @Type(() => CreateFuelDTO)
  Fuel?: Fuel;

  @ApiProperty({
    type: CreateImportedCarDTO,
  })
  @ValidateNested()
  @Type(() => CreateImportedCarDTO)
  ImportedCar?: ImportedCar;

  @ApiProperty({
    type: CreateMakerDTO,
  })
  @ValidateNested()
  @Type(() => CreateMakerDTO)
  Maker?: Maker;

  @ApiProperty({
    type: CreateShapeDTO,
  })
  @ValidateNested()
  @Type(() => CreateShapeDTO)
  Shape?: Shape;

  @ApiProperty({
    type: CreateHandleDTO,
  })
  @ValidateNested()
  @Type(() => CreateHandleDTO)
  Handle?: Handle;

  @ApiProperty({
    type: CreateCarModelDTO,
  })
  @ValidateNested()
  @Type(() => CreateCarModelDTO)
  CarModel?: CarModel;

  @ApiProperty({
    type: CreateGearDTO,
  })
  @ValidateNested()
  @Type(() => CreateGearDTO)
  Gear?: Gear;

  @ApiProperty({
    type: CreateAirConditionerDTO,
  })
  @ValidateNested()
  @Type(() => CreateAirConditionerDTO)
  AirConditioner?: AirConditioner;

  @ApiProperty({
    type: CreateColorDTO,
  })
  @Type(() => CreateColorDTO)
  @ValidateNested()
  interiorColor: Color;

  @ApiProperty({
    type: CreateColorDTO,
  })
  @Type(() => CreateColorDTO)
  @ValidateNested()
  exteriorColor: Color;
}
