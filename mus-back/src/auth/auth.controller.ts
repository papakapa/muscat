import { Body, Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @Post('check')
  async onCheck(@Body('login') login: string) {
    return this.authService.checkUser(login);
  }

  @Post('signUp')
  async createUser(@Body('user') user: CreateUserDto) {
    return this.authService.createUser(user);
  }

  @Post('user')
  async getUser(@Body('login') login: string) {
    return this.authService.getUser(login);
  }

  @UseGuards(LocalAuthGuard)
  @Post('signIn')
  async onLogin(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('isAuth')
  validateToken(@Request() req) {
    return req.user;
  }
}
