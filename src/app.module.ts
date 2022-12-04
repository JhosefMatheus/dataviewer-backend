import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { ClassesModule } from './classes/classes.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { JwtVerifyModule } from './jwt/jwt.module';
import { PrismaModule } from './prisma/prisma.module';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    AuthModule,
    PrismaModule,
    JwtVerifyModule,
    DashboardModule,
    StudentsModule,
    ClassesModule
  ],
})
export class AppModule {}
