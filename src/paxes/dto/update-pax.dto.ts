import { PartialType } from '@nestjs/mapped-types';
import { CreatePaxDto } from './create-pax.dto';

export class UpdatePaxDto extends PartialType(CreatePaxDto) {
    pax_name?: string;
    pax_nik?: string;
    departure_date?: Date;
    departure_airport?: string;
    destination_airport?: string;
    flight_no?: string;
    ga_miles_no?: string;
    ga_miles_tier?: string;
    free_bag_allow?: number;
    total_bag_weight?: number;
}
