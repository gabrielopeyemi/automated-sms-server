import { Injectable } from '@nestjs/common';
export interface DataArgs {
  name: string;
}
@Injectable()
export class AppService {
  getHello(): DataArgs {
    return {
      name: 'LightStar',
    };
  }
}
