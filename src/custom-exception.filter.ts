import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class CustomExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<Response>();
    response.statusCode = exception.getStatus();

    const res = exception.getResponse() as { message: string[] };

    response
      .json({
        code: exception.getStatus(),
        message: 'fail',
        // ValidationPipe 的报错信息在 response.message 中
        data: res?.message?.join ? res?.message?.join(',') : exception.message,
      })
      .end();
  }
}
