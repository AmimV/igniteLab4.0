import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'crypto';
import { CreateNotificationBody } from './create-notification-body';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notificaiton.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const {recipientID, content, category } = body

      await this.prisma.notificaiton.create({
        data: {
          id: randomUUID(),
          content,
          category,
          recipientID,
        }
      })
    }
  }
