import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

import { User } from "./User";

@Entity("characters")
export class Character {
  @PrimaryColumn()
  id: string;

  @Column()
  hero: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column()
  identity: string;

  @Column()
  secret_identity: boolean;

  @Column()
  gender: string;

  @Column()
  age: number;

  @Column()
  height: number;

  @Column()
  weight: string;

  @Column()
  eyes: string;

  @Column()
  hair: string;

  @Column()
  affiliate_group: string;

  @Column()
  base_of_operations: string;

  @Column()
  power_level: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
