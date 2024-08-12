/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Role` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id,title]` on the table `Role` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Case` ADD COLUMN `status` ENUM('UNREAD', 'READ') NOT NULL DEFAULT 'UNREAD';

-- AlterTable
ALTER TABLE `Registration` ADD COLUMN `status` ENUM('NEW', 'ACCEPTED', 'REJECTED') NOT NULL DEFAULT 'NEW';

-- AlterTable
ALTER TABLE `User` ADD COLUMN `emailVerifiedAt` DATETIME(3) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Role_title_key` ON `Role`(`title`);

-- CreateIndex
CREATE UNIQUE INDEX `Role_id_title_key` ON `Role`(`id`, `title`);
