import { PrismaClient } from '@prisma/client';
import {env} from '$env/dynamic/private'


global.prisma;


const prisma = global.prisma || new PrismaClient({datasourceUrl:env.DATABASE_URL});
if (process.env.NODE_ENV === 'development') {
	global.prisma = prisma;
}

export { prisma };
