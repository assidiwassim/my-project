import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
@Controller()
export class AppController {
  constructor() {}

  @MessagePattern({ cmd: 'sum-micro-service-1' })
  sum(data: number[]): number {
    console.log('sum-micro-service-1 ', data);
    return (data || []).reduce((a, b) => a + b);
  }
}
