import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateAdditionDTO } from 'src/addition/dto/create-addition.dto';
import { CreateCarBodyEvaluationDTO } from 'src/car-body-evaluation/dto/create-carbodyevaluation.dto';
import { CreateCarBodyImageDTO } from 'src/car-body-image/dto/create.carbodyimage.dto';
import { Addition } from 'src/entity/addition.entity';
import { CarBodyEvaluation } from 'src/entity/car.body.evaluation.entity';
import { CarBodyImage } from 'src/entity/car.body.image.entity';
import { ExhibitorEntry } from 'src/entity/exhibitor.entry.entity';
import { Inspection } from 'src/entity/inspection.entity';
import { PaperClass } from 'src/entity/paper.class.entity';
import { SalesPoint } from 'src/entity/sales.point.entity';
import { SuggestedListing } from 'src/entity/suggested.listing.entity';
import { CarHistory } from 'src/enum/car.history.enum';
import { Cigarette } from 'src/enum/cigarette.enum';
import { EvaluationPoint } from 'src/enum/evaluationPoint.enum';
import { MeterExchangeHistory } from 'src/enum/meterExchangeHistory.enum';
import { ScratchEvaluation } from 'src/enum/scratchEvaluation.enum';
import { CreateExhibitorEntryDTO } from 'src/exhibitor-entry/dto/create.exhibitor-entry.dto';
import { CreateInspectionDTO } from 'src/inspection/dto/create-inspection.dto';
import { CreatePaperClassDTO } from 'src/paper-class/dto/create.paperclass.dto';
import { CreateSalesPointDTO } from 'src/sales-point/dto/create-salespoint.dto';
import { CreateSuggestedListingDTO } from 'src/suggested-listing/dto/create.suggested-listing.dto';

export class CreateListingCarDTO {
  @ApiProperty({
    type: [CreateSalesPointDTO],
    description: 'セールスポイント',
  })
  @Type(() => CreateSalesPointDTO)
  @ValidateNested()
  salesPoint?: SalesPoint[];

  @ApiProperty({
    enum: ScratchEvaluation,
    description: 'キズ評価',
  })
  @IsEnum(ScratchEvaluation)
  scratchEvaluation: ScratchEvaluation;

  @ApiProperty({
    description: '仕入れ額',
    default: '10000',
  })
  @IsNumber()
  suggestedAmount: number;

  //希望出品１
  @ApiProperty({
    description: '希望出品1:ユーザー、グリーン',
    default: 'ユーザー',
  })
  @IsString()
  SuggestedListingOne: string;

  @ApiProperty({
    type: CreateSuggestedListingDTO,
    description: '希望出品2',
  })
  @Type(() => CreateSuggestedListingDTO)
  @ValidateNested()
  SuggestedListing?: SuggestedListing;

  @ApiProperty({
    type: CreateCarBodyEvaluationDTO,
    description: '車体情報',
  })
  @Type(() => CreateCarBodyEvaluationDTO)
  @ValidateNested()
  CarBodyEvaluation?: CarBodyEvaluation;

  @ApiProperty({
    type: CreateInspectionDTO,
    description: '検査',
  })
  @Type(() => CreateInspectionDTO)
  @ValidateNested()
  Inspection?: Inspection;

  @ApiProperty({
    type: CreatePaperClassDTO,
    description: '紙類',
  })
  @Type(() => CreatePaperClassDTO)
  @ValidateNested()
  PaperClass?: PaperClass;

  @ApiProperty({
    type: CreateExhibitorEntryDTO,
    description: '出品者記入',
  })
  @Type(() => CreateExhibitorEntryDTO)
  @ValidateNested()
  ExhibitorEntry?: ExhibitorEntry;
}
