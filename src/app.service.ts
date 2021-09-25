import { Injectable } from '@nestjs/common';
export interface DataArgs {
  name: string;
  docs: string;
}
@Injectable()
export class AppService {
  getHello(): DataArgs {
    return {
      name: 'LightStar',
      docs: '/docs',
    };
  }
}
