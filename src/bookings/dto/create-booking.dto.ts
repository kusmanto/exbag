import {
    IsAlphanumeric,
    IsEmail,
    IsEnum,
    IsInt,
    IsNotEmpty,
    IsString,
    Matches,
    MinLength,
} from 'class-validator';
import { CreatePaxDto } from 'src/paxes/dto/create-pax.dto';

export class CreateBookingDto {
    @IsString()
    @MinLength(6, { message: 'PNR Code must have atleast 6 characters.' })
    @IsNotEmpty()
    pnr_code: string;

    @IsNotEmpty()
    flight_code: string;

    @IsNotEmpty()
    flight_date: Date;

    paxes: CreatePaxDto[];
}
