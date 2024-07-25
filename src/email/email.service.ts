import { Injectable } from '@nestjs/common';
import { createTransport, Transporter } from 'nodemailer';

const EMAIL = '1595672103@qq.com';

@Injectable()
export class EmailService {
  transporter: Transporter;

  constructor() {
    this.transporter = createTransport({
      host: 'smtp.qq.com',
      port: 587,
      secure: false,
      auth: {
        user: EMAIL,
        pass: 'xsseiuhyatzhhcjg',
      },
    });
  }

  async sendMail({ to, subject, html }) {
    await this.transporter.sendMail({
      from: {
        name: '会议室预定系统',
        address: EMAIL,
      },
      to,
      subject,
      html,
    });
  }
}
