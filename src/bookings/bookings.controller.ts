import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query, Headers, Logger } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { Booking } from './entities/booking.entity';

@Controller('bookings')
export class BookingsController {
  private readonly logger = new Logger(BookingsController.name);

  constructor(private readonly bookingsService: BookingsService) {}

  @Post()
  async create(@Body() createBookingDto: CreateBookingDto): Promise<Booking> {
    return this.bookingsService.create(createBookingDto);
  }

  @Get()
  async findAll(): Promise<Booking[]> {
    
    return this.bookingsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Booking> {
    return this.bookingsService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateBookingDto: UpdateBookingDto): Promise<Booking> {
    return this.bookingsService.update(+id, updateBookingDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.bookingsService.remove(+id);
  }

  @Post('fetch-and-save')
  async fetchAndSaveOrderData(
    @Headers('authorization') authorization: string, // Extract the Bearer Token from the headers
    @Query('pnr') pnrCode: string
  ): Promise<Booking[]> {
    // Extract the token from the "Bearer <token>" format
    
    
    const bearerToken = authorization?.split(' ')[1];
    if (!bearerToken) {
      throw new Error('Bearer Token is missing');
    }

    this.logger.log(bearerToken);
    this.logger.log(pnrCode);

    return this.bookingsService.fetchAndSaveBookingData(bearerToken, pnrCode);
  }
}
