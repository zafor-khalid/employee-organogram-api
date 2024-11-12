import { EmployeeEntity } from './employee.entity/employee.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { Position } from '../database/position.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeEntity, Position])],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {}
