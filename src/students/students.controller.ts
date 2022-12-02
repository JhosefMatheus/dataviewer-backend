import { Controller, UseGuards, Get, Res } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Response } from "express";
import { StudentsService } from "./students.service";

@UseGuards(AuthGuard("jwt"))
@Controller("students")
export class StudentsController {
    constructor(private readonly studentsService: StudentsService) {}

    @Get("overallRanking")
    studentsRanking(@Res() response: Response): Response {
        const data: object = this.studentsService.studentsRanking();

        return response.status(200).json({
            data: data
        });
    }
}