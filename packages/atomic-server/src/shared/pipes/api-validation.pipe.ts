import {
  ArgumentMetadata,
  ValidationPipe,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CommonCodes } from '../constants/code';

export class ApiValidationPipe extends ValidationPipe {
  constructor() {
    super({
      whitelist: true,
      stopAtFirstError: true,
    });
  }
  public async transform(value, metadata: ArgumentMetadata) {
    try {
      return await super.transform(value, metadata);
    } catch (error) {
      throw new HttpException(
        {
          code: CommonCodes.PARAMETER_INVALID,
          message: Array.isArray(error.response.message)
            ? error.response.message[0]
            : error.response.message,
          data: {
            error: error.response,
          },
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
