import { Injectable } from '@nestjs/common';
import { EmployeeRepository } from './employee.repository';

@Injectable()
export class EmployeeService {
  constructor(private readonly employeeRepository: EmployeeRepository) {}

  async getEmployeeHierarchy(id: number) {
    return this.employeeRepository.findHierarchyById(id);
  }
}
