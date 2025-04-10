/*
  Warnings:

  - You are about to drop the `tasks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "tasks";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "dishes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "ingredients" TEXT NOT NULL,
    "imageUrl" TEXT,
    "prepTime" TEXT NOT NULL,
    "updatedAdt" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "dishes_id_key" ON "dishes"("id");
