import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put
} from '@nestjs/common';
import { TaskService } from '../Services/TaskService';

import DeleteTask from '../UseCase/DeleteTask/DeleteTask';
import GetAllTasksUseCase from '../UseCase/GetAllTasks/GetAllTasksUseCase';
import SaveTaskDto from '../UseCase/SaveTask/SaveTaskDto';
import UseCaseFactory from '../UseCase/UseCaseFactory';
import SaveTaskUseCase from 'src/UseCase/SaveTask/SaveTaskUseCase';

@Controller()
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('/tasks')
  async getAll() {
    return (await this.taskService.create(GetAllTasksUseCase)).handle();
  }

  @Post('/tasks')
async create(@Body() dto: SaveTaskDto) {
  const useCase = await this.taskService.create(SaveTaskUseCase);
  return useCase.handle(dto);
}

@Put('/tasks/:id') // ✅ fix route
  async updateTask(
    @Param('id') id: string,
    @Body() saveTaskDto: SaveTaskDto,
  ) {
    return this.taskService.update(Number(id), saveTaskDto); // ✅ cast en number
  }

// @Patch(':id')
// async updateTask(
//   @Param('id') id: number,
//   @Body() saveTaskDto: SaveTaskDto,
// ) {
//   return this.taskService.update(id, saveTaskDto);
// }

  @Delete('/tasks/:id')
  async delete(@Param('id') id: string) {
    return (await this.taskService.create(DeleteTask)).handle(Number(id));
  }
}
