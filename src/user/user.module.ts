import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // 这里需要引入，不然无法使用 Respository<User>
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
