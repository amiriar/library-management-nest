import { Test, TestingModule } from '@nestjs/testing';
import { AdminBooksController } from './admin-books.controller';
import { AdminBooksService } from './admin-books.service';

describe('AdminBooksController', () => {
  let controller: AdminBooksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminBooksController],
      providers: [AdminBooksService],
    }).compile();

    controller = module.get<AdminBooksController>(AdminBooksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
