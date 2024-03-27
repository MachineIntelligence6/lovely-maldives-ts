import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { QuestionEntity } from './question.entity'

@Entity()
export class FaqsCategoryEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  title!: string

  @OneToMany(() => QuestionEntity, (question) => question.category)
  questions!: QuestionEntity[]
}
