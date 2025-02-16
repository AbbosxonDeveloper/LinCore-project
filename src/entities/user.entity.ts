import { UserWatchVideo } from './user_watch_video.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CertificateOpenUser } from './certificate_open_user.entity';
import { CoursesOpenUsers } from './course_open_users.entity';
import { UserTakeWorkbook } from './user_take_workbook.entity';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  user_id: string;

  @Column({
    type: 'character varying',
    length: 65,
    nullable: false,
  })
  first_name: string;

  @Column({
    type: 'character varying',
    length: 65,
    nullable: false,
  })
  last_name: string;

  @Column({
    type: 'character varying',
    length: 30,
    nullable: false,
  })
  area: string;

  @Column({
    type: 'character varying',
    length: 100,
    nullable: false,
  })
  email: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  image: string;

  @ManyToMany(() => CertificateOpenUser)
  @JoinTable()
  user_sertificate: CertificateOpenUser[];

  @OneToMany(() => UserTakeWorkbook, (workbook) => workbook.user_id)
  take_workbook: UserTakeWorkbook[];

  @OneToMany(() => CoursesOpenUsers, (course) => course.user_id)
  open_course: CoursesOpenUsers[];

  @OneToMany(() => UserWatchVideo, (watch) => watch.user_id)
  watch_video: UserWatchVideo[];
}
