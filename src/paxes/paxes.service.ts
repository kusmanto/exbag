import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePaxDto } from './dto/create-pax.dto';
import { UpdatePaxDto } from './dto/update-pax.dto';
import { Pax } from './entities/pax.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PaxesService {
constructor(
    @InjectRepository(Pax) private readonly paxRepository: Repository<Pax>,
  ) { }

  async create(createPaxDto: CreatePaxDto): Promise<Pax> {
    const pax:Pax = new Pax();
    pax.pax_name = createPaxDto.pax_name;
    pax.free_bag_allow = createPaxDto.free_bag_allow;

    return this.paxRepository.save(pax);
  }

  async findAll():Promise<Pax[]> {
    return this.paxRepository.find();
  }

  async findOne(id: number):Promise<Pax> {
    return this.paxRepository.findOne({ where: { id } });
  }

  async update(id: number, updatePaxDto: UpdatePaxDto): Promise<Pax> {
    await this.paxRepository.update(id, updatePaxDto);
    return this.paxRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.paxRepository.delete(id);
  }
}
