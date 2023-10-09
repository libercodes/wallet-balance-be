import { Exclude } from 'class-transformer'
import { UserType, UserTypes } from '../types/types'
import {
  Column,
  Entity,
} from 'typeorm'
import { BaseModel } from './base-model.entity'

@Entity()
export class User extends BaseModel {
  @Column({ nullable: true })
  wallet: string

  @Column({ default: UserType.user, type: 'varchar' })
  type: UserTypes

  @Exclude()
  @Column({ nullable: true })
  lastForcedLogout: Date
}
