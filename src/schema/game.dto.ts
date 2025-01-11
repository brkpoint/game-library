import { IsNotEmpty, IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateGameDto {
  @IsNotEmpty({ message: 'Field `name` must be added' })
  @IsString()
  name: string;

  @IsNotEmpty({ message: 'Field `minPlayers` must be added' })
  @IsNumber()
  minPlayers: number;

  @IsNotEmpty({ message: 'Field `minPlayers` must be added' })
  @IsNumber()
  maxPlayers: number;
}

export class UpdateGameDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsNumber()
  minPlayers?: number;

  @IsOptional()
  @IsNumber()
  maxPlayers?: number;
}
