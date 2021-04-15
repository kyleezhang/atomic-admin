import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Logger } from '@/shared/utils/log4js';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.getArgByIndex(1).req;
    console.log(req, 'req');
    return next.handle().pipe(
      map((data) => {
        const formData = `
          Request Url: ${req.originalUrl}
          Request Method: ${req.method}
          IP: ${req.ip}
          User: ${JSON.stringify(req.user)}
          Response Data: 
            ${JSON.stringify(data.data)}
        `;
        Logger.info(formData);
        Logger.access(formData);
        return data;
      }),
    );
  }
}
