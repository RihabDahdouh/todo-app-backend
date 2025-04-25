import { Injectable } from '@nestjs/common';
import SaveTaskDto from './SaveTaskDto';
import { UseCase } from '../UseCase';
import { Task } from '@prisma/client';
import TaskRepository from 'src/Repositories/TaskRepository';

@Injectable()
export default class SaveTaskUseCase implements UseCase<Promise<Task>, [dto: SaveTaskDto]> {
  private taskRepository: TaskRepository;

  constructor(private readonly taskRepositoryParam: TaskRepository) {
    this.taskRepository = taskRepositoryParam;
  }

  // Optionnel : méthode pour injecter manuellement si nécessaire
  setTaskRepository(taskRepository: TaskRepository) {
    this.taskRepository = taskRepository;
  }

  async handle(dto: SaveTaskDto) {
    if (!dto.name || dto.name.trim() === '') {
      throw new Error('Task name is required');
    }

    return this.taskRepository.save(dto);
  }
}
