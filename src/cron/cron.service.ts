import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression ,Interval} from '@nestjs/schedule';
import { EmailService } from 'src/email/email.service';
import { TaskService } from 'src/task/task.service';

@Injectable()
export class CronService {
    private readonly logger = new Logger(CronService.name)
    constructor(
        private taskService: TaskService,
        private emailService: EmailService
        ){}
    
    @Cron(CronExpression.EVERY_5_MINUTES,{
        name:'notifications',
        timeZone:'Asia/Kolkata'
    })
   async checkScheduledMails():Promise<void>{
    try{
        const allPendingTask = await this.taskService.fetchAllPendingTasks()
        const currentDateAndTime = new Date
        allPendingTask.map(async(task) =>{
            const remindertDate = new Date(task.reminderDate) 
            if(remindertDate >= currentDateAndTime) {
                const emailDetails = {
                        to: task.assignedPerson,
                        subject: task.title,
                        text: task.description,
                        from:'mohdaafrin@outlook.com'
                }
             const emailSent =  this.emailService.sendMail(emailDetails)
             if(emailSent){
               const status = await this.taskService.updateEmailSentTastus(task.id)
               if(status){
                return `email succesfully sent to ${task.assignedPerson}`
               }
             }
            }
        })
    }catch(e){
        console.log(e)
    }
        

    }
    


}
