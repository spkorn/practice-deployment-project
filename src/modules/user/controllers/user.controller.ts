import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import type { CreateUserBody } from '../services/user.service';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async createUser(@Body() body: CreateUserBody) {
    return await this.userService.createUser(body);
  }

  @Get(':email')
  async getUserByEmail(@Param('email') email: string) {
    return await this.userService.getUserByEmail(email);
  }

  @Get()
  async getAllUsers() {
    return await this.userService.getAllUsers();
  }
}
