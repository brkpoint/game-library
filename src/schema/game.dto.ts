import { IsNotEmpty, IsString, IsOptional, IsNumber } from 'class-validator';

/**
 * @param name Name of the game
 * @param description Description of the game
 * @param minPlayers Minimum ammount of players allowed to play the game
 * @param maxPlayers Maximum ammount of players allowed to play the game
 * @param playerTurnTime Each players turn time
 */
export class CreateGameDto {
  @IsNotEmpty({ message: 'Field `name` must be added' })
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty({ message: 'Field `minPlayers` must be added' })
  @IsNumber()
  minPlayers: number;

  @IsNotEmpty({ message: 'Field `minPlayers` must be added' })
  @IsNumber()
  maxPlayers: number;

  @IsNotEmpty({ message: 'Field `playerTurnTime` must be added' })
  @IsNumber()
  playerTurnTime: number;
}

/**
 * @param name Name of the game
 * @param description Description of the game
 * @param minPlayers Minimum ammount of players allowed to play the game
 * @param maxPlayers Maximum ammount of players allowed to play the game
 * @param playerTurnTime Each players turn time
 */
export class UpdateGameDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  minPlayers?: number;

  @IsOptional()
  @IsNumber()
  maxPlayers?: number;

  @IsOptional()
  @IsNumber()
  playerTurnTime?: number;
}
