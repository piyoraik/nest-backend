import { Factory, Seeder } from 'typeorm-seeding';
import CarModel from '../factories/carModel.factories';

export default class CreateMakers implements Seeder {
  carModels = [
    'ワゴンR',
    'ムーヴ',
    'ライフ',
    'ステップワゴン',
    'オデッセイ',
    'プリウス',
    'エスティマ',
    'セルシオ',
    'キューブ',
    'エルグランド',
    'マーチ',
    'ミラ',
    'アルファード',
    'フィット',
    'ジムニー',
    'ヴィッツ',
    'セレナ',
    'bB',
    'アルト',
    'パジェロミニ',
  ];

  public async run(factory: Factory) {
    await Promise.all(
      this.carModels.map(async (name) => {
        await factory(CarModel)(name).create();
      }),
    );
  }
}
