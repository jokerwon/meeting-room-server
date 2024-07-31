import { ApiProperty, PickType } from '@nestjs/swagger';
import { CreateMeetingRoomDto } from './create-meeting-room.dto';
import { IsNotEmpty, MaxLength } from 'class-validator';

export class UpdateMeetingRoomDto extends PickType(CreateMeetingRoomDto, [
  'name',
  'location',
  'capacity',
]) {
  @ApiProperty()
  @IsNotEmpty({
    message: 'id 不能为空',
  })
  id: number;

  @ApiProperty()
  @MaxLength(50, {
    message: '设备最长为 50 字符',
  })
  equipment: string;

  @ApiProperty()
  @MaxLength(100, {
    message: '描述最长为 100 字符',
  })
  description: string;
}
