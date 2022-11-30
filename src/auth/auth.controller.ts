import { Controller, Post, Body, Res } from "@nestjs/common";
import { Response } from "express";
import { AuthService } from "./auth.service";
import { AuthDto, SignInSignUpInterface } from "./dto";

@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("signin")
    async signIn(@Body() body: AuthDto, @Res() response: Response): Promise<Response> {
        const { email, password } = body;

        const { flag, message, token } = await this.authService.signIn(email, password);

        if (flag) {
            return response.status(200).json({
                message: message,
                token: token
            });
        }

        return response.status(401).json({
            message: message
        });
    }

    @Post("signup")
    async signUp(@Body() body: AuthDto, @Res() response: Response): Promise<Response> {
        const { email, password } = body;

        const { flag, message } = await this.authService.signUp(email, password);

        if (flag) {
            return response.status(200).json({
                message: message
            });
        }

        return response.status(401).json({
            message: message
        });
    }
}