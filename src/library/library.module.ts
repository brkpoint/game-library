import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibraryController } from './library.controller';
import { LibraryService } from './library.service';
import { Game } from '../schema/game.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Game])],
  controllers: [LibraryController],
  providers: [LibraryService],
})
export class LibraryModule {}
