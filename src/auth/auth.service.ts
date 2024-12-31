import { HttpStatus, Injectable } from '@nestjs/common';
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
    const { email } = data;
    const user = await this.userService.findOne({
      email,
    });

    const authenticated = await compare(data.password, user.password);
    if (!authenticated) {
      return {
        status: HttpStatus.UNAUTHORIZED,
        message: 'Authentication failed',
      };
    }

    const tokenPayload = {
      email: user.email,
    };

    const accessToken = await this.jwtService.signAsync(tokenPayload);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...restUser } = user;

    return {
      status: HttpStatus.OK,
      data: {
        ...restUser,
      },
      accessToken: accessToken,
    };
  }
}
