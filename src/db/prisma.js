import { PrismaClient } from '@prisma/client/edge';
import { env } from '$env/dynamic/private';
import { withAccelerate } from "@prisma/extension-accelerate";

import { PrismaNeon } from '@prisma/adapter-neon'

const adapter = new PrismaNeon({ connectionString: env.DATABASE_URL })

const prisma = new PrismaClient({ adapter }).$extends(withAccelerate());

export { prisma };
