import { PrismaClient } from '@prisma/client/edge';
import { env } from '$env/dynamic/private';
import { withAccelerate } from "@prisma/extension-accelerate";


const prisma = new PrismaClient({ datasourceUrl: env.DATABASE_URL }).$extends(withAccelerate());

export { prisma };
