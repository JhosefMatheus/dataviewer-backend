import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { JwtVerifyInterface } from "./dto";

@Injectable()
export class JwtVerifyService {
    constructor(private readonly config: ConfigService, private readonly jwtService: JwtService) {}

    async tokenVerify(token: string): Promise<JwtVerifyInterface> {
        const tokenOptions: object = {
            secret: this.config.get("JWT_SECRET"),
            alogoirthms: "HS256"
        }

        try {
            const tokenVerify: any = await this.jwtService.verifyAsync(token, tokenOptions);

            return {
                flag: true,
                message: "Token válido!",
                userInfo: tokenVerify
            }

        } catch(error) {
            return {
                flag: false,
                message: "Token inválido!"
            }
        }
    }
}