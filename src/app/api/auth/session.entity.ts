// import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
// import type { Relation } from 'typeorm'
// import { transformer } from '@/lib/tranformer'
// import { UserEntity } from '../users/user.entity'

// @Entity({ name: 'sessions' })
// export class SessionEntity {
//   @PrimaryGeneratedColumn('uuid')
//   id!: string

//   @Column({ unique: true })
//   sessionToken!: string

//   @Column({ type: 'uuid' })
//   userId!: string

//   @Column({ transformer: transformer.date })
//   expires!: string

//   @ManyToOne(() => UserEntity, (user) => user.sessions)
//   user!: Relation<UserEntity>
// }
