import { Migration } from '@mikro-orm/migrations';

export class Migration20251118045857 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table "users" ("email" varchar(255) not null, "name" varchar(255) not null, "created_at" timestamptz not null, "updated_at" timestamptz not null, constraint "users_pkey" primary key ("email"));`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "users" cascade;`);
  }

}
