import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { LibraryModule } from '../library/library.module';
import { Game } from '../schema/game.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'libraryDB',
      synchronize: true,
      entities: [Game],
      subscribers: [],
      migrations: [],
    }),
    LibraryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
