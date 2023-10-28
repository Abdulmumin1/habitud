-- CreateTable
CREATE TABLE "Streaks" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "duration" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "streakArray" JSONB NOT NULL,
    "userId" TEXT NOT NULL,
    "reward" VARCHAR(355) NOT NULL,
    "color" VARCHAR(100) NOT NULL,

    CONSTRAINT "Streaks_pkey" PRIMARY KEY ("id")
);
