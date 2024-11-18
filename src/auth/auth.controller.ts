import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthLoginDto } from './dto/auth-login.dto';
// import { AuthGuard } from './guards/auth.guard';
import { CurrentUser } from './custom_decorator/current-user.decorator';
import { User } from '../users/schema/user.schema';
import { PassportLocalGuard } from './guards/passport-local.guard';
import { PassportJwtAuthGuard } from './guards/passport-jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() loginData: AuthLoginDto) {
    return this.authService.authenticate(loginData);
  }

  @UseGuards(PassportJwtAuthGuard)
  @Get('me')
  getUserInfo(@CurrentUser() user: User) {
    return user;
  }

  @Post('login-v2')
  @UseGuards(PassportLocalGuard)
  loginWithPassport(@CurrentUser() user: User) {
    return user;
  }
}
