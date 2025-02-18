import { Inject, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { Booking } from './entities/booking.entity';
import { Repository } from 'typeorm';
import { Pax } from 'src/paxes/entities/pax.entity';
import { ExternalApiService } from 'src/external-api.service';


@Injectable()
export class BookingsService {
  private readonly logger = new Logger(BookingsService.name);

  constructor(
    @InjectRepository(Booking)
    private readonly bookingRepository: Repository<Booking>,
    @InjectRepository(Pax)
    private readonly paxRepository: Repository<Pax>,
    private readonly externalApiService: ExternalApiService
  ) { }

  async fetchAndSaveBookingData(bearerToken: string, pnrCode: string): Promise<Booking[]> {
    // Fetch data from the external API
    const externalData = await this.externalApiService.fetchAnyData(bearerToken);
    

    // Process and save the data
    const savedBookings: Booking[] = [];
    for (const externalBooking of externalData) {
      // Map external data to Order entity
      const booking = this.bookingRepository.create({
        pnr_code: pnrCode,
        flight_code: 'XXX',
        flight_date: new Date('15-02-2025'),

      });

      // Map external data to Pax entities
      booking.paxes = externalBooking.data.customerLevel.map((externalPax) =>
        this.paxRepository.create({
          pax_name: externalPax.customerDetails.paxDetails.surname,
          pax_nik: externalPax.uniqueCustomerId.idSection.primeId,
          free_bag_allow: 0,
          total_bag_weight: 0,
        }),
      );

      // Save the order and its items (cascade)
      const savedBooking = await this.bookingRepository.save(booking);
      savedBookings.push(savedBooking);
    }

    return savedBookings;
  }

  async create(createBookingDto: CreateBookingDto): Promise<Booking> {
    const { paxes, ...bookingData } = createBookingDto;
    // Create the booking
    const order = this.bookingRepository.create(bookingData);

    // Create the order items
    order.paxes = paxes.map((pax) => this.paxRepository.create(pax));

    // Save the order and its items (cascade)
    return this.bookingRepository.save(order);
  }

  async findAll(): Promise<Booking[]> {
    return this.bookingRepository.find({ relations: ['paxes'] });
  }

  async findOne(id: number): Promise<Booking> {
    return this.bookingRepository.findOne({ where: { id }, relations: ['paxes'] });
  }

  async update(id: number, updateBookingDto: UpdateBookingDto): Promise<Booking> {
    const { paxes, ...bookingData } = updateBookingDto;

    // Find the booking
    const booking = await this.bookingRepository.findOne({
      where: { id },
      relations: ['paxes'],
    });
    if (!booking) {
      throw new Error('Booking not found');
    }

    // Update the booking data
    Object.assign(booking, bookingData);

    // Update the booking paxes if provided
    if (paxes) {
      // Remove existing items
      await this.paxRepository.delete({ booking_id: id });

      // Create new paxes
      booking.paxes = paxes.map((item) => this.paxRepository.create(booking));
    }

    return this.bookingRepository.save(booking);
  }

  async remove(id: number): Promise<{ affected?: number }> {
    return this.bookingRepository.delete(id);
  }
}
