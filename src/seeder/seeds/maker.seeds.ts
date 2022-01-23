import { Factory, Seeder } from 'typeorm-seeding';
import Maker from 'src/seeder/factories/maker.factories';

export default class CreateMakers implements Seeder {
  makers = [
    'トヨタ',
    '日産',
    'ホンダ',
    'スズキ',
    'ダイハツ',
    'スバル',
    '三菱',
    'マツダ',
    'メルセデス・ベンツ',
    'フォルクスワーゲン',
    'ＢＭＷ',
    'シボレー',
    'ボルボ',
    'アウディ',
    'ポルシェ',
    'ジープ',
    'フォード',
    'プジョー',
    'いすゞ',
    'アルファロメオ',
  ];

  public async run(factory: Factory) {
    await Promise.all(
      this.makers.map(async (name) => {
        await factory(Maker)(name).create();
      }),
    );
  }
}
