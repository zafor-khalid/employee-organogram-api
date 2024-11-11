import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 5432,
      username: process.env.DB_USERNAME || 'test',
      password: process.env.DB_PASSWORD || 'test',
      database: process.env.DB_NAME || 'test',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
  ],
})
export class AppModule {}
