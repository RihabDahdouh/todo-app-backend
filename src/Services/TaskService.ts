import { Injectable } from '@nestjs/common';
import { PrismaService } from '../PrismaService';
import SaveTaskDto from '../UseCase/SaveTask/SaveTaskDto';
import UseCaseFactory from '../UseCase/UseCaseFactory';
import SaveTaskUseCase from '../UseCase/SaveTask/SaveTaskUseCase';
import { Type } from '@nestjs/common';
import { Task } from '@prisma/client';
import { UseCase } from 'src/UseCase/UseCase';


@Injectable()
export class TaskService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly useCaseFactory: UseCaseFactory
  ) {}

  async findAll() {
    return this.prisma.task.findMany();
  }

  async create<T extends UseCase<any, any[]>>(useCaseType: Type<T>) {
    return this.useCaseFactory.create(useCaseType);
  }
  

  async update(id: number, dto: SaveTaskDto) {
    return this.prisma.task.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: number) {
    return this.prisma.task.delete({
      where: { id },
    });
  }
}
