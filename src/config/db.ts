import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
import { AccountEntity } from '@/app/api/auth/account.entity'
import { SessionEntity } from '@/app/api/auth/session.entity'
import { VerificationTokenEntity } from '@/app/api/auth/verification-tokens.entity'
import { UserEntity } from '@/app/api/users/user.entity'

export const connection: any = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'db_md',
  namingStrategy: new SnakeNamingStrategy(),
  synchronize: true,
  entities: [UserEntity, SessionEntity, AccountEntity, VerificationTokenEntity],
}
