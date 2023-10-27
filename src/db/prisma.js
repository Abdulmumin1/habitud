import { PrismaClient } from '@prisma/client';

global.prisma;

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV == 'developement') {
	global.prisma = prisma;
}

export { prisma };
