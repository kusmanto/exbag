import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaxesService } from './paxes.service';
import { CreatePaxDto } from './dto/create-pax.dto';
import { UpdatePaxDto } from './dto/update-pax.dto';
import { Pax } from './entities/pax.entity';


@Controller('paxes')
export class PaxesController {
  constructor(private readonly paxesService: PaxesService) {}

  @Post()
  async create(@Body() createPaxDto: CreatePaxDto): Promise<Pax> {
    return this.paxesService.create(createPaxDto);
  }

  @Get()
  async findAll(): Promise<Pax[]> {
    return this.paxesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Pax> {
    return this.paxesService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updatePaxDto: UpdatePaxDto): Promise<Pax> {
    return this.paxesService.update(id, updatePaxDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paxesService.remove(+id);
  }
}
