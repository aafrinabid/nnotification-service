import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, Interval } from '@nestjs/schedule';
import { EmailService } from '../email/email.service';
import { TaskService } from '../task/task.service';

@Injectable()
export class CronService {
    private readonly logger = new Logger(CronService.name)
    constructor(
        private taskService: TaskService,
        private emailService: EmailService
    ) { }

    @Cron('* * * * * *')
    async checkScheduledMails(): Promise<void> {
        try {
            console.log('cron has started ')
            const currentDateAndTime = new Date
            console.log(currentDateAndTime)
            const allPendingTask = await this.taskService.fetchAllPendingTasks(currentDateAndTime)
            const result = await Promise.all(allPendingTask.map(async (task) => {
                const emailDetails = {
                    to: task.assignedPerson,
                    subject: task.title,
                    text: task.description,
                    from: 'mohdaafrin@outlook.com'
                }
                const emailSent = await this.emailService.sendMail(emailDetails)
                if (emailSent) {
                    const status = await this.taskService.updateEmailSentTastus(task.id)
                    if (status) {
                        return { taskId: task.id, emailSentStatus: true, assignedTo: task.assignedPerson };
                    }
                } 
                else {
                    return { taskId: task.id, emailSentStatus: false, assignedTo: task.assignedPerson }
                } 
            }))
            console.log(result)
        } catch (e) {
            console.log(e)
        }
    }

    @Cron('* * * * * *')
    async sample() {
        this.logger.debug('running cron')
    }
}
