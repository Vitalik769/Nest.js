import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard } from './common/guards';
import { RolesGuard } from './auth/guard/roles.guard';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { UsersModule } from './users/users.module';

config();

@Module({
  imports: [
    UsersModule,
    AuthModule,
    PrismaModule, 
    TypeOrmModule.forRoot({
      url: process.env.TYPEORM_URL,
      type: 'postgres',
      entities: [process.env.TYPEORM_ENTITIES],
      synchronize: process.env.TYPEORM_SYN === 'true',
    }),
    UsersModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
