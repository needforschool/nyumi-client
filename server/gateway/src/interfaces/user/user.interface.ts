import { ApiProperty } from "@nestjs/swagger";

import { Role } from "../../common/enums/role.enum";

export class IUser {
  @ApiProperty({ description: "User id.", example: "1" })
  id!: string;

  @ApiProperty({ description: "User email.", example: "test@onruntime.com" })
  email!: string;

  @ApiProperty({ description: "User role.", enum: Role, example: Role.User })
  role!: Role;
}
