import {
  createParamDecorator,
  ExecutionContext,
  SetMetadata,
} from '@nestjs/common';
import { Request } from 'express';

export const RequireLogin = () => SetMetadata('require-login', true);

export const RequirePermission = (...permissions: string[]) =>
  SetMetadata('require-permission', permissions);

/**
 * UserInfo 装饰器是用来取 user 信息传入 handler 的。
 * 传入属性名的时候，返回对应的属性值，否则返回全部的 user 信息。
 */
export const UserInfo = createParamDecorator(
  (prop: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request>();

    if (!request.user) {
      return null;
    }
    return prop ? request.user[prop] : request.user;
  },
);
