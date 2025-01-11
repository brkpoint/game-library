import { Controller, Body, Param, Post, Delete, Get } from '@nestjs/common';
import { LibraryService } from './library.service';
import { CreateGameDto, UpdateGameDto } from '../schema/game.dto';

@Controller('library')
export class LibraryController {
  constructor(private readonly libraryService: LibraryService) {}

  @Post()
  async create(@Body() gameDto: CreateGameDto) {
    return await this.libraryService.create(gameDto);
  }

  @Post(':id/')
  async update(@Param('id') id: number, @Body() gameDto: UpdateGameDto) {
    return await this.libraryService.update(id, gameDto);
  }

  @Get()
  async findAll() {
    return await this.libraryService.findAll();
  }

  @Get(':id/')
  async findOne(@Param('id') id: number) {
    return await this.libraryService.findOne(id);
  }

  @Delete(':id/')
  async delete(@Param('id') id: number) {
    return await this.libraryService.delete(id);
  }
}
