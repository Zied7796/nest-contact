import { Module } from '@nestjs/common';
import { AppController } from './contact/app.controller';
import { AppService } from './contact/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
