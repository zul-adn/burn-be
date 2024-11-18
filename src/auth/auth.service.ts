import { HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthLoginDto } from './dto/auth-login.dto';
import { UsersService } from '../users/users.service';
import { compare } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async authenticate(data: AuthLoginDto) {
    const { email, password } = data;
    const user = await this.userService.findOne({
      email,
    });

    const authenticated = await compare(password, user.password);
    if (!authenticated) {
      throw new UnauthorizedException();
    }

    const tokenPayload = {
      email: user.email,
    };

    const accessToken = await this.jwtService.signAsync(tokenPayload);

    return {
      status: HttpStatus.OK,
      data: {
        accessToken: accessToken,
        ...user,
      },
    };
  }
}
