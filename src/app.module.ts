import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingsModule } from './bookings/bookings.module';
import { Booking } from './bookings/entities/booking.entity';
import { PaxesModule } from './paxes/paxes.module';
import { Pax } from './paxes/entities/pax.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      password: 'password',
      username: 'postgres',
      entities: [Booking, Pax],
      database: 'exbag',
      synchronize: true,
      logging: true,
    }),
    BookingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
