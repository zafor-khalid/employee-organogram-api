import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto/create-employee.dto';
import { EmployeeEntity } from './employee.entity/employee.entity';

@ApiTags('employee')
@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new employee' })
  @ApiResponse({
    status: 201,
    description: 'The employee has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async createEmployee(
    @Body() createEmployeeDto: CreateEmployeeDto,
  ): Promise<EmployeeEntity> {
    return this.employeeService.createEmployee(createEmployeeDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get employee details by ID' })
  @ApiResponse({
    status: 200,
    description: 'Employee details retrieved successfully.',
    type: EmployeeEntity,
  })
  @ApiResponse({ status: 404, description: 'Employee not found' })
  async getEmployeeById(@Param('id') id: number): Promise<EmployeeEntity> {
    return this.employeeService.getEmployeeById(id);
  }
}
