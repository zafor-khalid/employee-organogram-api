import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateEmployeeDto {
  @ApiProperty({ example: 'Name 2', description: 'The name of the employee' })
  @IsString()
  name: string;

  @ApiProperty({ example: 2, description: 'The position ID' })
  @IsNumber()
  positionId: number;

  @ApiProperty({
    example: 'Senior software eng',
    description: 'The position name',
  })
  @IsString()
  positionName: string;

  @ApiProperty({ example: 1, description: 'The parent employee ID' })
  @IsNumber()
  @IsOptional()
  parent?: number;
}
