import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Employee } from './employee.entity';

@Injectable()
export class EmployeeRepository extends Repository<Employee> {
  constructor(private dataSource: DataSource) {
    super(Employee, dataSource.createEntityManager());
  }

  async findHierarchyById(id: number): Promise<Employee> {
    return await this.findOne({ where: { id }, relations: ['children'] });
  }
}
