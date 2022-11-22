import { Module } from '@nestjs/common';
import { CronService } from './cron.service';
import { TaskModule } from 'src/task/task.module';
import { EmailModule } from 'src/email/email.module';

@Module({
  imports:[TaskModule, EmailModule ],
  providers: [CronService],
  exports:[CronService]
})
export class CronModule {}
