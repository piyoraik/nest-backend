import { CarBodyImage } from 'src/entity/car.body.image.entity';
import { SalesPoint } from 'src/entity/sales.point.entity';
import { CarHistory } from 'src/enum/car.history.enum';
import { Cigarette } from 'src/enum/cigarette.enum';
import { EvaluationPoint } from 'src/enum/evaluationPoint.enum';
import { MeterExchangeHistory } from 'src/enum/meterExchangeHistory.enum';
import { ScratchEvaluation } from 'src/enum/scratchEvaluation.enum';

export class CreateListingCarDTO {
  // 評価点
  evaluationPoint: EvaluationPoint;

  //セールスポイント
  salesPoint: SalesPoint[];

  //タバコ ＊変更
  cigarette: Cigarette;

  //メーター交換歴 ＊変更
  meterExchangeHistory: MeterExchangeHistory;

  //傷評価 ＊変更
  scratchEvaluation: ScratchEvaluation;

  //車体画像
  CarBodyImage: CarBodyImage[];

  //車歴 ＊変更
  CarHistory: CarHistory;

  //車検
  carInspection: string;

  //仕入れ額
  suggestedAmount: number;

  //走行距離
  mileage: number;

  //外装
  exterior: number;

  //内装
  interior: number;

  //色替
  IschangeColor: number;

  //希望出品１
  suggestedListing: number;
}
