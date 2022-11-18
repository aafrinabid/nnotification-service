import { Test, TestingModule } from '@nestjs/testing';
import { EmailService } from './email.service';
import {ConfigService} from '@nestjs/config'
import * as Mail from 'nodemailer/lib/mailer';


describe('EmailService', () => {
  let service: EmailService;
  let configService: ConfigService;
  let nodemailerTransport : Mail
  let mailOptions =  {
    to: 'mohdaafrin',
    subject: 'title' ,
    text: 'description' ,
    from:'mohdaafrin@outlook.com'
}
  let emailResult :any

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmailService, ConfigService],
    }).compile();

    service = module.get<EmailService>(EmailService);
    configService = module.get<ConfigService>(ConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should send mail to consigned person',async ()=> {
    let finalResul = true;
    jest.spyOn(nodemailerTransport,'sendMail').mockImplementation(()=>emailResult);
    expect(await service.sendMail(mailOptions)).toBe(finalResul)

  })


});
