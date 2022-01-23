import { Factory, Seeder } from 'typeorm-seeding';
import Shape from '../factories/shape.factories';

export default class CreateShape implements Seeder {
  shapes = [
    '軽自動車',
    'ハッチバック',
    'ミニバン',
    'ステーションワゴン',
    'セダン',
    'SUV-クロカン',
    'ハイブリット',
    '商用車・バン',
    '福祉車両',
    'トラック',
    'オープン',
    'クーペ',
    'ペックアップトラック',
    'キャンピングカー',
  ];

  public async run(factory: Factory) {
    await Promise.all(
      this.shapes.map(async (name) => {
        await factory(Shape)(name).create();
      }),
    );
  }
}
