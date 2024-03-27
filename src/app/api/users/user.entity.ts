import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { transformer } from '@/lib/tranformer'
import { SessionEntity } from '../auth/session.entity'
import { AccountEntity } from '../auth/account.entity'

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ type: 'varchar', nullable: true })
  name!: string | null

  @Column({ type: 'varchar', nullable: true, unique: true })
  email!: string | null

  @Column({ type: 'varchar', nullable: true, transformer: transformer.date })
  emailVerified!: string | null

  @Column({ type: 'varchar', nullable: true })
  image!: string | null

  @Column({ type: 'varchar', nullable: true })
  role!: string | null

  @OneToMany(() => SessionEntity, (session) => session.userId)
  sessions!: SessionEntity[]

  @OneToMany(() => AccountEntity, (account) => account.userId)
  accounts!: AccountEntity[]
}
