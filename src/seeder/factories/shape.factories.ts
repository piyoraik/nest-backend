import { Shape } from 'src/entity/shape.entity';
import { define } from 'typeorm-seeding';

define(Shape, (_, name: string): Shape => {
  const shape = new Shape();
  shape.name = name;

  return shape;
});

export default Shape;
