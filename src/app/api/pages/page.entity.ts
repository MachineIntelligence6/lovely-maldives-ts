// Page Entity
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { UserEntity } from '../users/user.entity'

@Entity({ name: 'pages' })
export class PageEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ type: 'varchar', nullable: true })
  title!: string | null

  @Column({ type: 'varchar' })
  content!: string | null

  @Column({ nullable: true })
  slug!: string | null

  @Column({ nullable: true })
  metaTitle!: string | null

  @Column({ type: 'varchar', nullable: true })
  metaDescription!: string | null

  @Column({ nullable: true })
  metaKeywords!: string | null

  @ManyToOne(() => UserEntity, (user) => user.accounts, {
    createForeignKeyConstraints: true,
  })
  author!: UserEntity

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date

  @Column({
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt!: Date
}
