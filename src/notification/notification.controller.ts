import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { EmailScheduleDto } from './emailSchedule.dto';
import { NotificationService } from './notification.service';

@Controller('notification')
export class NotificationController {
    constructor(private notificationService: NotificationService){}
    @GrpcMethod('NotificationService')
    sendNotification(emailSchedule: EmailScheduleDto){
        return this.notificationService.scheduleEmail(emailSchedule)
  
    }
}
