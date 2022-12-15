import { Controller, Get, Res, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Classes } from "@prisma/client";
import { Response } from "express";
import { ClassesService } from "./classes.service";

@UseGuards(AuthGuard("jwt"))
@Controller("classes")
export class ClassesController {
    constructor(private readonly classesService: ClassesService) {}

    @Get()
    async getClasses(@Res() response: Response): Promise<Response> {
        const data: Classes[] = await this.classesService.getClasses();

        return response.status(200).json({
            data: data
        });
    }
}