import { Controller, Get, Res, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Response } from "express";
import { ClassesService } from "./classes.service";

@UseGuards(AuthGuard("jwt"))
@Controller("classes")
export class ClassesController {
    constructor(private readonly classesService: ClassesService) {}

    @Get()
    getClasses(@Res() response: Response): Response {
        const data: object = this.classesService.getClasses();

        return response.status(200).json({
            data: data
        });
    }
}