import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import {ConfigModule} from '@nestjs/config'
import {ConfigService} from '@nestjs/config'
import configuration from 'src/config/configuration';
@Module({
  imports:[ConfigModule],
  providers: [ConfigService,EmailService],
  exports:[EmailService]
})
export class EmailModule {}
