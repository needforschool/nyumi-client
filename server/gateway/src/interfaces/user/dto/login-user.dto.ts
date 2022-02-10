import { ApiProperty } from "@nestjs/swagger";

export class LoginUserDto {
  @ApiProperty({ description: 'User email.', example: 'test@onruntime.com', required: true })
  email: string;

  @ApiProperty({ description: 'User password.', example: '123456', required: true })
  password: string;
}