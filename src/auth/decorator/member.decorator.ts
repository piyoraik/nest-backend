import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetMember = createParamDecorator((_, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return request.user;
});
