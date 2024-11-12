import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Position } from '../../database/position.entity';

@Entity()
export class EmployeeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Position, (position) => position.employees)
  @JoinColumn({ name: 'positionId' })
  position: Position;

  @Column()
  positionId: number;

  @ManyToOne(() => EmployeeEntity, (employee) => employee.children)
  @JoinColumn({ name: 'parentEmployeeId' })
  parentEmployee: EmployeeEntity;

  @OneToMany(() => EmployeeEntity, (employee) => employee.parentEmployee)
  children: EmployeeEntity[];
}
