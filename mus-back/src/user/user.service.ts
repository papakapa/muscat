import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import {ExceptedUserDto} from "./dto/excepted-user.dto";

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findUserByLogin(login: string): Promise<User | undefined> {
    return this.userModel.findOne({ login: login });
  }

  async createUser(user: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async updateUser(user: ExceptedUserDto) {
    return  this.userModel.findOneAndUpdate({_id: user._id}, user);
  }
}
