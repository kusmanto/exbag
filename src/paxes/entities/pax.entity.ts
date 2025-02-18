import { Booking } from 'src/bookings/entities/booking.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Pax {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 300 })
    pax_name: string;

    @Column({ length: 50 })
    pax_nik: string;

    @Column({ type: 'timestamptz' })
    departure_date: Date;

    @Column({ length: 3 })
    departure_airport: string;

    @Column({ length: 3 })
    destination_airport: string;

    @Column({ length: 50 })
    ga_miles_no: string;

    @Column({ length: 50 })
    ga_miles_tier: string;

    @Column('int')
    free_bag_allow: number;

    @Column('int')
    total_bag_weight: number;

    @CreateDateColumn()
    created_at: Date; // Creation date

    @UpdateDateColumn()
    updated_at: Date; // Last updated date

    @DeleteDateColumn()
    deleted_at: Date; // Deletion date

    @ManyToOne(() => Booking, (booking) => booking.paxes)
    @JoinColumn({ name: 'booking_id' })
    booking: Booking;

    @Column()
    booking_id: number; // Foreign key

}
