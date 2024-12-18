/*
  Warnings:

  - You are about to drop the column `cover` on the `requirement` table. All the data in the column will be lost.
  - Added the required column `path` to the `asset` table without a default value. This is not possible if the table is not empty.
  - Added the required column `path` to the `branches` table without a default value. This is not possible if the table is not empty.
  - Added the required column `path` to the `kids` table without a default value. This is not possible if the table is not empty.
  - Added the required column `path` to the `requirement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pdf` to the `requirement` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_asset" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "image" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "name" TEXT NOT NULL
);
INSERT INTO "new_asset" ("id", "image", "name") SELECT "id", "image", "name" FROM "asset";
DROP TABLE "asset";
ALTER TABLE "new_asset" RENAME TO "asset";
CREATE TABLE "new_branches" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "path" TEXT NOT NULL
);
INSERT INTO "new_branches" ("description", "id", "image", "name") SELECT "description", "id", "image", "name" FROM "branches";
DROP TABLE "branches";
ALTER TABLE "new_branches" RENAME TO "branches";
CREATE TABLE "new_kids" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "image" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "testimonial" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_kids" ("id", "image", "testimonial") SELECT "id", "image", "testimonial" FROM "kids";
DROP TABLE "kids";
ALTER TABLE "new_kids" RENAME TO "kids";
CREATE TABLE "new_requirement" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "apply" TEXT NOT NULL,
    "experience" TEXT,
    "interest1" TEXT NOT NULL,
    "interest2" TEXT NOT NULL,
    "pdf" TEXT NOT NULL,
    "path" TEXT NOT NULL
);
INSERT INTO "new_requirement" ("apply", "email", "experience", "id", "interest1", "interest2", "name", "phone") SELECT "apply", "email", "experience", "id", "interest1", "interest2", "name", "phone" FROM "requirement";
DROP TABLE "requirement";
ALTER TABLE "new_requirement" RENAME TO "requirement";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
