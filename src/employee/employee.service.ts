// src/employee/employee.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeEntity } from './employee.entity/employee.entity';
import { CreateEmployeeDto } from './dto/create-employee.dto/create-employee.dto';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(EmployeeEntity)
    private employeeRepository: Repository<EmployeeEntity>,
  ) {}

  // Logic to create a new employee
  async createEmployee(
    createEmployeeDto: CreateEmployeeDto,
  ): Promise<EmployeeEntity> {
    const employee = this.employeeRepository.create(createEmployeeDto); // Create a new employee instance
    return this.employeeRepository.save(employee); // Save it to the database
  }

  // Logic to get an employee by ID
  async getEmployeeById(id: number): Promise<EmployeeEntity> {
    const employee = await this.employeeRepository.findOne({
      where: { id },
      relations: ['position', 'parentEmployee', 'children'],
    });
    if (!employee) {
      throw new NotFoundException(`Employee with id ${id} not found`);
    }
    return employee;
  }
}
