import { IsEnum } from "class-validator";
import { Role } from "../../../commons/enums/role.enum";
import { SECTION } from "../../../commons/enums/section.type";
import { Branch } from "../../../commons/enums/branch.entity";

export class UserRoleDto {
    @IsEnum(Role)
    type: Role;

    @IsEnum(SECTION)
    section: SECTION;

    @IsEnum(Branch)
    branch: Branch;

    
}