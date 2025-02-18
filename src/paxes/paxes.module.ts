import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaxesService } from './paxes.service';
import { PaxesController } from './paxes.controller';
import { Pax } from './entities/pax.entity';
import { Booking } from 'src/bookings/entities/booking.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pax, Booking])],
  controllers: [PaxesController],
  providers: [PaxesService],
})
export class PaxesModule {}
