// import {
//   Entity,
//   PrimaryGeneratedColumn,
//   Column,
//   ManyToMany,
//   JoinTable,
// } from 'typeorm'
// import { UserEntity } from './user.entity'

// @Entity()
// export class Role {
//   @PrimaryGeneratedColumn()
//   id!: number

//   @Column({ type: 'varchar' })
//   name!: string | null

//   @ManyToMany(() => UserEntity)
//   @JoinTable()
//   users!: UserEntity[]
// }
