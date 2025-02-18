import { Pax } from 'src/paxes/entities/pax.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany } from 'typeorm';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 10 })
  pnr_code: string;

  @Column({ length: 50 })
  flight_code: string;

  @Column({ type: 'timestamptz' })
  flight_date: Date;

  @CreateDateColumn()
  created_at: Date; // Creation date

  @UpdateDateColumn()
  updated_at: Date; // Last updated date

  @DeleteDateColumn()
  deleted_at: Date; // Deletion date

  @OneToMany(() => Pax, (pax) => pax.booking, { cascade: true})
  paxes: Pax[];
}
