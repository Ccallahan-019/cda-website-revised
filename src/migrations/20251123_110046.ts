import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_media_block" ADD COLUMN "include_caption" boolean DEFAULT true;
  ALTER TABLE "_pages_v_blocks_media_block" ADD COLUMN "include_caption" boolean DEFAULT true;
  ALTER TABLE "media" ADD COLUMN "caption" varchar;`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_media_block" DROP COLUMN "include_caption";
  ALTER TABLE "_pages_v_blocks_media_block" DROP COLUMN "include_caption";
  ALTER TABLE "media" DROP COLUMN "caption";`)
}
