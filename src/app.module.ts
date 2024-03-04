import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { APP_GUARD } from '@nestjs/core';
// import { RolesGuard } from './auth/guard/roles.guard';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { UploadController } from './upload/upload.controller';
import { UploadService } from './upload/upload.service';
import { UploadModule } from './upload/upload.module';
import { ConfigModule } from '@nestjs/config';
import { AtGuard } from './common/guards/at.guard';

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
    UploadModule,
    ConfigModule.forRoot({ isGlobal: true })
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AtGuard,
    },
    UploadService,
  ],
  controllers: [UploadController],
})
export class AppModule {}