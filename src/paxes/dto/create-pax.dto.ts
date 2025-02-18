import { Booking } from 'src/bookings/entities/booking.entity';
import {
    IsAlphanumeric,
    IsDate,
    IsEmail,
    IsEnum,
    IsInt,
    IsNotEmpty,
    IsString,
    Matches,
    MinLength,
} from 'class-validator';

export class CreatePaxDto {
    @IsString()
    pax_name: string;

    @IsString()
    pax_nik: string;

    @IsDate()
    departure_date: Date;

    @IsString()
    departure_airport: string;

    @IsString()
    destination_airport: string;

    @IsString()
    flight_no: string;

    @IsString()
    ga_miles_no: string;

    @IsString()
    ga_miles_tier: string;

    @IsInt()
    @IsNotEmpty()
    free_bag_allow: number;
    
    @IsInt()
    @IsNotEmpty()
    total_bag_weight: number;
}
