import { Test, TestingModule } from '@nestjs/testing';
import { PaxesService } from './paxes.service';

describe('PaxesService', () => {
  let service: PaxesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaxesService],
    }).compile();

    service = module.get<PaxesService>(PaxesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
