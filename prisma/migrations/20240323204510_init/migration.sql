/*
  Warnings:

  - You are about to drop the `Contrato` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Contrato";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "contrato" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "address" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "contrato_address_key" ON "contrato"("address");
