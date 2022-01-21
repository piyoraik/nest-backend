import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateAdditionDTO } from 'src/addition/dto/create-addition.dto';
import { CreateCarBodyEvaluationDTO } from 'src/car-body-evaluation/dto/create-carbodyevaluation.dto';
import { CreateCarBodyImageDTO } from 'src/car-body-image/dto/create.carbodyimage.dto';
import { Addition } from 'src/entity/addition.entity';
import { CarBodyEvaluation } from 'src/entity/car.body.evaluation.entity';
import { CarBodyImage } from 'src/entity/car.body.image.entity';
import { Inspection } from 'src/entity/inspection.entity';
import { SalesPoint } from 'src/entity/sales.point.entity';
import { TestingRecord } from 'src/entity/testing.record.entity';
import { CarHistory } from 'src/enum/car.history.enum';
import { Cigarette } from 'src/enum/cigarette.enum';
import { EvaluationPoint } from 'src/enum/evaluationPoint.enum';
import { MeterExchangeHistory } from 'src/enum/meterExchangeHistory.enum';
import { ScratchEvaluation } from 'src/enum/scratchEvaluation.enum';
import { CreateInspectionDTO } from 'src/inspection/dto/create-inspection.dto';
import { CreateSalesPointDTO } from 'src/sales-point/dto/create-salespoint.dto';
import { CreateTestingRecordDTO } from 'src/testing-record/dto/create-testingrecord.dto';

export class UpdateListingCarDTO {
  // 評価点
  @ApiProperty({
    enum: EvaluationPoint,
  })
  @IsOptional()
  @IsEnum(EvaluationPoint)
  evaluationPoint: EvaluationPoint;

  //セールスポイント
  @ApiProperty({
    type: [CreateSalesPointDTO],
  })
  @IsOptional()
  @Type(() => CreateSalesPointDTO)
  @ValidateNested()
  salesPoint?: SalesPoint[];

  //タバコ ＊変更
  @ApiProperty({
    enum: Cigarette,
  })
  @IsOptional()
  @IsEnum(Cigarette)
  cigarette: Cigarette;

  //メーター交換歴 ＊変更
  @ApiProperty({
    enum: MeterExchangeHistory,
  })
  @IsOptional()
  @IsEnum(MeterExchangeHistory)
  meterExchangeHistory: MeterExchangeHistory;

  //傷評価 ＊変更
  @ApiProperty({
    enum: ScratchEvaluation,
  })
  @IsOptional()
  @IsEnum(ScratchEvaluation)
  scratchEvaluation: ScratchEvaluation;

  //車体画像
  @ApiProperty({
    type: [CreateCarBodyImageDTO],
  })
  @IsOptional()
  @Type(() => CreateCarBodyImageDTO)
  @ValidateNested()
  CarBodyImage?: CarBodyImage[];

  //車歴 ＊変更
  @ApiProperty({
    enum: CarHistory,
  })
  @IsOptional()
  @IsEnum(CarHistory)
  CarHistory: CarHistory;

  //車検
  @ApiProperty()
  @IsOptional()
  @IsString()
  carInspection: string;

  //仕入れ額
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  suggestedAmount: number;

  //走行距離
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  mileage: number;

  //外装
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  exterior: number;

  //内装
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  interior: number;

  //色替
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  IschangeColor: number;

  //希望出品１
  @IsOptional()
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  suggestedListing: number;

  // 付加情報
  @ApiProperty({
    type: CreateAdditionDTO,
  })
  @IsOptional()
  @Type(() => CreateAdditionDTO)
  @ValidateNested()
  Addition?: Addition;

  // 車体情報
  @ApiProperty({
    type: CreateCarBodyEvaluationDTO,
  })
  @IsOptional()
  @Type(() => CreateCarBodyEvaluationDTO)
  @ValidateNested()
  CarBodyEvaluation?: CarBodyEvaluation;

  //
  @ApiProperty({
    type: CreateInspectionDTO,
  })
  @IsOptional()
  @Type(() => CreateInspectionDTO)
  @ValidateNested()
  Inspection?: Inspection;

  //
  @ApiProperty({
    type: CreateTestingRecordDTO,
  })
  @IsOptional()
  @Type(() => CreateTestingRecordDTO)
  @ValidateNested()
  TestingRecord?: TestingRecord;
}
