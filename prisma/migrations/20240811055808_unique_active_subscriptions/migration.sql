/*
  Warnings:

  - You are about to drop the column `invoiceId` on the `PlanSubscription` table. All the data in the column will be lost.
  - You are about to drop the column `transactionId` on the `PlanSubscription` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,active]` on the table `PlanSubscription` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `PlanSubscription` DROP COLUMN `invoiceId`,
    DROP COLUMN `transactionId`,
    ADD COLUMN `externalId` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `PlanSubscription_userId_active_key` ON `PlanSubscription`(`userId`, `active`);
