import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  /**
   * @description Just a simple hello world
   * @returns {string} hello world
   */
  getHello(): string {
    return 'Hello World!';
  }
}
