import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('library')
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  maxPlayers: number;

  @Column()
  minPlayers: number;

  @Column()
  playerTurnTime: number;
}
