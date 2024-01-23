import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import { Tokens } from './types';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    hashData(data: string): any;
    getTokens(userId: number, email: string): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    signupLocal(dto: AuthDto): Promise<Tokens>;
    signinLocal(dto: AuthDto): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    logout(userId: number): Promise<void>;
    refreshTokens(userId: number, rt: string): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    updateRtHash(userId: number, rt: string): Promise<void>;
}
