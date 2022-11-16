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

 sendMail(options:Mail.Options) {
    return this.nodemailerTransport.sendMail(options)
 }
}
