// import { Test, TestingModule } from '@nestjs/testing';
// import { AuthService } from './auth.service';
// import { UserService } from 'src/user/user.service';
// import { JwtService } from '@nestjs/jwt';
// import { BadRequestException } from '@nestjs/common';
// import { randomBytes, scrypt } from 'crypto';
// import { promisify } from 'util';

// const scryptAsync = promisify(scrypt);

// describe('AuthService', () => {
//   let service: AuthService;
//   let userService: jest.Mocked<UserService>;
//   let jwtService: jest.Mocked<JwtService>;

//   beforeEach(async () => {
//     userService = {
//       findByEmail: jest.fn(),
//       create: jest.fn(),
//     } as unknown as jest.Mocked<UserService>;

//     jwtService = {
//       sign: jest.fn().mockReturnValue('mock-token'),
//     } as unknown as jest.Mocked<JwtService>;

//     const module: TestingModule = await Test.createTestingModule({
//       providers: [
//         AuthService,
//         { provide: UserService, useValue: userService },
//         { provide: JwtService, useValue: jwtService },
//       ],
//     }).compile();

//     service = module.get<AuthService>(AuthService);
//   });

//   describe('signup', () => {
//     it('should throw if email already exists', async () => {
//       userService.findByEmail.mockResolvedValue([{ id: 1 } as any]);
//       await expect(
//         service.signup({ email: 'test@test.com', password: '1234' }),
//       ).rejects.toThrow(BadRequestException);
//     });

//     it('should create a user and return token', async () => {
//       userService.findByEmail.mockResolvedValue([]);
//       userService.create.mockImplementation(async (data) => ({ id: 1, ...data } as any));

//       const result = await service.signup({ email: 'test@test.com', password: '1234' });

//       expect(result.user.email).toBe('test@test.com');
//       expect(result.token).toBe('mock-token');
//       expect(jwtService.sign).toHaveBeenCalledWith({ userId: 1 });
//     });
//   });

//   describe('signin', () => {
//     it('should throw if email does not exist', async () => {
//       userService.findByEmail.mockResolvedValue([]);
//       await expect(service.signin('test@test.com', '1234')).rejects.toThrow(BadRequestException);
//     });

//     it('should throw if password is invalid', async () => {
//       const salt = randomBytes(8).toString('hex');
//       const hash = (await scryptAsync('wrong', salt, 32)) as Buffer;
//       const storedPassword = salt + '.' + hash.toString('hex');

//       userService.findByEmail.mockResolvedValue([{ id: 1, password: storedPassword, email: 'test@test.com' } as any]);

//       await expect(service.signin('test@test.com', '1234')).rejects.toThrow(BadRequestException);
//     });

//     it('should return user and token for valid credentials', async () => {
//       const salt = randomBytes(8).toString('hex');
//       const hash = (await scryptAsync('1234', salt, 32)) as Buffer;
//       const storedPassword = salt + '.' + hash.toString('hex');

//       userService.findByEmail.mockResolvedValue([{ id: 1, email: 'test@test.com', password: storedPassword } as any]);

//       const result = await service.signin('test@test.com', '1234');

//       expect(result.user.email).toBe('test@test.com');
//       expect(result.token).toBe('mock-token');
//     });
//   });
// });
