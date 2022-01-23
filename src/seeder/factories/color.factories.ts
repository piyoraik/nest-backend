import { Color } from 'src/entity/color.entity';
import { define } from 'typeorm-seeding';

define(Color, (_, name: string): Color => {
  const color = new Color();
  color.name = name;

  return color;
});

export default Color;
