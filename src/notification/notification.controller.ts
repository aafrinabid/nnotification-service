import { ConflictException, Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CronService } from 'src/cron/cron.service';
import { TaskService } from 'src/task/task.service';
import { EmailScheduleDto } from './emailSchedule.dto';
import { NotificationService } from './notification.service';

@Controller('notification')
export class NotificationController {
    constructor(
        private notificationService: NotificationService,
        private cronService: CronService
    ) { }

    @GrpcMethod('NotificationService', 'TestCron')
    testCron() {
        return this.cronService.checkScheduledMails()
    }
}
