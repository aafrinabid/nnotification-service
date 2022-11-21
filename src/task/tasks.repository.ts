import {Repository, LessThan} from 'typeorm'
import { Task } from './task.entity';
export  class TasksRepository extends Repository<Task>{
    async FetchAllPendingTasks(date: Date): Promise<Task[]> {
        try{
            const pendingTasks = await Task.find({where:{emailSent:false, reminderDate: LessThan(date)}}) 
            return pendingTasks
        }catch(e){
            console.log(e)
    
        } 
        }
        async UpdateEmailSentStatus(id:number): Promise<boolean>{
        try{
            const toBeUpdatedtask = await Task.findOne({where:{id}})
            toBeUpdatedtask.emailSent = true
            await toBeUpdatedtask.save()
            return true
    } catch(e){
        console.log(e)
    }
        }
}