import { applyDecorators, SetMetadata } from "@nestjs/common";
import { Role } from "common/enums/role.enum";

export const Auth = (role: Role) =>
  applyDecorators(
    SetMetadata('secured', true),
    SetMetadata('permission', role)
  );