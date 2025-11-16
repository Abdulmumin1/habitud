import { PrismaClient } from '@prisma/client';
import { env } from '$env/dynamic/private';

import { PrismaNeon } from '@prisma/adapter-neon'

const adapter = new PrismaNeon({ connectionString: env.DATABASE_URL })

const prisma = new PrismaClient({ adapter })

export { prisma };
