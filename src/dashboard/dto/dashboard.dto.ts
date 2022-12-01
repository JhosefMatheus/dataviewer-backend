import { IsNotEmpty, IsString } from "class-validator";

export class DashboardPerformanceDto {
    @IsString()
    @IsNotEmpty()
    subject: string;
}