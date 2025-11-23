import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_archive_event_timeframe" AS ENUM('past', 'future', 'all');
  CREATE TYPE "public"."enum__pages_v_blocks_archive_event_timeframe" AS ENUM('past', 'future', 'all');
  ALTER TABLE "pages_blocks_archive" ADD COLUMN "event_timeframe" "enum_pages_blocks_archive_event_timeframe" DEFAULT 'all';
  ALTER TABLE "_pages_v_blocks_archive" ADD COLUMN "event_timeframe" "enum__pages_v_blocks_archive_event_timeframe" DEFAULT 'all';`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_archive" DROP COLUMN "event_timeframe";
  ALTER TABLE "_pages_v_blocks_archive" DROP COLUMN "event_timeframe";
  DROP TYPE "public"."enum_pages_blocks_archive_event_timeframe";
  DROP TYPE "public"."enum__pages_v_blocks_archive_event_timeframe";`)
}
