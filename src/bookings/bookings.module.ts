import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingsService } from './bookings.service';
import { BookingsController } from './bookings.controller';
import { Booking } from './entities/booking.entity';
import { Pax } from 'src/paxes/entities/pax.entity';
import { ExternalApiService } from 'src/external-api.service';


@Module({
  imports: [TypeOrmModule.forFeature([Booking, Pax])],
  providers: [BookingsService, ExternalApiService],
  controllers: [BookingsController],
})
export class BookingsModule {}
