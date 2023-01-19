/*
  Warnings:

  - A unique constraint covering the columns `[cover]` on the table `magazines` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[file]` on the table `magazines` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `magazines_cover_key` ON `magazines`(`cover`);

-- CreateIndex
CREATE UNIQUE INDEX `magazines_file_key` ON `magazines`(`file`);
