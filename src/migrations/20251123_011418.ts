import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_archive" ALTER COLUMN "items_per_page" SET DEFAULT 6;
  ALTER TABLE "_pages_v_blocks_archive" ALTER COLUMN "items_per_page" SET DEFAULT 6;`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_archive" ALTER COLUMN "items_per_page" SET DEFAULT 3;
  ALTER TABLE "_pages_v_blocks_archive" ALTER COLUMN "items_per_page" SET DEFAULT 3;`)
}
