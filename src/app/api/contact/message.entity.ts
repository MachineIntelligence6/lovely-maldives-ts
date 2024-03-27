import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('messages')
export class Message {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ type: 'varchar', length: 255 })
  name!: string

  @Column({ type: 'varchar', length: 255 })
  email!: string

  @Column({ type: 'varchar', length: 255 })
  subject!: string

  @Column({ type: 'text' })
  content!: string

  @Column({ type: 'varchar', length: 20, nullable: true })
  contactNumber!: string | null
}
