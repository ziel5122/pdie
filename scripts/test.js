import dotenv from 'dotenv';
import jest from 'jest';

process.env.NODE_ENV = 'test';

dotenv.config();

jest.run(process.argv.slice(2));
