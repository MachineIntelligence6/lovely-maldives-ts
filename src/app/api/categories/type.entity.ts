import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Category } from './category.entity'

@Entity()
export class Type {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string

  @OneToMany(() => Category, (category) => category.type)
  categories!: Category[]
}
