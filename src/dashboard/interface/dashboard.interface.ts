import { Prisma } from "@prisma/client";

export interface IPerformanceChartData {
    fullName?: string | Prisma.JsonValue;
    name: string | Prisma.JsonValue;
    acertos: number;
    erros: number;
    restantes: number;
}