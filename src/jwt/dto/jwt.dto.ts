import { IsNotEmpty, IsString } from "class-validator";

export class JwtDto {
    @IsString()
    @IsNotEmpty()
    authorization: string;

    [props: string]: any;
}

interface userInfo {
    userId: number;
    userEmail: string;
}

export interface JwtVerifyInterface {
    flag: boolean;
    message: string;
    userInfo?: userInfo;
}