import { Injectable, Type } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import TaskRepository from '../Repositories/TaskRepository'; // Assure-toi que c'est le bon chemin
import SaveTaskUseCase from './SaveTask/SaveTaskUseCase';
import DeleteTask from './DeleteTask/DeleteTask';
import GetAllTasksUseCase from './GetAllTasks/GetAllTasksUseCase';
import { UseCase } from './UseCase';

type UseCases = GetAllTasksUseCase | DeleteTask | SaveTaskUseCase;

@Injectable()
export default class UseCaseFactory {
  constructor(private readonly moduleRef: ModuleRef) {}

  async create<T extends UseCase<any, any[]>>(useCaseType: Type<T>): Promise<T> {
    const useCase = await this.moduleRef.create(useCaseType);
    
    // Injecte manuellement les dépendances si nécessaire (par exemple, taskRepository)
    if (useCase instanceof SaveTaskUseCase) {
      const taskRepository = this.moduleRef.get(TaskRepository, { strict: false });
      useCase.setTaskRepository(taskRepository); // Assure-toi que SaveTaskUseCase a une méthode setTaskRepository()
    }

    return useCase;
  }
}
