import { Injectable } from '@nestjs/common';
import { createTransport } from 'nodemailer';
import * as Mail from 'nodemailer/lib/mailer';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EmailService {
 private nodemailerTransport: Mail;

 constructor(
    private readonly configService: ConfigService
 ){
    this.nodemailerTransport = createTransport({
        service:configService.get('emailService'),
        port:587,
        host:'smtp.office365.com',
        auth:{
            user: configService.get('user.email'),
            pass: configService.get('user.password')
}

    })
 }

 async sendMail(options:Mail.Options) {
    try{
          const result = await this.nodemailerTransport.sendMail(options)
          if(result.rejected.length<1){
            console.log(true)
            return true
          }else{
            return false
          }
    }catch(e){
        console.log(e)
    }
 }
}
