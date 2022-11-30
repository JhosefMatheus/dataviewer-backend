import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { PrismaService } from "src/prisma/prisma.service";
import * as argon2 from "argon2";
import { SignInSignUpInterface } from "./dto";
import { User } from "@prisma/client";

@Injectable()
export class AuthService {
    constructor(private readonly prisma: PrismaService, private readonly jwtService: JwtService, private readonly config: ConfigService) {}

    async createToken(userId: string, email: string): Promise<string> {
        const jwtPayload: object = {
            sub: userId,
            email: email
        }

        const jwtOptions: object = {
            expiresIn: "2d",
            secret: this.config.get("JWT_SECRET")
        }

        const token: string = await this.jwtService.signAsync(jwtPayload, jwtOptions);

        return token;
    }

    async signIn(email: string, password: string): Promise<SignInSignUpInterface> {
        const userVerify: User = await this.prisma.user.findFirst({
            where: {
                email: {
                    equals: email
                }
            }
        });

        if (userVerify) {
            const hashedPassword: string = userVerify.password;

            const passwordVerify: boolean = await argon2.verify(hashedPassword, password);

            if (passwordVerify) {
                const { id, email } = userVerify;

                const token: string = await this.createToken(id, email);

                return {
                    flag: true,
                    message: "Usuário logado com sucesso!",
                    token: token
                }
            }
        }

        return {
            flag: false,
            message: "Usuário ou senha inválidos."
        }
    }

    async signUp(email: string, password: string): Promise<SignInSignUpInterface> {
        const userVerify: User = await this.prisma.user.findFirst({
            where: {
                email: {
                    equals: email
                }
            }
        });

        if (!userVerify) {
            const hashedPassword: string = await argon2.hash(password);

            const newUser: User = await this.prisma.user.create({
                data: {
                    email: email,
                    password: hashedPassword
                }
            });

            return {
                flag: true,
                message: "Usuário criado com sucesso!"
            }
        }

        return {
            flag: false,
            message: "Email já está sendo usado, por favor forneça outro email."
        }
    }
}