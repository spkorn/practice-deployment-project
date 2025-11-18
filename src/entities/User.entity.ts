import { Entity, PrimaryKey, Property } from '@mikro-orm/postgresql';
import { CreateUserBody } from '../modules/user/services/user.service';

@Entity({ tableName: 'users' })
export class UserEntity {
  @Property({ name: 'name', type: 'varchar', length: 255, nullable: false })
  name!: string;

  @PrimaryKey({ name: 'email', type: 'varchar', length: 255, nullable: false })
  email!: string;

  @Property({
    type: 'timestamp',
    name: 'created_at',
    nullable: false,
  })
  createdAt = new Date();

  @Property({
    name: 'updated_at',
    type: 'timestamp',
    nullable: false,
    onUpdate: () => new Date(),
  })
  updatedAt = new Date();

  static make(props: CreateUserBody): UserEntity {
    const user = new UserEntity();
    user.name = props.name;
    user.email = props.email;
    return user;
  }
}
