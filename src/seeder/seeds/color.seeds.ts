import { Factory, Seeder } from 'typeorm-seeding';
import Color from '../factories/color.factories';

export default class CreateColor implements Seeder {
  colors = [
    'ホワイト',
    'ブラック',
    'シルバー',
    'ブルー',
    'レッド',
    'ブラウン',
    'グレー',
    'イエロー',
    'グリーン',
  ];

  public async run(factory: Factory) {
    await Promise.all(
      this.colors.map(async (name) => {
        await factory(Color)(name).create();
      }),
    );
  }
}
