import { AppDataSource } from "../app-data-source";
import { Task } from "./task.entity";
import {LessThan} from 'typeorm'

export const TaskRepository = AppDataSource.getRepository(Task).extend({
    async fetchAllPendingTasks(date): Promise<Task[]> {
    try{
        const pendingTasks = await Task.find({where:{emailSent:false, reminderDate: LessThan(date)}}) 
        return pendingTasks
    }catch(e){
        console.log(e)

    } 
    },
    async updateEmailSentStatus(id:number): Promise<boolean>{
    try{
        const toBeUpdatedtask = await Task.findOne({where:{id}})
        toBeUpdatedtask.emailSent = true
        await toBeUpdatedtask.save()
        return true
} catch(e){
    console.log(e)
}
    }
})