import { ConflictException, Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { TaskService } from 'src/task/task.service';
import { EmailScheduleDto } from './emailSchedule.dto';
import { NotificationService } from './notification.service';

@Controller('notification')
export class NotificationController {
    constructor(
        private notificationService: NotificationService,
        private taskService: TaskService
        ){}
    @GrpcMethod('NotificationService','SendMail')
    sendMail(emailSchedule: EmailScheduleDto){
        try{
            console.log('recieving')
            // return this.notificationService.scheduleEmail(emailSchedule)
            const date = new Date
            return this.taskService.fetchAllPendingTasks(date)
        }catch(e){
          console.log(e)            

        }
  
    }
}
