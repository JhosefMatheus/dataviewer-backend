import { Controller, Get, Headers, Res } from "@nestjs/common";
import { JwtDto, JwtVerifyInterface } from "./dto";
import { JwtVerifyService } from "./jwt.service";
import { Response } from "express";

@Controller("jwt")
export class JwtVerifyController {
    constructor(private readonly jwtVerifyService: JwtVerifyService) {}

    @Get("verify")
    async verify(@Headers() headers: JwtDto, @Res() response: Response): Promise<Response> {
        let token: string = headers.authorization.replace("Bearer ", "");

        const tokenVerifyResult: JwtVerifyInterface = await this.jwtVerifyService.tokenVerify(token);

        const { flag, message, userInfo } = tokenVerifyResult;

        if (flag) {
            return response.status(200).json({
                message: message,
                userInfo: userInfo
            });
        }

        return response.status(401).json({
            message: message
        });
    }
}