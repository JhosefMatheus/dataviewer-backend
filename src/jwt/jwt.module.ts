import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { JwtVerifyController } from "./jwt.controller";
import { JwtVerifyService } from "./jwt.service";

@Module({
    imports: [JwtModule.register({})],
    providers: [JwtVerifyService],
    controllers: [JwtVerifyController]
})
export class JwtVerifyModule {}