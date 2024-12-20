/*
  Warnings:

  - Added the required column `name` to the `kids` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_kids" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "testimonial" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_kids" ("id", "image", "path", "testimonial") SELECT "id", "image", "path", "testimonial" FROM "kids";
DROP TABLE "kids";
ALTER TABLE "new_kids" RENAME TO "kids";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
