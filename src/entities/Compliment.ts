import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Tag } from './Tag';
import { User } from './User';

@Entity('compliments')
class Compliment {
  @PrimaryColumn()
  readonly id: string;

  @Column()
    user_sender: string;

  @Column()
    user_receiver: string;

  @Column()
    tag_id: string;

  @Column()
    message: string;

  @CreateDateColumn()
    created_at: string;

  @JoinColumn({ name: 'user_sender' })
  @ManyToOne(() => User)
    userSender: User;

  @JoinColumn({ name: 'user_receiver' })
  @ManyToOne(() => User)
    userReceiver: User;

  @JoinColumn({ name: 'tag_id' })
  @ManyToOne(() => Tag)
    tag: Tag;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Compliment };
