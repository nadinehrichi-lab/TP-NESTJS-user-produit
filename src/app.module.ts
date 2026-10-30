import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UserModule } from './user/user.module.js';
import { ProductModule } from './product/product.module.js';

@Module({
  imports: [UserModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
