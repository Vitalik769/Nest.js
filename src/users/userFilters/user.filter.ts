import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { UserExceprion } from '../exeption/users.exeption';

@Catch(UserExceprion)
export class UserExceprionFilter implements ExceptionFilter {
  catch(exception: UserExceprion, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response  = ctx.getResponse();

    response.status(500).json({
      timestamp: new Date().toISOString(),
      msg: exception.what(),
    });
  }
}
