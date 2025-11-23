import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  ALTER TABLE "news_posts_rels" ADD COLUMN "media_id" integer;
  ALTER TABLE "dioceses_rels" ADD COLUMN "media_id" integer;
  ALTER TABLE "courts_rels" ADD COLUMN "media_id" integer;
  ALTER TABLE "_courts_v_rels" ADD COLUMN "media_id" integer;
  ALTER TABLE "header_rels" ADD COLUMN "media_id" integer;
  ALTER TABLE "footer_rels" ADD COLUMN "media_id" integer;
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  ALTER TABLE "news_posts_rels" ADD CONSTRAINT "news_posts_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "dioceses_rels" ADD CONSTRAINT "dioceses_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courts_rels" ADD CONSTRAINT "courts_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courts_v_rels" ADD CONSTRAINT "_courts_v_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "news_posts_rels_media_id_idx" ON "news_posts_rels" USING btree ("media_id");
  CREATE INDEX "dioceses_rels_media_id_idx" ON "dioceses_rels" USING btree ("media_id");
  CREATE INDEX "courts_rels_media_id_idx" ON "courts_rels" USING btree ("media_id");
  CREATE INDEX "_courts_v_rels_media_id_idx" ON "_courts_v_rels" USING btree ("media_id");
  CREATE INDEX "header_rels_media_id_idx" ON "header_rels" USING btree ("media_id");
  CREATE INDEX "footer_rels_media_id_idx" ON "footer_rels" USING btree ("media_id");
  ALTER TABLE "media" DROP COLUMN "caption";`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "users_sessions" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "users_sessions" CASCADE;
  ALTER TABLE "news_posts_rels" DROP CONSTRAINT "news_posts_rels_media_fk";
  
  ALTER TABLE "dioceses_rels" DROP CONSTRAINT "dioceses_rels_media_fk";
  
  ALTER TABLE "courts_rels" DROP CONSTRAINT "courts_rels_media_fk";
  
  ALTER TABLE "_courts_v_rels" DROP CONSTRAINT "_courts_v_rels_media_fk";
  
  ALTER TABLE "header_rels" DROP CONSTRAINT "header_rels_media_fk";
  
  ALTER TABLE "footer_rels" DROP CONSTRAINT "footer_rels_media_fk";
  
  DROP INDEX "news_posts_rels_media_id_idx";
  DROP INDEX "dioceses_rels_media_id_idx";
  DROP INDEX "courts_rels_media_id_idx";
  DROP INDEX "_courts_v_rels_media_id_idx";
  DROP INDEX "header_rels_media_id_idx";
  DROP INDEX "footer_rels_media_id_idx";
  ALTER TABLE "media" ADD COLUMN "caption" jsonb;
  ALTER TABLE "news_posts_rels" DROP COLUMN "media_id";
  ALTER TABLE "dioceses_rels" DROP COLUMN "media_id";
  ALTER TABLE "courts_rels" DROP COLUMN "media_id";
  ALTER TABLE "_courts_v_rels" DROP COLUMN "media_id";
  ALTER TABLE "header_rels" DROP COLUMN "media_id";
  ALTER TABLE "footer_rels" DROP COLUMN "media_id";`)
}
