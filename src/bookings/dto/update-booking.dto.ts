import { PartialType } from '@nestjs/mapped-types';
import { CreateBookingDto } from './create-booking.dto';
import { CreatePaxDto } from 'src/paxes/dto/create-pax.dto';

export class UpdateBookingDto extends PartialType(CreateBookingDto) {
    pnr_code?: string;
    flight_code?: string;
    flight_date?: Date;
    paxes?: CreatePaxDto[];
}
