import { ConflictException, Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { EmailScheduleDto } from './emailSchedule.dto';
import { NotificationService } from './notification.service';

@Controller('notification')
export class NotificationController {
    constructor(private notificationService: NotificationService){}
    @GrpcMethod('NotificationService','SendMail')
    sendMail(emailSchedule: EmailScheduleDto){
        try{
            console.log('recieving')
            return this.notificationService.scheduleEmail(emailSchedule)
        }catch(e){
          console.log(e)            

        }
  
    }
}
