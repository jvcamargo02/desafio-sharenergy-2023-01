import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { Auth } from './entities/auth.entity';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('entyty should be defined', () => {
    const user = new Auth({
      name: 'John Doe',
      username: 'johndoe',
      password: '123456',
    });

    expect(user).toBeDefined();
    expect(user.name).toBe('John Doe');
    expect(user.username).toBe('johndoe');
    expect(user.password).toBe('123456');
  });

  describe('create', () => {
    it('should register a user', () => {
      expect(
        service.create({
          name: 'John Doe',
          username: 'johndoe',
          password: '123456',
        }),
      ).toBe('This action adds a new auth');
    });
  });
});
