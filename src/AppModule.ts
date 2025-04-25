import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './PrismaService';
import TaskRepository from './Repositories/TaskRepository';
import UseCaseFactory from './UseCase/UseCaseFactory';
import { TaskController } from './Controllers/TaskController';
import { TaskService } from './Services/TaskService'; 


@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [TaskController],
  providers: [PrismaService, TaskRepository, UseCaseFactory, TaskService, 
  ],
})
export class AppModule {}
