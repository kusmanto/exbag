import { Test, TestingModule } from '@nestjs/testing';
import { PaxesController } from './paxes.controller';
import { PaxesService } from './paxes.service';

describe('PaxesController', () => {
  let controller: PaxesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaxesController],
      providers: [PaxesService],
    }).compile();

    controller = module.get<PaxesController>(PaxesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
