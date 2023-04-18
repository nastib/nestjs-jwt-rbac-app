import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(request: Request, response: Response, next: NextFunction): void {
    const { ip, method, originalUrl } = request;
    //const userAgent = request.get('user-agent') || '';

    response.on('finish', () => {
      const { statusCode } = response;
      //const contentLength = response.get('content-length');

      if (originalUrl !== '/__vite_ping') {
        // this.logger.log(
        //   `${method} ${originalUrl} ${statusCode} ${contentLength} - ${userAgent} ${ip}`,
        // );
        if (statusCode < 400) {
          this.logger.log(`${method} ${originalUrl} ${statusCode} - ${ip}`);
        } else if (statusCode < 500) {
          this.logger.warn(`${method} ${originalUrl} ${statusCode} - ${ip}`);
        } else {
          this.logger.error(`${method} ${originalUrl} ${statusCode} - ${ip}`);
        }
      }
    });

    next();
  }
}
