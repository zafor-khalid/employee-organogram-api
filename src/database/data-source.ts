import { DataSource } from 'typeorm';
import { EmployeeEntity } from '../employee/employee.entity/employee.entity';
import { Position } from './position.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT, 10) || 5432,
  username: process.env.DB_USERNAME || 'zafor',
  password: process.env.DB_PASSWORD || '123456',
  database: process.env.DB_NAME || 'employee_db',
  entities: [EmployeeEntity, Position],
  migrations: ['src/database/migrations/*.ts'],
  synchronize: false,
});
