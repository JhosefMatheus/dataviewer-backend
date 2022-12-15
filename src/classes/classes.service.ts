import { Injectable } from "@nestjs/common";
import { Classes } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ClassesService {
    constructor(private readonly prismaService: PrismaService) {}

    async getClasses(): Promise<Classes[]> {
        const classes: Classes[] = await this.prismaService.classes.findMany();

        return classes;
    }
}