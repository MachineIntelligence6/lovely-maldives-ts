// Category.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { Type } from './type.entity'

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string

  @ManyToOne(() => Type, (type: any) => type.categories)
  type!: Type
}
