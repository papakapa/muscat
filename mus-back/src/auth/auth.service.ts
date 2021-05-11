import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../user/dto/create-user.dto';
import {ExceptedUserDto} from "../user/dto/excepted-user.dto";

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(login: string, pass: string): Promise<any> {
    const user = await this.userService.findUserByLogin(login);
    if (user && user.password === pass) {
      return user;
    }
    return null;
  }

  async checkUser(login: string) {
    const user = await this.userService.findUserByLogin(login);
    if (user) {
      return { isExist: true };
    }
    return { isExist: false };
  }

  async getUser(login:string) {
    const user = await this.userService.findUserByLogin(login);
    if (user) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = { login: user.login, password: user.password };
    return {
      access_token: this.jwtService.sign(payload),
      login: user.login,
    };
  }

  async createUser(user: CreateUserDto) {
    const existingUser = await this.userService.findUserByLogin(user.login);
    if (existingUser) {
      throw new Error('User exist');
    }
    const newUser = await this.userService.createUser(user);
    return `User with login: ${newUser.login} created`;
  }

  async updateUser(user: ExceptedUserDto) {
    return this.userService.updateUser(user);
  }
}
