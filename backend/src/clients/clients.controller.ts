import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';

import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@ApiBearerAuth()
@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  async create(@Body() createClientDto: CreateClientDto) {
    try {
      return await this.clientsService.create(createClientDto);
    } catch (error) {
      throw new HttpException( error.message ??
        'Internal Server Error', error.status ??
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.clientsService.findAll();
    } catch (error) {
      throw new HttpException( error.message ??
        'Internal Server Error', error.status ??
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.clientsService.findOne(id);
    } catch (error) {
      throw new HttpException( error.message ??
        'Internal Server Error', error.status ??
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    try {
      await this.clientsService.update(id, updateClientDto);

      return {
        message: 'Client updated successfully',
      };
    } catch (error) {
      throw new HttpException( error.message ??
        'Internal Server Error', error.status ??
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.clientsService.remove(id);

      return {
        message: 'Client deleted successfully',
      };
    } catch (error) {
      throw new HttpException( error.message ??
        'Internal Server Error', error.status ??
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
