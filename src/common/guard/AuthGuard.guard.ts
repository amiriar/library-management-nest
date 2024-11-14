import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as cookie from 'cookie';
import * as dotenv from 'dotenv';
import { UsersService } from 'src/module/users/users.service';
dotenv.config();

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private userService: UsersService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    try {
      // Check for Bearer token in Authorization header
      const authHeader = request.headers.authorization;
      let token: string;

      if (authHeader && authHeader.startsWith('Bearer ')) {
        token = authHeader.substring(7); // Remove 'Bearer ' prefix
      } else {
        // Fallback to cookie if no Bearer token
        const cookies = cookie.parse(request.headers.cookie || '');
        token = cookies['accessToken'];
      }

      if (!token) {
        throw new UnauthorizedException(
          'دسترسی بدون ورود به حساب کاربری مجاز نیست.',
        );
      }

      token = token?.startsWith('Bearer ') ? token.substring(7) : token;

      const decodedToken = this.jwtService.verify(token, {
        secret: process.env.JWT_SECRET_KEY,
      });

      const user = await this.userService.findOne(decodedToken._id);
      request.user = user;
      // request.user = decodedToken;

      return true;
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        throw new UnauthorizedException(
          'زمان نشست شما به پایان رسیده است. لطفاً مجدداً وارد شوید.',
        );
      } else if (error.name === 'JsonWebTokenError') {
        throw new BadRequestException('توکن معتبر نیست.');
      } else {
        throw new UnauthorizedException(
          'لطفاً برای دسترسی وارد حساب کاربری خود شوید.',
        );
      }
    }
  }
}
