import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { FaqsCategoryEntity } from './faqs-category.entity'

@Entity()
export class QuestionEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  content!: string

  @Column()
  answer_content!: string

  @Column()
  categoryId!: number

  @ManyToOne(() => FaqsCategoryEntity, (category: any) => category.questions)
  category!: FaqsCategoryEntity
}
