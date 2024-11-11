import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('employee')
@UseGuards(JwtAuthGuard) // Protect all routes in this controller
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get('hierarchy/:id')
  async getHierarchy(@Param('id') id: number) {
    return this.employeeService.getEmployeeHierarchy(id);
  }
}
