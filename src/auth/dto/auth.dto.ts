import { IsNotEmpty, IsEmail } from "class-validator";

export class AuthDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
}

export interface SignInSignUpInterface {
    flag: boolean;
    message: string;
    token?: string;
}