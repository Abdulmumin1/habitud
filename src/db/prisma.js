import { PrismaClient } from '@prisma/client/edge';
import { env } from '$env/dynamic/private'


const prisma = new PrismaClient({ datasourceUrl: env.DATABASE_URL }).$extends(withAccelerate());

export { prisma };
