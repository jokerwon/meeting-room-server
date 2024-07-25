import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { RequireLogin, RequirePermission, UserInfo } from './custom.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('aaa')
  @RequireLogin()
  aaaa(@UserInfo('username') username: string, @UserInfo() userInfo) {
    console.log(username, userInfo);

    return 'aaa';
  }

  @Get('bbb')
  @RequireLogin()
  @RequirePermission('ddd')
  bbb() {
    return 'bbb';
  }
}
