// 异常捕捉过滤器
import {
  Catch,
  ExceptionFilter,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Logger } from '@/shared/utils/log4js';
import { ErrorTypes } from '../constants/error-type';

@Catch()
export class ExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const isHttpException = exception instanceof HttpException;
    const status = isHttpException
      ? (exception as HttpException).getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;
    const path = request.url;
    let error: any;
    let message: string;
    let code: number = HttpStatus.INTERNAL_SERVER_ERROR;
    let stack: any;

    if (isHttpException) {
      // 处理http异常
      const httpException = exception as HttpException;
      const httpExceptionRes: any = httpException.getResponse();
      message = httpExceptionRes.message || '';
      error = httpExceptionRes.error || httpException.name;
      code = httpExceptionRes.code || HttpStatus.INTERNAL_SERVER_ERROR;
    } else {
      // 其他异常
      const otherException = exception as Error;
      error = otherException.name || ErrorTypes.INTERNAL_SERVER_ERROR;
      message = otherException.message || (exception as string);
      stack = otherException.stack;
    }

    const errorInfo = {
      error,
      code,
      message,
      path,
      stack,
    };

    Logger.error(errorInfo);

    // response 返回
    response.status(status).json({
      code,
      error,
      message: String(message),
      status,
      timestamp: Date.now(),
    });
  }
}
