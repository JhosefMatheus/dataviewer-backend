import { Body, Controller, Get, Headers, Post, Res, UseGuards } from "@nestjs/common";
import { DashboardService } from "./dashboard.service";
import { AuthGuard } from "@nestjs/passport";
import { Response } from "express";
import { DashboardPerformanceDto } from "./dto";
import { IPerformanceChartData } from "./interface";

@UseGuards(AuthGuard("jwt"))
@Controller("dashboard")
export class DashboardController {
    constructor(private readonly dashboardService: DashboardService) {}

    @Post("performanceChartData")
    async performanceChartData(@Res() response: Response, @Body() body: DashboardPerformanceDto): Promise<Response> {
        const { subject } = body;

        const data: IPerformanceChartData[] = await this.dashboardService.performanceChartData(subject);

        return response.status(200).json({
            data: data
        });
    }

    @Get("assiduousStudentsData")
    assiduousStudentsData(@Res() response: Response): Response {
        const data: number = this.dashboardService.assiduousStudentsData();

        return response.status(200).json({
            data: data
        });
    }

    @Get("missingStudentsData")
    missingStudentsData(@Res() response: Response): Response {
        const data: number = this.dashboardService.missingStudentsData();

        return response.status(200).json({
            data: data
        });
    }

    @Get("trackingChartData")
    trackingChartData(@Res() response: Response): Response {
        const data: object = this.dashboardService.trackingChartData();

        return response.status(200).json({
            data: data
        });
    }

    @Get("timeManagementChartData")
    timeManagementChartData(@Res() response: Response): Response {
        const data: object = this.dashboardService.timeManagementData();

        return response.status(200).json({
            data: data
        });
    }

    @Get("submissionsNumberData")
    submissionsNumberData(@Res() response: Response): Response {
        const data: number = this.dashboardService.submissionsNumberData();

        return response.status(200).json({
            data: data
        });
    }

    @Get("accessesAmountData")
    accessesAmountData(@Res() response: Response): Response {
        const data: number = this.dashboardService.accessesAmountData();

        return response.status(200).json({
            data: data
        });
    }
}