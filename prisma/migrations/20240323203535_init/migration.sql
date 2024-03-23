-- CreateTable
CREATE TABLE "Contrato" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "address" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Contrato_address_key" ON "Contrato"("address");
