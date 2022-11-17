import { Module } from '@nestjs/common';
import { EmailService } from 'src/email/email.service';
import { TaskService } from 'src/task/task.service';
import { CronService } from './cron.service';

@Module({
  providers: [CronService,TaskService,EmailService]
})
export class CronModule {}
