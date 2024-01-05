import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { UserExceprion } from '../exeption/users.exeption';
export declare class UserExceprionFilter implements ExceptionFilter {
    catch(exception: UserExceprion, host: ArgumentsHost): void;
}
