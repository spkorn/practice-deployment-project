import { EntityManager } from '@mikro-orm/postgresql';
import { UserEntity } from '../../../entities/User.entity';
import { Injectable } from '@nestjs/common';

export interface CreateUserBody {
  email: string;
  name: string;
}

@Injectable()
export class UserService {
  constructor(private readonly em: EntityManager) {}

  async createUser(body: CreateUserBody): Promise<UserEntity> {
    const user = UserEntity.make(body);
    await this.em.persistAndFlush(user);
    return user;
  }

  async getUserByEmail(email: string): Promise<UserEntity> {
    return this.em.findOneOrFail(UserEntity, { email });
  }

  async getAllUsers(): Promise<UserEntity[]> {
    return this.em.findAll(UserEntity);
  }
}
