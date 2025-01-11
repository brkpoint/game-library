import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateGameDto, UpdateGameDto } from '../schema/game.dto';
import { Game } from '../schema/game.entity';

@Injectable()
export class LibraryService {
  constructor(
    @InjectRepository(Game)
    private librarySource: Repository<Game>,
  ) {}

  /**
   * @description Add new game to the database
   * @param gameDto
   * @returns {Promise<Game>}
   */
  async create(gameDto: CreateGameDto): Promise<Game> {
    const game = this.librarySource.create(gameDto);

    return await this.librarySource.save(game);
  }

  /**
   * @description Updates game data from id
   * @param id
   * @param updateGameDto
   * @returns {Promise<Game>} game
   */
  async update(id: number, updateGameDto: UpdateGameDto): Promise<Game> {
    const game = await this.findOne(id);
    Object.assign(game, updateGameDto);

    return await this.librarySource.save(game);
  }

  /**
   * @description Gets all of the games in database
   * @returns {Promise<Array<Game>>} games
   */
  async findAll(): Promise<Array<Game>> {
    return await this.librarySource.find();
  }

  /**
   * @description Get game data by id
   * @param id
   * @returns {Promise<Game | object>} game
   */
  async findOne(id: number): Promise<Game | object> {
    const game = await this.librarySource.findOne({ where: { id } });

    if (game) {
      return game;
    }

    return { message: `Game with \`${id}\` not found.` };
  }

  /**
   * @description Deletes game from database by id
   * @param id
   * @returns {Promise<Game | object>} game
   */
  async delete(id: number): Promise<Game | object> {
    const game = await this.findOne(id);
    const res = await this.librarySource.delete(id);

    if (res.affected !== 0) {
      return game;
    }

    return { message: `Game with \`${id}\` doesnt exist.` };
  }
}
