import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  positionName: string;

  @Column()
  positionId: number;

  @ManyToOne(() => Employee, (employee) => employee.children)
  parent: Employee;

  @OneToMany(() => Employee, (employee) => employee.parent)
  children: Employee[];
}
