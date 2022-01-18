import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEnum, IsNumber, IsString, ValidateNested } from 'class-validator';
import { CreateCarBodyImageDTO } from 'src/car-body-image/dto/create.carbodyimage.dto';
import { CarBodyImage } from 'src/entity/car.body.image.entity';
import { SalesPoint } from 'src/entity/sales.point.entity';
import { CarHistory } from 'src/enum/car.history.enum';
import { Cigarette } from 'src/enum/cigarette.enum';
import { EvaluationPoint } from 'src/enum/evaluationPoint.enum';
import { MeterExchangeHistory } from 'src/enum/meterExchangeHistory.enum';
import { ScratchEvaluation } from 'src/enum/scratchEvaluation.enum';
import { CreateSalesPointDTO } from 'src/sales-point/dto/create-salespoint.dto';

export class CreateListingCarDTO {
  // 評価点
  @ApiProperty({
    enum: EvaluationPoint,
  })
  @IsEnum(EvaluationPoint)
  evaluationPoint: EvaluationPoint;

  //セールスポイント
  @ApiProperty({
    type: [CreateSalesPointDTO],
  })
  @Type(() => CreateSalesPointDTO)
  @ValidateNested()
  salesPoint?: SalesPoint[];

  //タバコ ＊変更
  @ApiProperty({
    enum: Cigarette,
  })
  @IsEnum(Cigarette)
  cigarette: Cigarette;

  //メーター交換歴 ＊変更
  @ApiProperty({
    enum: MeterExchangeHistory,
  })
  @IsEnum(MeterExchangeHistory)
  meterExchangeHistory: MeterExchangeHistory;

  //傷評価 ＊変更
  @ApiProperty({
    enum: ScratchEvaluation,
  })
  @IsEnum(ScratchEvaluation)
  scratchEvaluation: ScratchEvaluation;

  //車体画像
  @ApiProperty({
    type: [CreateCarBodyImageDTO],
  })
  @Type(() => CreateCarBodyImageDTO)
  @ValidateNested()
  CarBodyImage?: CarBodyImage[];

  //車歴 ＊変更
  @ApiProperty({
    enum: CarHistory,
  })
  @IsEnum(CarHistory)
  CarHistory: CarHistory;

  //車検
  @ApiProperty()
  @IsString()
  carInspection: string;

  //仕入れ額
  @ApiProperty()
  @IsNumber()
  suggestedAmount: number;

  //走行距離
  @ApiProperty()
  @IsNumber()
  mileage: number;

  //外装
  @ApiProperty()
  @IsNumber()
  exterior: number;

  //内装
  @ApiProperty()
  @IsNumber()
  interior: number;

  //色替
  @ApiProperty()
  @IsNumber()
  IschangeColor: number;

  //希望出品１
  @ApiProperty()
  @IsNumber()
  suggestedListing: number;
}
