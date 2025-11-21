import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_high_impact_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_high_impact_hero_links_link_color" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_pages_blocks_high_impact_hero_links_link_appearance" AS ENUM('default', 'outline', 'solid');
  CREATE TYPE "public"."enum_pages_blocks_media_right_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_media_right_hero_links_link_color" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_pages_blocks_media_right_hero_links_link_appearance" AS ENUM('default', 'outline', 'solid');
  CREATE TYPE "public"."enum_pages_blocks_media_right_hero_button_type" AS ENUM('scroll', 'links');
  CREATE TYPE "public"."enum_pages_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum_pages_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_content_columns_link_color" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_pages_blocks_content_columns_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_news_posts_selection_type" AS ENUM('auto', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_newsletters_selection_type" AS ENUM('auto', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_newsletters_auto_population_type" AS ENUM('local', 'state', 'national');
  CREATE TYPE "public"."enum_pages_blocks_slider_slides_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_slider_slides_links_link_color" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_pages_blocks_slider_slides_links_link_appearance" AS ENUM('default', 'outline', 'solid', 'soft');
  CREATE TYPE "public"."enum_pages_blocks_side_bar_alignment" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_pages_blocks_contact_cards_contact_position" AS ENUM('officer', 'chairman', 'deputy');
  CREATE TYPE "public"."enum_pages_blocks_contact_cards_officer_type" AS ENUM('national', 'state', 'local');
  CREATE TYPE "public"."enum_pages_blocks_court_listing_selection_type" AS ENUM('all', 'diocese', 'manual');
  CREATE TYPE "public"."enum_pages_blocks_diocese_listing_selection_type" AS ENUM('all', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_archive_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum_pages_blocks_archive_relation_to" AS ENUM('events', 'fundraisers', 'projects', 'charities');
  CREATE TYPE "public"."enum_pages_blocks_archive_type" AS ENUM('national', 'state', 'local');
  CREATE TYPE "public"."enum_pages_blocks_media_block_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_media_block_links_link_color" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_pages_blocks_media_block_links_link_appearance" AS ENUM('default', 'outline', 'solid', 'ghost', 'soft');
  CREATE TYPE "public"."enum_pages_blocks_media_block_content_type" AS ENUM('media', 'gallery', 'withText');
  CREATE TYPE "public"."enum_pages_blocks_media_block_media_alignment" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_pages_blocks_banner_style" AS ENUM('info', 'warning', 'error', 'success');
  CREATE TYPE "public"."enum_pages_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_cta_links_link_color" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_pages_blocks_cta_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_blocks_high_impact_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_high_impact_hero_links_link_color" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum__pages_v_blocks_high_impact_hero_links_link_appearance" AS ENUM('default', 'outline', 'solid');
  CREATE TYPE "public"."enum__pages_v_blocks_media_right_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_media_right_hero_links_link_color" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum__pages_v_blocks_media_right_hero_links_link_appearance" AS ENUM('default', 'outline', 'solid');
  CREATE TYPE "public"."enum__pages_v_blocks_media_right_hero_button_type" AS ENUM('scroll', 'links');
  CREATE TYPE "public"."enum__pages_v_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum__pages_v_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_content_columns_link_color" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum__pages_v_blocks_content_columns_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_news_posts_selection_type" AS ENUM('auto', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_newsletters_selection_type" AS ENUM('auto', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_newsletters_auto_population_type" AS ENUM('local', 'state', 'national');
  CREATE TYPE "public"."enum__pages_v_blocks_slider_slides_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_slider_slides_links_link_color" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum__pages_v_blocks_slider_slides_links_link_appearance" AS ENUM('default', 'outline', 'solid', 'soft');
  CREATE TYPE "public"."enum__pages_v_blocks_side_bar_alignment" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_contact_cards_contact_position" AS ENUM('officer', 'chairman', 'deputy');
  CREATE TYPE "public"."enum__pages_v_blocks_contact_cards_officer_type" AS ENUM('national', 'state', 'local');
  CREATE TYPE "public"."enum__pages_v_blocks_court_listing_selection_type" AS ENUM('all', 'diocese', 'manual');
  CREATE TYPE "public"."enum__pages_v_blocks_diocese_listing_selection_type" AS ENUM('all', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_archive_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum__pages_v_blocks_archive_relation_to" AS ENUM('events', 'fundraisers', 'projects', 'charities');
  CREATE TYPE "public"."enum__pages_v_blocks_archive_type" AS ENUM('national', 'state', 'local');
  CREATE TYPE "public"."enum__pages_v_blocks_media_block_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_media_block_links_link_color" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum__pages_v_blocks_media_block_links_link_appearance" AS ENUM('default', 'outline', 'solid', 'ghost', 'soft');
  CREATE TYPE "public"."enum__pages_v_blocks_media_block_content_type" AS ENUM('media', 'gallery', 'withText');
  CREATE TYPE "public"."enum__pages_v_blocks_media_block_media_alignment" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_banner_style" AS ENUM('info', 'warning', 'error', 'success');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_links_link_color" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_news_posts_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_news_posts_links_link_color" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_newsletters_type" AS ENUM('local', 'state', 'national');
  CREATE TYPE "public"."enum_contacts_positions" AS ENUM('officer', 'chairman', 'deputy');
  CREATE TYPE "public"."enum_contacts_officer_type" AS ENUM('national', 'state', 'local');
  CREATE TYPE "public"."enum_dioceses_website_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_dioceses_website_color" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_courts_website_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_courts_website_color" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_courts_website_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_courts_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__courts_v_version_website_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__courts_v_version_website_color" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum__courts_v_version_website_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__courts_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_events_type" AS ENUM('national', 'state', 'local');
  CREATE TYPE "public"."enum_events_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__events_v_version_type" AS ENUM('national', 'state', 'local');
  CREATE TYPE "public"."enum__events_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_fundraisers_type" AS ENUM('national', 'state', 'local');
  CREATE TYPE "public"."enum_fundraisers_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__fundraisers_v_version_type" AS ENUM('national', 'state', 'local');
  CREATE TYPE "public"."enum__fundraisers_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_projects_type" AS ENUM('national', 'state', 'local');
  CREATE TYPE "public"."enum_projects_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__projects_v_version_type" AS ENUM('national', 'state', 'local');
  CREATE TYPE "public"."enum__projects_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_charities_type" AS ENUM('national', 'state', 'local');
  CREATE TYPE "public"."enum_charities_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__charities_v_version_type" AS ENUM('national', 'state', 'local');
  CREATE TYPE "public"."enum__charities_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_redirects_to_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_forms_blocks_text_type" AS ENUM('text', 'password', 'tel');
  CREATE TYPE "public"."enum_forms_confirmation_type" AS ENUM('message', 'redirect');
  CREATE TYPE "public"."enum_payload_jobs_log_task_slug" AS ENUM('inline', 'schedulePublish');
  CREATE TYPE "public"."enum_payload_jobs_log_state" AS ENUM('failed', 'succeeded');
  CREATE TYPE "public"."enum_payload_jobs_task_slug" AS ENUM('inline', 'schedulePublish');
  CREATE TYPE "public"."enum_header_nav_items_sub_nav_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_nav_items_sub_nav_links_link_color" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_header_nav_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_nav_items_link_color" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_header_nav_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_nav_buttons_link_color" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_header_nav_buttons_link_appearance" AS ENUM('default', 'solid', 'soft', 'outline');
  CREATE TYPE "public"."enum_footer_nav_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_nav_items_link_color" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_footer_social_media_platform" AS ENUM('linkedin', 'facebook', 'instagram', 'twitter', 'youtube');
  CREATE TABLE "pages_blocks_high_impact_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_high_impact_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_color" "enum_pages_blocks_high_impact_hero_links_link_color" DEFAULT 'primary',
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_high_impact_hero_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "pages_blocks_high_impact_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"logo_id" integer,
  	"media_id" integer,
  	"heading" varchar,
  	"sub_heading" varchar,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_low_impact_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_media_right_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_media_right_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_color" "enum_pages_blocks_media_right_hero_links_link_color" DEFAULT 'primary',
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_media_right_hero_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "pages_blocks_media_right_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"rich_text" jsonb,
  	"button_type" "enum_pages_blocks_media_right_hero_button_type" DEFAULT 'scroll',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_content_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"size" "enum_pages_blocks_content_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb,
  	"enable_link" boolean,
  	"link_type" "enum_pages_blocks_content_columns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_color" "enum_pages_blocks_content_columns_link_color" DEFAULT 'primary',
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_content_columns_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "pages_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_news_posts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"intro_content" jsonb,
  	"selection_type" "enum_pages_blocks_news_posts_selection_type" DEFAULT 'auto',
  	"limit" numeric DEFAULT 10,
  	"pagination" boolean DEFAULT true,
  	"rows_per_page" numeric DEFAULT 5,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_newsletters" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"intro_content" jsonb,
  	"selection_type" "enum_pages_blocks_newsletters_selection_type" DEFAULT 'auto',
  	"auto_population_type" "enum_pages_blocks_newsletters_auto_population_type" DEFAULT 'state',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_slider_slides_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_slider_slides_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_color" "enum_pages_blocks_slider_slides_links_link_color" DEFAULT 'primary',
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_slider_slides_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "pages_blocks_slider_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"rich_text" jsonb
  );
  
  CREATE TABLE "pages_blocks_slider" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_stats_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" numeric,
  	"postfix" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "pages_blocks_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_side_bar_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"rich_text" jsonb
  );
  
  CREATE TABLE "pages_blocks_side_bar" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"alignment" "enum_pages_blocks_side_bar_alignment" DEFAULT 'right',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_calendar_months_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item" varchar
  );
  
  CREATE TABLE "pages_blocks_calendar_months" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar
  );
  
  CREATE TABLE "pages_blocks_calendar" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"intro" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_contact_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"auto_populate" boolean DEFAULT true,
  	"contact_position" "enum_pages_blocks_contact_cards_contact_position" DEFAULT 'officer',
  	"diocese_id" integer,
  	"officer_type" "enum_pages_blocks_contact_cards_officer_type" DEFAULT 'state',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_tabs_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar
  );
  
  CREATE TABLE "pages_blocks_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_court_listing" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"selection_type" "enum_pages_blocks_court_listing_selection_type" DEFAULT 'all',
  	"diocese_id" integer,
  	"rows_per_page" numeric DEFAULT 10,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_diocese_listing" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"selection_type" "enum_pages_blocks_diocese_listing_selection_type" DEFAULT 'all',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_archive" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"intro_content" jsonb,
  	"populate_by" "enum_pages_blocks_archive_populate_by" DEFAULT 'collection',
  	"relation_to" "enum_pages_blocks_archive_relation_to" DEFAULT 'events',
  	"type" "enum_pages_blocks_archive_type" DEFAULT 'state',
  	"limit" numeric DEFAULT 10,
  	"pagination" boolean DEFAULT true,
  	"items_per_page" numeric DEFAULT 3,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_media_block_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_media_block_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_color" "enum_pages_blocks_media_block_links_link_color" DEFAULT 'primary',
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_media_block_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "pages_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content_type" "enum_pages_blocks_media_block_content_type" DEFAULT 'media',
  	"media_id" integer,
  	"media_alignment" "enum_pages_blocks_media_block_media_alignment" DEFAULT 'left',
  	"content" jsonb,
  	"auto_play" boolean DEFAULT true,
  	"looping" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"style" "enum_pages_blocks_banner_style" DEFAULT 'info',
  	"content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_color" "enum_pages_blocks_cta_links_link_color" DEFAULT 'primary',
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_cta_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "pages_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"form_id" integer,
  	"enable_intro" boolean,
  	"intro_content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"doc_id" integer,
  	"url" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"parent_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_pages_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "pages_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"charities_id" integer,
  	"events_id" integer,
  	"fundraisers_id" integer,
  	"projects_id" integer,
  	"courts_id" integer,
  	"news_posts_id" integer,
  	"newsletters_id" integer,
  	"contacts_id" integer,
  	"dioceses_id" integer,
  	"media_id" integer
  );
  
  CREATE TABLE "_pages_v_blocks_high_impact_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_high_impact_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_color" "enum__pages_v_blocks_high_impact_hero_links_link_color" DEFAULT 'primary',
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_high_impact_hero_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_high_impact_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"logo_id" integer,
  	"media_id" integer,
  	"heading" varchar,
  	"sub_heading" varchar,
  	"rich_text" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_low_impact_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_media_right_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_media_right_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_color" "enum__pages_v_blocks_media_right_hero_links_link_color" DEFAULT 'primary',
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_media_right_hero_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_media_right_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"rich_text" jsonb,
  	"button_type" "enum__pages_v_blocks_media_right_hero_button_type" DEFAULT 'scroll',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_content_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"size" "enum__pages_v_blocks_content_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb,
  	"enable_link" boolean,
  	"link_type" "enum__pages_v_blocks_content_columns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_color" "enum__pages_v_blocks_content_columns_link_color" DEFAULT 'primary',
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_content_columns_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_news_posts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"intro_content" jsonb,
  	"selection_type" "enum__pages_v_blocks_news_posts_selection_type" DEFAULT 'auto',
  	"limit" numeric DEFAULT 10,
  	"pagination" boolean DEFAULT true,
  	"rows_per_page" numeric DEFAULT 5,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_newsletters" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"intro_content" jsonb,
  	"selection_type" "enum__pages_v_blocks_newsletters_selection_type" DEFAULT 'auto',
  	"auto_population_type" "enum__pages_v_blocks_newsletters_auto_population_type" DEFAULT 'state',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_slider_slides_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_slider_slides_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_color" "enum__pages_v_blocks_slider_slides_links_link_color" DEFAULT 'primary',
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_slider_slides_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_slider_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"rich_text" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_slider" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_stats_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" numeric,
  	"postfix" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_side_bar_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"rich_text" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_side_bar" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"alignment" "enum__pages_v_blocks_side_bar_alignment" DEFAULT 'right',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_calendar_months_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"item" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_calendar_months" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_calendar" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"intro" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_contact_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"auto_populate" boolean DEFAULT true,
  	"contact_position" "enum__pages_v_blocks_contact_cards_contact_position" DEFAULT 'officer',
  	"diocese_id" integer,
  	"officer_type" "enum__pages_v_blocks_contact_cards_officer_type" DEFAULT 'state',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_tabs_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_court_listing" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"selection_type" "enum__pages_v_blocks_court_listing_selection_type" DEFAULT 'all',
  	"diocese_id" integer,
  	"rows_per_page" numeric DEFAULT 10,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_diocese_listing" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"selection_type" "enum__pages_v_blocks_diocese_listing_selection_type" DEFAULT 'all',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_archive" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"intro_content" jsonb,
  	"populate_by" "enum__pages_v_blocks_archive_populate_by" DEFAULT 'collection',
  	"relation_to" "enum__pages_v_blocks_archive_relation_to" DEFAULT 'events',
  	"type" "enum__pages_v_blocks_archive_type" DEFAULT 'state',
  	"limit" numeric DEFAULT 10,
  	"pagination" boolean DEFAULT true,
  	"items_per_page" numeric DEFAULT 3,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_media_block_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_media_block_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_color" "enum__pages_v_blocks_media_block_links_link_color" DEFAULT 'primary',
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_media_block_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content_type" "enum__pages_v_blocks_media_block_content_type" DEFAULT 'media',
  	"media_id" integer,
  	"media_alignment" "enum__pages_v_blocks_media_block_media_alignment" DEFAULT 'left',
  	"content" jsonb,
  	"auto_play" boolean DEFAULT true,
  	"looping" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"style" "enum__pages_v_blocks_banner_style" DEFAULT 'info',
  	"content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_color" "enum__pages_v_blocks_cta_links_link_color" DEFAULT 'primary',
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_cta_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"form_id" integer,
  	"enable_intro" boolean,
  	"intro_content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_version_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"doc_id" integer,
  	"url" varchar,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_parent_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__pages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_pages_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"charities_id" integer,
  	"events_id" integer,
  	"fundraisers_id" integer,
  	"projects_id" integer,
  	"courts_id" integer,
  	"news_posts_id" integer,
  	"newsletters_id" integer,
  	"contacts_id" integer,
  	"dioceses_id" integer,
  	"media_id" integer
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar,
  	"caption" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_square_url" varchar,
  	"sizes_square_width" numeric,
  	"sizes_square_height" numeric,
  	"sizes_square_mime_type" varchar,
  	"sizes_square_filesize" numeric,
  	"sizes_square_filename" varchar,
  	"sizes_small_url" varchar,
  	"sizes_small_width" numeric,
  	"sizes_small_height" numeric,
  	"sizes_small_mime_type" varchar,
  	"sizes_small_filesize" numeric,
  	"sizes_small_filename" varchar,
  	"sizes_medium_url" varchar,
  	"sizes_medium_width" numeric,
  	"sizes_medium_height" numeric,
  	"sizes_medium_mime_type" varchar,
  	"sizes_medium_filesize" numeric,
  	"sizes_medium_filename" varchar,
  	"sizes_large_url" varchar,
  	"sizes_large_width" numeric,
  	"sizes_large_height" numeric,
  	"sizes_large_mime_type" varchar,
  	"sizes_large_filesize" numeric,
  	"sizes_large_filename" varchar,
  	"sizes_xlarge_url" varchar,
  	"sizes_xlarge_width" numeric,
  	"sizes_xlarge_height" numeric,
  	"sizes_xlarge_mime_type" varchar,
  	"sizes_xlarge_filesize" numeric,
  	"sizes_xlarge_filename" varchar,
  	"sizes_og_url" varchar,
  	"sizes_og_width" numeric,
  	"sizes_og_height" numeric,
  	"sizes_og_mime_type" varchar,
  	"sizes_og_filesize" numeric,
  	"sizes_og_filename" varchar
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "news_posts_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_news_posts_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_color" "enum_news_posts_links_link_color" DEFAULT 'primary' NOT NULL,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  CREATE TABLE "news_posts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "news_posts_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"charities_id" integer,
  	"events_id" integer,
  	"fundraisers_id" integer,
  	"projects_id" integer,
  	"courts_id" integer
  );
  
  CREATE TABLE "newsletters" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"year_of_release" numeric NOT NULL,
  	"type" "enum_newsletters_type" DEFAULT 'state' NOT NULL,
  	"associated_court_id" integer,
  	"reissue_date" timestamp(3) with time zone,
  	"display_title" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE "contacts_roles" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"role" varchar
  );
  
  CREATE TABLE "contacts_positions" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_contacts_positions",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "contacts_officer_type" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_contacts_officer_type",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "contacts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"email" varchar,
  	"image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "dioceses" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"website_type" "enum_dioceses_website_type" DEFAULT 'reference',
  	"website_new_tab" boolean,
  	"website_color" "enum_dioceses_website_color" DEFAULT 'primary' NOT NULL,
  	"website_url" varchar,
  	"location_address" varchar,
  	"location_city" varchar,
  	"location_state" varchar,
  	"location_zipcode" varchar,
  	"phone_number" varchar,
  	"info" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "dioceses_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"charities_id" integer,
  	"events_id" integer,
  	"fundraisers_id" integer,
  	"projects_id" integer,
  	"courts_id" integer,
  	"contacts_id" integer
  );
  
  CREATE TABLE "courts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"diocese_id" integer,
  	"number" numeric,
  	"instituted" timestamp(3) with time zone,
  	"include_website" boolean,
  	"website_type" "enum_courts_website_type" DEFAULT 'reference',
  	"website_new_tab" boolean,
  	"website_color" "enum_courts_website_color" DEFAULT 'primary',
  	"website_url" varchar,
  	"website_label" varchar,
  	"website_appearance" "enum_courts_website_appearance" DEFAULT 'default',
  	"location_address" varchar,
  	"location_city" varchar,
  	"location_state" varchar,
  	"location_zipcode" varchar,
  	"phone_number" varchar,
  	"contact_email" varchar,
  	"officers_regent_id" integer,
  	"officers_vice_regent_id" integer,
  	"officers_recording_secretary_id" integer,
  	"officers_financial_secretary_id" integer,
  	"officers_treasurer_id" integer,
  	"content" jsonb,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_courts_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "courts_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"charities_id" integer,
  	"events_id" integer,
  	"fundraisers_id" integer,
  	"projects_id" integer,
  	"courts_id" integer,
  	"newsletters_id" integer
  );
  
  CREATE TABLE "_courts_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_name" varchar,
  	"version_diocese_id" integer,
  	"version_number" numeric,
  	"version_instituted" timestamp(3) with time zone,
  	"version_include_website" boolean,
  	"version_website_type" "enum__courts_v_version_website_type" DEFAULT 'reference',
  	"version_website_new_tab" boolean,
  	"version_website_color" "enum__courts_v_version_website_color" DEFAULT 'primary',
  	"version_website_url" varchar,
  	"version_website_label" varchar,
  	"version_website_appearance" "enum__courts_v_version_website_appearance" DEFAULT 'default',
  	"version_location_address" varchar,
  	"version_location_city" varchar,
  	"version_location_state" varchar,
  	"version_location_zipcode" varchar,
  	"version_phone_number" varchar,
  	"version_contact_email" varchar,
  	"version_officers_regent_id" integer,
  	"version_officers_vice_regent_id" integer,
  	"version_officers_recording_secretary_id" integer,
  	"version_officers_financial_secretary_id" integer,
  	"version_officers_treasurer_id" integer,
  	"version_content" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__courts_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_courts_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"charities_id" integer,
  	"events_id" integer,
  	"fundraisers_id" integer,
  	"projects_id" integer,
  	"courts_id" integer,
  	"newsletters_id" integer
  );
  
  CREATE TABLE "events" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"dates_start_date" timestamp(3) with time zone,
  	"dates_end_date" timestamp(3) with time zone,
  	"location_address" varchar,
  	"location_city" varchar,
  	"location_state" varchar,
  	"location_zipcode" varchar,
  	"type" "enum_events_type",
  	"associated_court_id" integer,
  	"content" jsonb,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_events_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "events_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"events_id" integer
  );
  
  CREATE TABLE "_events_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_name" varchar,
  	"version_dates_start_date" timestamp(3) with time zone,
  	"version_dates_end_date" timestamp(3) with time zone,
  	"version_location_address" varchar,
  	"version_location_city" varchar,
  	"version_location_state" varchar,
  	"version_location_zipcode" varchar,
  	"version_type" "enum__events_v_version_type",
  	"version_associated_court_id" integer,
  	"version_content" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__events_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_events_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"events_id" integer
  );
  
  CREATE TABLE "fundraisers" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"type" "enum_fundraisers_type",
  	"associated_court_id" integer,
  	"content" jsonb,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_fundraisers_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "fundraisers_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"fundraisers_id" integer
  );
  
  CREATE TABLE "_fundraisers_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_name" varchar,
  	"version_type" "enum__fundraisers_v_version_type",
  	"version_associated_court_id" integer,
  	"version_content" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__fundraisers_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_fundraisers_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"fundraisers_id" integer
  );
  
  CREATE TABLE "projects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"type" "enum_projects_type",
  	"associated_court_id" integer,
  	"content" jsonb,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_projects_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "projects_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"projects_id" integer
  );
  
  CREATE TABLE "_projects_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_name" varchar,
  	"version_type" "enum__projects_v_version_type",
  	"version_associated_court_id" integer,
  	"version_content" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__projects_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_projects_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"projects_id" integer
  );
  
  CREATE TABLE "charities" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"type" "enum_charities_type",
  	"associated_court_id" integer,
  	"content" jsonb,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_charities_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "charities_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"charities_id" integer
  );
  
  CREATE TABLE "_charities_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_name" varchar,
  	"version_type" "enum__charities_v_version_type",
  	"version_associated_court_id" integer,
  	"version_content" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__charities_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_charities_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"charities_id" integer
  );
  
  CREATE TABLE "redirects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"from" varchar NOT NULL,
  	"to_type" "enum_redirects_to_type" DEFAULT 'reference',
  	"to_url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "redirects_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer
  );
  
  CREATE TABLE "forms_blocks_checkbox" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"default_value" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_country" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_email" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"placeholder" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_message" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"message" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_number" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" numeric,
  	"required" boolean,
  	"min" numeric DEFAULT 0 NOT NULL,
  	"max" numeric DEFAULT 100 NOT NULL,
  	"placeholder" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_select_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "forms_blocks_select" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"placeholder" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_state" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"required" boolean,
  	"type" "enum_forms_blocks_text_type" DEFAULT 'text' NOT NULL,
  	"placeholder" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_textarea" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_date" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"default_value" timestamp(3) with time zone,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_emails" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"email_to" varchar,
  	"cc" varchar,
  	"bcc" varchar,
  	"reply_to" varchar,
  	"email_from" varchar,
  	"subject" varchar DEFAULT 'You''ve received a new message.' NOT NULL,
  	"message" jsonb
  );
  
  CREATE TABLE "forms" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"submit_button_label" varchar,
  	"confirmation_type" "enum_forms_confirmation_type" DEFAULT 'message',
  	"confirmation_message" jsonb,
  	"redirect_url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "form_submissions_submission_data" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"field" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "form_submissions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"form_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_jobs_log" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"executed_at" timestamp(3) with time zone NOT NULL,
  	"completed_at" timestamp(3) with time zone NOT NULL,
  	"task_slug" "enum_payload_jobs_log_task_slug" NOT NULL,
  	"task_i_d" varchar NOT NULL,
  	"input" jsonb,
  	"output" jsonb,
  	"state" "enum_payload_jobs_log_state" NOT NULL,
  	"error" jsonb
  );
  
  CREATE TABLE "payload_jobs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"input" jsonb,
  	"completed_at" timestamp(3) with time zone,
  	"total_tried" numeric DEFAULT 0,
  	"has_error" boolean DEFAULT false,
  	"error" jsonb,
  	"task_slug" "enum_payload_jobs_task_slug",
  	"queue" varchar DEFAULT 'default',
  	"wait_until" timestamp(3) with time zone,
  	"processing" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"media_id" integer,
  	"users_id" integer,
  	"news_posts_id" integer,
  	"newsletters_id" integer,
  	"contacts_id" integer,
  	"dioceses_id" integer,
  	"courts_id" integer,
  	"events_id" integer,
  	"fundraisers_id" integer,
  	"projects_id" integer,
  	"charities_id" integer,
  	"redirects_id" integer,
  	"forms_id" integer,
  	"form_submissions_id" integer,
  	"payload_jobs_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "header_nav_items_sub_nav_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_header_nav_items_sub_nav_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_color" "enum_header_nav_items_sub_nav_links_link_color" DEFAULT 'primary' NOT NULL,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  CREATE TABLE "header_nav_items_sub_nav" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "header_nav_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_header_nav_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_color" "enum_header_nav_items_link_color" DEFAULT 'primary' NOT NULL,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL,
  	"description" varchar
  );
  
  CREATE TABLE "header_nav_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_header_nav_buttons_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_color" "enum_header_nav_buttons_link_color" DEFAULT 'primary' NOT NULL,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL,
  	"link_appearance" "enum_header_nav_buttons_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "header" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"logo_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "header_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"charities_id" integer,
  	"events_id" integer,
  	"fundraisers_id" integer,
  	"projects_id" integer,
  	"courts_id" integer
  );
  
  CREATE TABLE "footer_nav_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_footer_nav_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_color" "enum_footer_nav_items_link_color" DEFAULT 'primary' NOT NULL,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  CREATE TABLE "footer_social_media" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "enum_footer_social_media_platform" NOT NULL,
  	"link" varchar NOT NULL
  );
  
  CREATE TABLE "footer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"nav_heading" varchar,
  	"logo_id" integer,
  	"rich_text" jsonb,
  	"copyright_text" varchar DEFAULT '© Copyright 2025, All Rights Reserved' NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "footer_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"charities_id" integer,
  	"events_id" integer,
  	"fundraisers_id" integer,
  	"projects_id" integer,
  	"courts_id" integer
  );
  
  ALTER TABLE "pages_blocks_high_impact_hero_links" ADD CONSTRAINT "pages_blocks_high_impact_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_high_impact_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_high_impact_hero" ADD CONSTRAINT "pages_blocks_high_impact_hero_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_high_impact_hero" ADD CONSTRAINT "pages_blocks_high_impact_hero_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_high_impact_hero" ADD CONSTRAINT "pages_blocks_high_impact_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_low_impact_hero" ADD CONSTRAINT "pages_blocks_low_impact_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_right_hero_links" ADD CONSTRAINT "pages_blocks_media_right_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_media_right_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_right_hero" ADD CONSTRAINT "pages_blocks_media_right_hero_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_right_hero" ADD CONSTRAINT "pages_blocks_media_right_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_content_columns" ADD CONSTRAINT "pages_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_content" ADD CONSTRAINT "pages_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_news_posts" ADD CONSTRAINT "pages_blocks_news_posts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_newsletters" ADD CONSTRAINT "pages_blocks_newsletters_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_slider_slides_links" ADD CONSTRAINT "pages_blocks_slider_slides_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_slider_slides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_slider_slides" ADD CONSTRAINT "pages_blocks_slider_slides_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_slider_slides" ADD CONSTRAINT "pages_blocks_slider_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_slider"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_slider" ADD CONSTRAINT "pages_blocks_slider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_stats_stats" ADD CONSTRAINT "pages_blocks_stats_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_stats" ADD CONSTRAINT "pages_blocks_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_side_bar_sections" ADD CONSTRAINT "pages_blocks_side_bar_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_side_bar"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_side_bar" ADD CONSTRAINT "pages_blocks_side_bar_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_calendar_months_items" ADD CONSTRAINT "pages_blocks_calendar_months_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_calendar_months"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_calendar_months" ADD CONSTRAINT "pages_blocks_calendar_months_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_calendar"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_calendar" ADD CONSTRAINT "pages_blocks_calendar_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_contact_cards" ADD CONSTRAINT "pages_blocks_contact_cards_diocese_id_dioceses_id_fk" FOREIGN KEY ("diocese_id") REFERENCES "public"."dioceses"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_contact_cards" ADD CONSTRAINT "pages_blocks_contact_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_tabs_tabs" ADD CONSTRAINT "pages_blocks_tabs_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_tabs" ADD CONSTRAINT "pages_blocks_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_court_listing" ADD CONSTRAINT "pages_blocks_court_listing_diocese_id_dioceses_id_fk" FOREIGN KEY ("diocese_id") REFERENCES "public"."dioceses"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_court_listing" ADD CONSTRAINT "pages_blocks_court_listing_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_diocese_listing" ADD CONSTRAINT "pages_blocks_diocese_listing_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_archive" ADD CONSTRAINT "pages_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_block_links" ADD CONSTRAINT "pages_blocks_media_block_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_media_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_block" ADD CONSTRAINT "pages_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_block" ADD CONSTRAINT "pages_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_banner" ADD CONSTRAINT "pages_blocks_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta_links" ADD CONSTRAINT "pages_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta" ADD CONSTRAINT "pages_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_form_block" ADD CONSTRAINT "pages_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_form_block" ADD CONSTRAINT "pages_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_breadcrumbs" ADD CONSTRAINT "pages_breadcrumbs_doc_id_pages_id_fk" FOREIGN KEY ("doc_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_breadcrumbs" ADD CONSTRAINT "pages_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_charities_fk" FOREIGN KEY ("charities_id") REFERENCES "public"."charities"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_fundraisers_fk" FOREIGN KEY ("fundraisers_id") REFERENCES "public"."fundraisers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_courts_fk" FOREIGN KEY ("courts_id") REFERENCES "public"."courts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_news_posts_fk" FOREIGN KEY ("news_posts_id") REFERENCES "public"."news_posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_newsletters_fk" FOREIGN KEY ("newsletters_id") REFERENCES "public"."newsletters"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_contacts_fk" FOREIGN KEY ("contacts_id") REFERENCES "public"."contacts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_dioceses_fk" FOREIGN KEY ("dioceses_id") REFERENCES "public"."dioceses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_high_impact_hero_links" ADD CONSTRAINT "_pages_v_blocks_high_impact_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_high_impact_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_high_impact_hero" ADD CONSTRAINT "_pages_v_blocks_high_impact_hero_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_high_impact_hero" ADD CONSTRAINT "_pages_v_blocks_high_impact_hero_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_high_impact_hero" ADD CONSTRAINT "_pages_v_blocks_high_impact_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_low_impact_hero" ADD CONSTRAINT "_pages_v_blocks_low_impact_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_right_hero_links" ADD CONSTRAINT "_pages_v_blocks_media_right_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_media_right_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_right_hero" ADD CONSTRAINT "_pages_v_blocks_media_right_hero_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_right_hero" ADD CONSTRAINT "_pages_v_blocks_media_right_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content_columns" ADD CONSTRAINT "_pages_v_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content" ADD CONSTRAINT "_pages_v_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_news_posts" ADD CONSTRAINT "_pages_v_blocks_news_posts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_newsletters" ADD CONSTRAINT "_pages_v_blocks_newsletters_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_slider_slides_links" ADD CONSTRAINT "_pages_v_blocks_slider_slides_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_slider_slides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_slider_slides" ADD CONSTRAINT "_pages_v_blocks_slider_slides_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_slider_slides" ADD CONSTRAINT "_pages_v_blocks_slider_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_slider"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_slider" ADD CONSTRAINT "_pages_v_blocks_slider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_stats_stats" ADD CONSTRAINT "_pages_v_blocks_stats_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_stats" ADD CONSTRAINT "_pages_v_blocks_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_side_bar_sections" ADD CONSTRAINT "_pages_v_blocks_side_bar_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_side_bar"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_side_bar" ADD CONSTRAINT "_pages_v_blocks_side_bar_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_calendar_months_items" ADD CONSTRAINT "_pages_v_blocks_calendar_months_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_calendar_months"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_calendar_months" ADD CONSTRAINT "_pages_v_blocks_calendar_months_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_calendar"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_calendar" ADD CONSTRAINT "_pages_v_blocks_calendar_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_contact_cards" ADD CONSTRAINT "_pages_v_blocks_contact_cards_diocese_id_dioceses_id_fk" FOREIGN KEY ("diocese_id") REFERENCES "public"."dioceses"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_contact_cards" ADD CONSTRAINT "_pages_v_blocks_contact_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_tabs_tabs" ADD CONSTRAINT "_pages_v_blocks_tabs_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_tabs" ADD CONSTRAINT "_pages_v_blocks_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_court_listing" ADD CONSTRAINT "_pages_v_blocks_court_listing_diocese_id_dioceses_id_fk" FOREIGN KEY ("diocese_id") REFERENCES "public"."dioceses"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_court_listing" ADD CONSTRAINT "_pages_v_blocks_court_listing_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_diocese_listing" ADD CONSTRAINT "_pages_v_blocks_diocese_listing_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_archive" ADD CONSTRAINT "_pages_v_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_block_links" ADD CONSTRAINT "_pages_v_blocks_media_block_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_media_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_block" ADD CONSTRAINT "_pages_v_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_block" ADD CONSTRAINT "_pages_v_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner" ADD CONSTRAINT "_pages_v_blocks_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta_links" ADD CONSTRAINT "_pages_v_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta" ADD CONSTRAINT "_pages_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_form_block" ADD CONSTRAINT "_pages_v_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_form_block" ADD CONSTRAINT "_pages_v_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_breadcrumbs" ADD CONSTRAINT "_pages_v_version_breadcrumbs_doc_id_pages_id_fk" FOREIGN KEY ("doc_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_version_breadcrumbs" ADD CONSTRAINT "_pages_v_version_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_parent_id_pages_id_fk" FOREIGN KEY ("version_parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_charities_fk" FOREIGN KEY ("charities_id") REFERENCES "public"."charities"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_fundraisers_fk" FOREIGN KEY ("fundraisers_id") REFERENCES "public"."fundraisers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_courts_fk" FOREIGN KEY ("courts_id") REFERENCES "public"."courts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_news_posts_fk" FOREIGN KEY ("news_posts_id") REFERENCES "public"."news_posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_newsletters_fk" FOREIGN KEY ("newsletters_id") REFERENCES "public"."newsletters"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_contacts_fk" FOREIGN KEY ("contacts_id") REFERENCES "public"."contacts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_dioceses_fk" FOREIGN KEY ("dioceses_id") REFERENCES "public"."dioceses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "news_posts_links" ADD CONSTRAINT "news_posts_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."news_posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "news_posts_rels" ADD CONSTRAINT "news_posts_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."news_posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "news_posts_rels" ADD CONSTRAINT "news_posts_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "news_posts_rels" ADD CONSTRAINT "news_posts_rels_charities_fk" FOREIGN KEY ("charities_id") REFERENCES "public"."charities"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "news_posts_rels" ADD CONSTRAINT "news_posts_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "news_posts_rels" ADD CONSTRAINT "news_posts_rels_fundraisers_fk" FOREIGN KEY ("fundraisers_id") REFERENCES "public"."fundraisers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "news_posts_rels" ADD CONSTRAINT "news_posts_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "news_posts_rels" ADD CONSTRAINT "news_posts_rels_courts_fk" FOREIGN KEY ("courts_id") REFERENCES "public"."courts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "newsletters" ADD CONSTRAINT "newsletters_associated_court_id_courts_id_fk" FOREIGN KEY ("associated_court_id") REFERENCES "public"."courts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "contacts_roles" ADD CONSTRAINT "contacts_roles_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."contacts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "contacts_positions" ADD CONSTRAINT "contacts_positions_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."contacts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "contacts_officer_type" ADD CONSTRAINT "contacts_officer_type_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."contacts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "contacts" ADD CONSTRAINT "contacts_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "dioceses_rels" ADD CONSTRAINT "dioceses_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."dioceses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "dioceses_rels" ADD CONSTRAINT "dioceses_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "dioceses_rels" ADD CONSTRAINT "dioceses_rels_charities_fk" FOREIGN KEY ("charities_id") REFERENCES "public"."charities"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "dioceses_rels" ADD CONSTRAINT "dioceses_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "dioceses_rels" ADD CONSTRAINT "dioceses_rels_fundraisers_fk" FOREIGN KEY ("fundraisers_id") REFERENCES "public"."fundraisers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "dioceses_rels" ADD CONSTRAINT "dioceses_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "dioceses_rels" ADD CONSTRAINT "dioceses_rels_courts_fk" FOREIGN KEY ("courts_id") REFERENCES "public"."courts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "dioceses_rels" ADD CONSTRAINT "dioceses_rels_contacts_fk" FOREIGN KEY ("contacts_id") REFERENCES "public"."contacts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courts" ADD CONSTRAINT "courts_diocese_id_dioceses_id_fk" FOREIGN KEY ("diocese_id") REFERENCES "public"."dioceses"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "courts" ADD CONSTRAINT "courts_officers_regent_id_contacts_id_fk" FOREIGN KEY ("officers_regent_id") REFERENCES "public"."contacts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "courts" ADD CONSTRAINT "courts_officers_vice_regent_id_contacts_id_fk" FOREIGN KEY ("officers_vice_regent_id") REFERENCES "public"."contacts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "courts" ADD CONSTRAINT "courts_officers_recording_secretary_id_contacts_id_fk" FOREIGN KEY ("officers_recording_secretary_id") REFERENCES "public"."contacts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "courts" ADD CONSTRAINT "courts_officers_financial_secretary_id_contacts_id_fk" FOREIGN KEY ("officers_financial_secretary_id") REFERENCES "public"."contacts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "courts" ADD CONSTRAINT "courts_officers_treasurer_id_contacts_id_fk" FOREIGN KEY ("officers_treasurer_id") REFERENCES "public"."contacts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "courts" ADD CONSTRAINT "courts_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "courts_rels" ADD CONSTRAINT "courts_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."courts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courts_rels" ADD CONSTRAINT "courts_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courts_rels" ADD CONSTRAINT "courts_rels_charities_fk" FOREIGN KEY ("charities_id") REFERENCES "public"."charities"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courts_rels" ADD CONSTRAINT "courts_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courts_rels" ADD CONSTRAINT "courts_rels_fundraisers_fk" FOREIGN KEY ("fundraisers_id") REFERENCES "public"."fundraisers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courts_rels" ADD CONSTRAINT "courts_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courts_rels" ADD CONSTRAINT "courts_rels_courts_fk" FOREIGN KEY ("courts_id") REFERENCES "public"."courts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courts_rels" ADD CONSTRAINT "courts_rels_newsletters_fk" FOREIGN KEY ("newsletters_id") REFERENCES "public"."newsletters"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courts_v" ADD CONSTRAINT "_courts_v_parent_id_courts_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."courts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_courts_v" ADD CONSTRAINT "_courts_v_version_diocese_id_dioceses_id_fk" FOREIGN KEY ("version_diocese_id") REFERENCES "public"."dioceses"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_courts_v" ADD CONSTRAINT "_courts_v_version_officers_regent_id_contacts_id_fk" FOREIGN KEY ("version_officers_regent_id") REFERENCES "public"."contacts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_courts_v" ADD CONSTRAINT "_courts_v_version_officers_vice_regent_id_contacts_id_fk" FOREIGN KEY ("version_officers_vice_regent_id") REFERENCES "public"."contacts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_courts_v" ADD CONSTRAINT "_courts_v_version_officers_recording_secretary_id_contacts_id_fk" FOREIGN KEY ("version_officers_recording_secretary_id") REFERENCES "public"."contacts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_courts_v" ADD CONSTRAINT "_courts_v_version_officers_financial_secretary_id_contacts_id_fk" FOREIGN KEY ("version_officers_financial_secretary_id") REFERENCES "public"."contacts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_courts_v" ADD CONSTRAINT "_courts_v_version_officers_treasurer_id_contacts_id_fk" FOREIGN KEY ("version_officers_treasurer_id") REFERENCES "public"."contacts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_courts_v" ADD CONSTRAINT "_courts_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_courts_v_rels" ADD CONSTRAINT "_courts_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_courts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courts_v_rels" ADD CONSTRAINT "_courts_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courts_v_rels" ADD CONSTRAINT "_courts_v_rels_charities_fk" FOREIGN KEY ("charities_id") REFERENCES "public"."charities"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courts_v_rels" ADD CONSTRAINT "_courts_v_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courts_v_rels" ADD CONSTRAINT "_courts_v_rels_fundraisers_fk" FOREIGN KEY ("fundraisers_id") REFERENCES "public"."fundraisers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courts_v_rels" ADD CONSTRAINT "_courts_v_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courts_v_rels" ADD CONSTRAINT "_courts_v_rels_courts_fk" FOREIGN KEY ("courts_id") REFERENCES "public"."courts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courts_v_rels" ADD CONSTRAINT "_courts_v_rels_newsletters_fk" FOREIGN KEY ("newsletters_id") REFERENCES "public"."newsletters"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events" ADD CONSTRAINT "events_associated_court_id_courts_id_fk" FOREIGN KEY ("associated_court_id") REFERENCES "public"."courts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "events" ADD CONSTRAINT "events_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "events_rels" ADD CONSTRAINT "events_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_rels" ADD CONSTRAINT "events_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v" ADD CONSTRAINT "_events_v_parent_id_events_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."events"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_events_v" ADD CONSTRAINT "_events_v_version_associated_court_id_courts_id_fk" FOREIGN KEY ("version_associated_court_id") REFERENCES "public"."courts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_events_v" ADD CONSTRAINT "_events_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_events_v_rels" ADD CONSTRAINT "_events_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_events_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_rels" ADD CONSTRAINT "_events_v_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "fundraisers" ADD CONSTRAINT "fundraisers_associated_court_id_courts_id_fk" FOREIGN KEY ("associated_court_id") REFERENCES "public"."courts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "fundraisers" ADD CONSTRAINT "fundraisers_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "fundraisers_rels" ADD CONSTRAINT "fundraisers_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."fundraisers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "fundraisers_rels" ADD CONSTRAINT "fundraisers_rels_fundraisers_fk" FOREIGN KEY ("fundraisers_id") REFERENCES "public"."fundraisers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_fundraisers_v" ADD CONSTRAINT "_fundraisers_v_parent_id_fundraisers_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."fundraisers"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_fundraisers_v" ADD CONSTRAINT "_fundraisers_v_version_associated_court_id_courts_id_fk" FOREIGN KEY ("version_associated_court_id") REFERENCES "public"."courts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_fundraisers_v" ADD CONSTRAINT "_fundraisers_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_fundraisers_v_rels" ADD CONSTRAINT "_fundraisers_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_fundraisers_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_fundraisers_v_rels" ADD CONSTRAINT "_fundraisers_v_rels_fundraisers_fk" FOREIGN KEY ("fundraisers_id") REFERENCES "public"."fundraisers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects" ADD CONSTRAINT "projects_associated_court_id_courts_id_fk" FOREIGN KEY ("associated_court_id") REFERENCES "public"."courts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "projects" ADD CONSTRAINT "projects_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v" ADD CONSTRAINT "_projects_v_parent_id_projects_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_projects_v" ADD CONSTRAINT "_projects_v_version_associated_court_id_courts_id_fk" FOREIGN KEY ("version_associated_court_id") REFERENCES "public"."courts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_projects_v" ADD CONSTRAINT "_projects_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "charities" ADD CONSTRAINT "charities_associated_court_id_courts_id_fk" FOREIGN KEY ("associated_court_id") REFERENCES "public"."courts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "charities" ADD CONSTRAINT "charities_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "charities_rels" ADD CONSTRAINT "charities_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."charities"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "charities_rels" ADD CONSTRAINT "charities_rels_charities_fk" FOREIGN KEY ("charities_id") REFERENCES "public"."charities"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_charities_v" ADD CONSTRAINT "_charities_v_parent_id_charities_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."charities"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_charities_v" ADD CONSTRAINT "_charities_v_version_associated_court_id_courts_id_fk" FOREIGN KEY ("version_associated_court_id") REFERENCES "public"."courts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_charities_v" ADD CONSTRAINT "_charities_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_charities_v_rels" ADD CONSTRAINT "_charities_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_charities_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_charities_v_rels" ADD CONSTRAINT "_charities_v_rels_charities_fk" FOREIGN KEY ("charities_id") REFERENCES "public"."charities"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_checkbox" ADD CONSTRAINT "forms_blocks_checkbox_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_country" ADD CONSTRAINT "forms_blocks_country_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_email" ADD CONSTRAINT "forms_blocks_email_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_message" ADD CONSTRAINT "forms_blocks_message_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_number" ADD CONSTRAINT "forms_blocks_number_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_select_options" ADD CONSTRAINT "forms_blocks_select_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_select"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_select" ADD CONSTRAINT "forms_blocks_select_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_state" ADD CONSTRAINT "forms_blocks_state_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_text" ADD CONSTRAINT "forms_blocks_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_textarea" ADD CONSTRAINT "forms_blocks_textarea_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_date" ADD CONSTRAINT "forms_blocks_date_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_emails" ADD CONSTRAINT "forms_emails_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "form_submissions_submission_data" ADD CONSTRAINT "form_submissions_submission_data_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "form_submissions" ADD CONSTRAINT "form_submissions_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_jobs_log" ADD CONSTRAINT "payload_jobs_log_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."payload_jobs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_news_posts_fk" FOREIGN KEY ("news_posts_id") REFERENCES "public"."news_posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_newsletters_fk" FOREIGN KEY ("newsletters_id") REFERENCES "public"."newsletters"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_contacts_fk" FOREIGN KEY ("contacts_id") REFERENCES "public"."contacts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_dioceses_fk" FOREIGN KEY ("dioceses_id") REFERENCES "public"."dioceses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_courts_fk" FOREIGN KEY ("courts_id") REFERENCES "public"."courts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_fundraisers_fk" FOREIGN KEY ("fundraisers_id") REFERENCES "public"."fundraisers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_charities_fk" FOREIGN KEY ("charities_id") REFERENCES "public"."charities"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_redirects_fk" FOREIGN KEY ("redirects_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_forms_fk" FOREIGN KEY ("forms_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_form_submissions_fk" FOREIGN KEY ("form_submissions_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_payload_jobs_fk" FOREIGN KEY ("payload_jobs_id") REFERENCES "public"."payload_jobs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_nav_items_sub_nav_links" ADD CONSTRAINT "header_nav_items_sub_nav_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_nav_items_sub_nav"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_nav_items_sub_nav" ADD CONSTRAINT "header_nav_items_sub_nav_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_nav_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_nav_items" ADD CONSTRAINT "header_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_nav_buttons" ADD CONSTRAINT "header_nav_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header" ADD CONSTRAINT "header_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_charities_fk" FOREIGN KEY ("charities_id") REFERENCES "public"."charities"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_fundraisers_fk" FOREIGN KEY ("fundraisers_id") REFERENCES "public"."fundraisers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_courts_fk" FOREIGN KEY ("courts_id") REFERENCES "public"."courts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_nav_items" ADD CONSTRAINT "footer_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_social_media" ADD CONSTRAINT "footer_social_media_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer" ADD CONSTRAINT "footer_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_charities_fk" FOREIGN KEY ("charities_id") REFERENCES "public"."charities"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_fundraisers_fk" FOREIGN KEY ("fundraisers_id") REFERENCES "public"."fundraisers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_courts_fk" FOREIGN KEY ("courts_id") REFERENCES "public"."courts"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_high_impact_hero_links_order_idx" ON "pages_blocks_high_impact_hero_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_high_impact_hero_links_parent_id_idx" ON "pages_blocks_high_impact_hero_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_high_impact_hero_order_idx" ON "pages_blocks_high_impact_hero" USING btree ("_order");
  CREATE INDEX "pages_blocks_high_impact_hero_parent_id_idx" ON "pages_blocks_high_impact_hero" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_high_impact_hero_path_idx" ON "pages_blocks_high_impact_hero" USING btree ("_path");
  CREATE INDEX "pages_blocks_high_impact_hero_logo_idx" ON "pages_blocks_high_impact_hero" USING btree ("logo_id");
  CREATE INDEX "pages_blocks_high_impact_hero_media_idx" ON "pages_blocks_high_impact_hero" USING btree ("media_id");
  CREATE INDEX "pages_blocks_low_impact_hero_order_idx" ON "pages_blocks_low_impact_hero" USING btree ("_order");
  CREATE INDEX "pages_blocks_low_impact_hero_parent_id_idx" ON "pages_blocks_low_impact_hero" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_low_impact_hero_path_idx" ON "pages_blocks_low_impact_hero" USING btree ("_path");
  CREATE INDEX "pages_blocks_media_right_hero_links_order_idx" ON "pages_blocks_media_right_hero_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_media_right_hero_links_parent_id_idx" ON "pages_blocks_media_right_hero_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_media_right_hero_order_idx" ON "pages_blocks_media_right_hero" USING btree ("_order");
  CREATE INDEX "pages_blocks_media_right_hero_parent_id_idx" ON "pages_blocks_media_right_hero" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_media_right_hero_path_idx" ON "pages_blocks_media_right_hero" USING btree ("_path");
  CREATE INDEX "pages_blocks_media_right_hero_media_idx" ON "pages_blocks_media_right_hero" USING btree ("media_id");
  CREATE INDEX "pages_blocks_content_columns_order_idx" ON "pages_blocks_content_columns" USING btree ("_order");
  CREATE INDEX "pages_blocks_content_columns_parent_id_idx" ON "pages_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_content_order_idx" ON "pages_blocks_content" USING btree ("_order");
  CREATE INDEX "pages_blocks_content_parent_id_idx" ON "pages_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_content_path_idx" ON "pages_blocks_content" USING btree ("_path");
  CREATE INDEX "pages_blocks_news_posts_order_idx" ON "pages_blocks_news_posts" USING btree ("_order");
  CREATE INDEX "pages_blocks_news_posts_parent_id_idx" ON "pages_blocks_news_posts" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_news_posts_path_idx" ON "pages_blocks_news_posts" USING btree ("_path");
  CREATE INDEX "pages_blocks_newsletters_order_idx" ON "pages_blocks_newsletters" USING btree ("_order");
  CREATE INDEX "pages_blocks_newsletters_parent_id_idx" ON "pages_blocks_newsletters" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_newsletters_path_idx" ON "pages_blocks_newsletters" USING btree ("_path");
  CREATE INDEX "pages_blocks_slider_slides_links_order_idx" ON "pages_blocks_slider_slides_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_slider_slides_links_parent_id_idx" ON "pages_blocks_slider_slides_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_slider_slides_order_idx" ON "pages_blocks_slider_slides" USING btree ("_order");
  CREATE INDEX "pages_blocks_slider_slides_parent_id_idx" ON "pages_blocks_slider_slides" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_slider_slides_media_idx" ON "pages_blocks_slider_slides" USING btree ("media_id");
  CREATE INDEX "pages_blocks_slider_order_idx" ON "pages_blocks_slider" USING btree ("_order");
  CREATE INDEX "pages_blocks_slider_parent_id_idx" ON "pages_blocks_slider" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_slider_path_idx" ON "pages_blocks_slider" USING btree ("_path");
  CREATE INDEX "pages_blocks_stats_stats_order_idx" ON "pages_blocks_stats_stats" USING btree ("_order");
  CREATE INDEX "pages_blocks_stats_stats_parent_id_idx" ON "pages_blocks_stats_stats" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_stats_order_idx" ON "pages_blocks_stats" USING btree ("_order");
  CREATE INDEX "pages_blocks_stats_parent_id_idx" ON "pages_blocks_stats" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_stats_path_idx" ON "pages_blocks_stats" USING btree ("_path");
  CREATE INDEX "pages_blocks_side_bar_sections_order_idx" ON "pages_blocks_side_bar_sections" USING btree ("_order");
  CREATE INDEX "pages_blocks_side_bar_sections_parent_id_idx" ON "pages_blocks_side_bar_sections" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_side_bar_order_idx" ON "pages_blocks_side_bar" USING btree ("_order");
  CREATE INDEX "pages_blocks_side_bar_parent_id_idx" ON "pages_blocks_side_bar" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_side_bar_path_idx" ON "pages_blocks_side_bar" USING btree ("_path");
  CREATE INDEX "pages_blocks_calendar_months_items_order_idx" ON "pages_blocks_calendar_months_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_calendar_months_items_parent_id_idx" ON "pages_blocks_calendar_months_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_calendar_months_order_idx" ON "pages_blocks_calendar_months" USING btree ("_order");
  CREATE INDEX "pages_blocks_calendar_months_parent_id_idx" ON "pages_blocks_calendar_months" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_calendar_order_idx" ON "pages_blocks_calendar" USING btree ("_order");
  CREATE INDEX "pages_blocks_calendar_parent_id_idx" ON "pages_blocks_calendar" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_calendar_path_idx" ON "pages_blocks_calendar" USING btree ("_path");
  CREATE INDEX "pages_blocks_contact_cards_order_idx" ON "pages_blocks_contact_cards" USING btree ("_order");
  CREATE INDEX "pages_blocks_contact_cards_parent_id_idx" ON "pages_blocks_contact_cards" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_contact_cards_path_idx" ON "pages_blocks_contact_cards" USING btree ("_path");
  CREATE INDEX "pages_blocks_contact_cards_diocese_idx" ON "pages_blocks_contact_cards" USING btree ("diocese_id");
  CREATE INDEX "pages_blocks_tabs_tabs_order_idx" ON "pages_blocks_tabs_tabs" USING btree ("_order");
  CREATE INDEX "pages_blocks_tabs_tabs_parent_id_idx" ON "pages_blocks_tabs_tabs" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_tabs_order_idx" ON "pages_blocks_tabs" USING btree ("_order");
  CREATE INDEX "pages_blocks_tabs_parent_id_idx" ON "pages_blocks_tabs" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_tabs_path_idx" ON "pages_blocks_tabs" USING btree ("_path");
  CREATE INDEX "pages_blocks_court_listing_order_idx" ON "pages_blocks_court_listing" USING btree ("_order");
  CREATE INDEX "pages_blocks_court_listing_parent_id_idx" ON "pages_blocks_court_listing" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_court_listing_path_idx" ON "pages_blocks_court_listing" USING btree ("_path");
  CREATE INDEX "pages_blocks_court_listing_diocese_idx" ON "pages_blocks_court_listing" USING btree ("diocese_id");
  CREATE INDEX "pages_blocks_diocese_listing_order_idx" ON "pages_blocks_diocese_listing" USING btree ("_order");
  CREATE INDEX "pages_blocks_diocese_listing_parent_id_idx" ON "pages_blocks_diocese_listing" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_diocese_listing_path_idx" ON "pages_blocks_diocese_listing" USING btree ("_path");
  CREATE INDEX "pages_blocks_archive_order_idx" ON "pages_blocks_archive" USING btree ("_order");
  CREATE INDEX "pages_blocks_archive_parent_id_idx" ON "pages_blocks_archive" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_archive_path_idx" ON "pages_blocks_archive" USING btree ("_path");
  CREATE INDEX "pages_blocks_media_block_links_order_idx" ON "pages_blocks_media_block_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_media_block_links_parent_id_idx" ON "pages_blocks_media_block_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_media_block_order_idx" ON "pages_blocks_media_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_media_block_parent_id_idx" ON "pages_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_media_block_path_idx" ON "pages_blocks_media_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_media_block_media_idx" ON "pages_blocks_media_block" USING btree ("media_id");
  CREATE INDEX "pages_blocks_banner_order_idx" ON "pages_blocks_banner" USING btree ("_order");
  CREATE INDEX "pages_blocks_banner_parent_id_idx" ON "pages_blocks_banner" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_banner_path_idx" ON "pages_blocks_banner" USING btree ("_path");
  CREATE INDEX "pages_blocks_cta_links_order_idx" ON "pages_blocks_cta_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_links_parent_id_idx" ON "pages_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_order_idx" ON "pages_blocks_cta" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_parent_id_idx" ON "pages_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_path_idx" ON "pages_blocks_cta" USING btree ("_path");
  CREATE INDEX "pages_blocks_form_block_order_idx" ON "pages_blocks_form_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_form_block_parent_id_idx" ON "pages_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_form_block_path_idx" ON "pages_blocks_form_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_form_block_form_idx" ON "pages_blocks_form_block" USING btree ("form_id");
  CREATE INDEX "pages_breadcrumbs_order_idx" ON "pages_breadcrumbs" USING btree ("_order");
  CREATE INDEX "pages_breadcrumbs_parent_id_idx" ON "pages_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX "pages_breadcrumbs_doc_idx" ON "pages_breadcrumbs" USING btree ("doc_id");
  CREATE INDEX "pages_meta_meta_image_idx" ON "pages" USING btree ("meta_image_id");
  CREATE INDEX "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX "pages_parent_idx" ON "pages" USING btree ("parent_id");
  CREATE INDEX "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX "pages__status_idx" ON "pages" USING btree ("_status");
  CREATE INDEX "pages_rels_order_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX "pages_rels_parent_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX "pages_rels_path_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX "pages_rels_pages_id_idx" ON "pages_rels" USING btree ("pages_id");
  CREATE INDEX "pages_rels_charities_id_idx" ON "pages_rels" USING btree ("charities_id");
  CREATE INDEX "pages_rels_events_id_idx" ON "pages_rels" USING btree ("events_id");
  CREATE INDEX "pages_rels_fundraisers_id_idx" ON "pages_rels" USING btree ("fundraisers_id");
  CREATE INDEX "pages_rels_projects_id_idx" ON "pages_rels" USING btree ("projects_id");
  CREATE INDEX "pages_rels_courts_id_idx" ON "pages_rels" USING btree ("courts_id");
  CREATE INDEX "pages_rels_news_posts_id_idx" ON "pages_rels" USING btree ("news_posts_id");
  CREATE INDEX "pages_rels_newsletters_id_idx" ON "pages_rels" USING btree ("newsletters_id");
  CREATE INDEX "pages_rels_contacts_id_idx" ON "pages_rels" USING btree ("contacts_id");
  CREATE INDEX "pages_rels_dioceses_id_idx" ON "pages_rels" USING btree ("dioceses_id");
  CREATE INDEX "pages_rels_media_id_idx" ON "pages_rels" USING btree ("media_id");
  CREATE INDEX "_pages_v_blocks_high_impact_hero_links_order_idx" ON "_pages_v_blocks_high_impact_hero_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_high_impact_hero_links_parent_id_idx" ON "_pages_v_blocks_high_impact_hero_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_high_impact_hero_order_idx" ON "_pages_v_blocks_high_impact_hero" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_high_impact_hero_parent_id_idx" ON "_pages_v_blocks_high_impact_hero" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_high_impact_hero_path_idx" ON "_pages_v_blocks_high_impact_hero" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_high_impact_hero_logo_idx" ON "_pages_v_blocks_high_impact_hero" USING btree ("logo_id");
  CREATE INDEX "_pages_v_blocks_high_impact_hero_media_idx" ON "_pages_v_blocks_high_impact_hero" USING btree ("media_id");
  CREATE INDEX "_pages_v_blocks_low_impact_hero_order_idx" ON "_pages_v_blocks_low_impact_hero" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_low_impact_hero_parent_id_idx" ON "_pages_v_blocks_low_impact_hero" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_low_impact_hero_path_idx" ON "_pages_v_blocks_low_impact_hero" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_media_right_hero_links_order_idx" ON "_pages_v_blocks_media_right_hero_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_media_right_hero_links_parent_id_idx" ON "_pages_v_blocks_media_right_hero_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_media_right_hero_order_idx" ON "_pages_v_blocks_media_right_hero" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_media_right_hero_parent_id_idx" ON "_pages_v_blocks_media_right_hero" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_media_right_hero_path_idx" ON "_pages_v_blocks_media_right_hero" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_media_right_hero_media_idx" ON "_pages_v_blocks_media_right_hero" USING btree ("media_id");
  CREATE INDEX "_pages_v_blocks_content_columns_order_idx" ON "_pages_v_blocks_content_columns" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_content_columns_parent_id_idx" ON "_pages_v_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_content_order_idx" ON "_pages_v_blocks_content" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_content_parent_id_idx" ON "_pages_v_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_content_path_idx" ON "_pages_v_blocks_content" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_news_posts_order_idx" ON "_pages_v_blocks_news_posts" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_news_posts_parent_id_idx" ON "_pages_v_blocks_news_posts" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_news_posts_path_idx" ON "_pages_v_blocks_news_posts" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_newsletters_order_idx" ON "_pages_v_blocks_newsletters" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_newsletters_parent_id_idx" ON "_pages_v_blocks_newsletters" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_newsletters_path_idx" ON "_pages_v_blocks_newsletters" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_slider_slides_links_order_idx" ON "_pages_v_blocks_slider_slides_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_slider_slides_links_parent_id_idx" ON "_pages_v_blocks_slider_slides_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_slider_slides_order_idx" ON "_pages_v_blocks_slider_slides" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_slider_slides_parent_id_idx" ON "_pages_v_blocks_slider_slides" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_slider_slides_media_idx" ON "_pages_v_blocks_slider_slides" USING btree ("media_id");
  CREATE INDEX "_pages_v_blocks_slider_order_idx" ON "_pages_v_blocks_slider" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_slider_parent_id_idx" ON "_pages_v_blocks_slider" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_slider_path_idx" ON "_pages_v_blocks_slider" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_stats_stats_order_idx" ON "_pages_v_blocks_stats_stats" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_stats_stats_parent_id_idx" ON "_pages_v_blocks_stats_stats" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_stats_order_idx" ON "_pages_v_blocks_stats" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_stats_parent_id_idx" ON "_pages_v_blocks_stats" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_stats_path_idx" ON "_pages_v_blocks_stats" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_side_bar_sections_order_idx" ON "_pages_v_blocks_side_bar_sections" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_side_bar_sections_parent_id_idx" ON "_pages_v_blocks_side_bar_sections" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_side_bar_order_idx" ON "_pages_v_blocks_side_bar" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_side_bar_parent_id_idx" ON "_pages_v_blocks_side_bar" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_side_bar_path_idx" ON "_pages_v_blocks_side_bar" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_calendar_months_items_order_idx" ON "_pages_v_blocks_calendar_months_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_calendar_months_items_parent_id_idx" ON "_pages_v_blocks_calendar_months_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_calendar_months_order_idx" ON "_pages_v_blocks_calendar_months" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_calendar_months_parent_id_idx" ON "_pages_v_blocks_calendar_months" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_calendar_order_idx" ON "_pages_v_blocks_calendar" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_calendar_parent_id_idx" ON "_pages_v_blocks_calendar" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_calendar_path_idx" ON "_pages_v_blocks_calendar" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_contact_cards_order_idx" ON "_pages_v_blocks_contact_cards" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_contact_cards_parent_id_idx" ON "_pages_v_blocks_contact_cards" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_contact_cards_path_idx" ON "_pages_v_blocks_contact_cards" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_contact_cards_diocese_idx" ON "_pages_v_blocks_contact_cards" USING btree ("diocese_id");
  CREATE INDEX "_pages_v_blocks_tabs_tabs_order_idx" ON "_pages_v_blocks_tabs_tabs" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_tabs_tabs_parent_id_idx" ON "_pages_v_blocks_tabs_tabs" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_tabs_order_idx" ON "_pages_v_blocks_tabs" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_tabs_parent_id_idx" ON "_pages_v_blocks_tabs" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_tabs_path_idx" ON "_pages_v_blocks_tabs" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_court_listing_order_idx" ON "_pages_v_blocks_court_listing" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_court_listing_parent_id_idx" ON "_pages_v_blocks_court_listing" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_court_listing_path_idx" ON "_pages_v_blocks_court_listing" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_court_listing_diocese_idx" ON "_pages_v_blocks_court_listing" USING btree ("diocese_id");
  CREATE INDEX "_pages_v_blocks_diocese_listing_order_idx" ON "_pages_v_blocks_diocese_listing" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_diocese_listing_parent_id_idx" ON "_pages_v_blocks_diocese_listing" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_diocese_listing_path_idx" ON "_pages_v_blocks_diocese_listing" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_archive_order_idx" ON "_pages_v_blocks_archive" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_archive_parent_id_idx" ON "_pages_v_blocks_archive" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_archive_path_idx" ON "_pages_v_blocks_archive" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_media_block_links_order_idx" ON "_pages_v_blocks_media_block_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_media_block_links_parent_id_idx" ON "_pages_v_blocks_media_block_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_media_block_order_idx" ON "_pages_v_blocks_media_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_media_block_parent_id_idx" ON "_pages_v_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_media_block_path_idx" ON "_pages_v_blocks_media_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_media_block_media_idx" ON "_pages_v_blocks_media_block" USING btree ("media_id");
  CREATE INDEX "_pages_v_blocks_banner_order_idx" ON "_pages_v_blocks_banner" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_banner_parent_id_idx" ON "_pages_v_blocks_banner" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_banner_path_idx" ON "_pages_v_blocks_banner" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_cta_links_order_idx" ON "_pages_v_blocks_cta_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta_links_parent_id_idx" ON "_pages_v_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta_order_idx" ON "_pages_v_blocks_cta" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta_parent_id_idx" ON "_pages_v_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta_path_idx" ON "_pages_v_blocks_cta" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_form_block_order_idx" ON "_pages_v_blocks_form_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_form_block_parent_id_idx" ON "_pages_v_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_form_block_path_idx" ON "_pages_v_blocks_form_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_form_block_form_idx" ON "_pages_v_blocks_form_block" USING btree ("form_id");
  CREATE INDEX "_pages_v_version_breadcrumbs_order_idx" ON "_pages_v_version_breadcrumbs" USING btree ("_order");
  CREATE INDEX "_pages_v_version_breadcrumbs_parent_id_idx" ON "_pages_v_version_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_breadcrumbs_doc_idx" ON "_pages_v_version_breadcrumbs" USING btree ("doc_id");
  CREATE INDEX "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX "_pages_v_version_meta_version_meta_image_idx" ON "_pages_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_pages_v_version_version_slug_idx" ON "_pages_v" USING btree ("version_slug");
  CREATE INDEX "_pages_v_version_version_parent_idx" ON "_pages_v" USING btree ("version_parent_id");
  CREATE INDEX "_pages_v_version_version_updated_at_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX "_pages_v_version_version__status_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX "_pages_v_latest_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX "_pages_v_autosave_idx" ON "_pages_v" USING btree ("autosave");
  CREATE INDEX "_pages_v_rels_order_idx" ON "_pages_v_rels" USING btree ("order");
  CREATE INDEX "_pages_v_rels_parent_idx" ON "_pages_v_rels" USING btree ("parent_id");
  CREATE INDEX "_pages_v_rels_path_idx" ON "_pages_v_rels" USING btree ("path");
  CREATE INDEX "_pages_v_rels_pages_id_idx" ON "_pages_v_rels" USING btree ("pages_id");
  CREATE INDEX "_pages_v_rels_charities_id_idx" ON "_pages_v_rels" USING btree ("charities_id");
  CREATE INDEX "_pages_v_rels_events_id_idx" ON "_pages_v_rels" USING btree ("events_id");
  CREATE INDEX "_pages_v_rels_fundraisers_id_idx" ON "_pages_v_rels" USING btree ("fundraisers_id");
  CREATE INDEX "_pages_v_rels_projects_id_idx" ON "_pages_v_rels" USING btree ("projects_id");
  CREATE INDEX "_pages_v_rels_courts_id_idx" ON "_pages_v_rels" USING btree ("courts_id");
  CREATE INDEX "_pages_v_rels_news_posts_id_idx" ON "_pages_v_rels" USING btree ("news_posts_id");
  CREATE INDEX "_pages_v_rels_newsletters_id_idx" ON "_pages_v_rels" USING btree ("newsletters_id");
  CREATE INDEX "_pages_v_rels_contacts_id_idx" ON "_pages_v_rels" USING btree ("contacts_id");
  CREATE INDEX "_pages_v_rels_dioceses_id_idx" ON "_pages_v_rels" USING btree ("dioceses_id");
  CREATE INDEX "_pages_v_rels_media_id_idx" ON "_pages_v_rels" USING btree ("media_id");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX "media_sizes_square_sizes_square_filename_idx" ON "media" USING btree ("sizes_square_filename");
  CREATE INDEX "media_sizes_small_sizes_small_filename_idx" ON "media" USING btree ("sizes_small_filename");
  CREATE INDEX "media_sizes_medium_sizes_medium_filename_idx" ON "media" USING btree ("sizes_medium_filename");
  CREATE INDEX "media_sizes_large_sizes_large_filename_idx" ON "media" USING btree ("sizes_large_filename");
  CREATE INDEX "media_sizes_xlarge_sizes_xlarge_filename_idx" ON "media" USING btree ("sizes_xlarge_filename");
  CREATE INDEX "media_sizes_og_sizes_og_filename_idx" ON "media" USING btree ("sizes_og_filename");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "news_posts_links_order_idx" ON "news_posts_links" USING btree ("_order");
  CREATE INDEX "news_posts_links_parent_id_idx" ON "news_posts_links" USING btree ("_parent_id");
  CREATE INDEX "news_posts_updated_at_idx" ON "news_posts" USING btree ("updated_at");
  CREATE INDEX "news_posts_created_at_idx" ON "news_posts" USING btree ("created_at");
  CREATE INDEX "news_posts_rels_order_idx" ON "news_posts_rels" USING btree ("order");
  CREATE INDEX "news_posts_rels_parent_idx" ON "news_posts_rels" USING btree ("parent_id");
  CREATE INDEX "news_posts_rels_path_idx" ON "news_posts_rels" USING btree ("path");
  CREATE INDEX "news_posts_rels_pages_id_idx" ON "news_posts_rels" USING btree ("pages_id");
  CREATE INDEX "news_posts_rels_charities_id_idx" ON "news_posts_rels" USING btree ("charities_id");
  CREATE INDEX "news_posts_rels_events_id_idx" ON "news_posts_rels" USING btree ("events_id");
  CREATE INDEX "news_posts_rels_fundraisers_id_idx" ON "news_posts_rels" USING btree ("fundraisers_id");
  CREATE INDEX "news_posts_rels_projects_id_idx" ON "news_posts_rels" USING btree ("projects_id");
  CREATE INDEX "news_posts_rels_courts_id_idx" ON "news_posts_rels" USING btree ("courts_id");
  CREATE INDEX "newsletters_associated_court_idx" ON "newsletters" USING btree ("associated_court_id");
  CREATE INDEX "newsletters_updated_at_idx" ON "newsletters" USING btree ("updated_at");
  CREATE INDEX "newsletters_created_at_idx" ON "newsletters" USING btree ("created_at");
  CREATE UNIQUE INDEX "newsletters_filename_idx" ON "newsletters" USING btree ("filename");
  CREATE INDEX "contacts_roles_order_idx" ON "contacts_roles" USING btree ("_order");
  CREATE INDEX "contacts_roles_parent_id_idx" ON "contacts_roles" USING btree ("_parent_id");
  CREATE INDEX "contacts_positions_order_idx" ON "contacts_positions" USING btree ("order");
  CREATE INDEX "contacts_positions_parent_idx" ON "contacts_positions" USING btree ("parent_id");
  CREATE INDEX "contacts_officer_type_order_idx" ON "contacts_officer_type" USING btree ("order");
  CREATE INDEX "contacts_officer_type_parent_idx" ON "contacts_officer_type" USING btree ("parent_id");
  CREATE INDEX "contacts_image_idx" ON "contacts" USING btree ("image_id");
  CREATE INDEX "contacts_updated_at_idx" ON "contacts" USING btree ("updated_at");
  CREATE INDEX "contacts_created_at_idx" ON "contacts" USING btree ("created_at");
  CREATE INDEX "dioceses_updated_at_idx" ON "dioceses" USING btree ("updated_at");
  CREATE INDEX "dioceses_created_at_idx" ON "dioceses" USING btree ("created_at");
  CREATE INDEX "dioceses_rels_order_idx" ON "dioceses_rels" USING btree ("order");
  CREATE INDEX "dioceses_rels_parent_idx" ON "dioceses_rels" USING btree ("parent_id");
  CREATE INDEX "dioceses_rels_path_idx" ON "dioceses_rels" USING btree ("path");
  CREATE INDEX "dioceses_rels_pages_id_idx" ON "dioceses_rels" USING btree ("pages_id");
  CREATE INDEX "dioceses_rels_charities_id_idx" ON "dioceses_rels" USING btree ("charities_id");
  CREATE INDEX "dioceses_rels_events_id_idx" ON "dioceses_rels" USING btree ("events_id");
  CREATE INDEX "dioceses_rels_fundraisers_id_idx" ON "dioceses_rels" USING btree ("fundraisers_id");
  CREATE INDEX "dioceses_rels_projects_id_idx" ON "dioceses_rels" USING btree ("projects_id");
  CREATE INDEX "dioceses_rels_courts_id_idx" ON "dioceses_rels" USING btree ("courts_id");
  CREATE INDEX "dioceses_rels_contacts_id_idx" ON "dioceses_rels" USING btree ("contacts_id");
  CREATE INDEX "courts_diocese_idx" ON "courts" USING btree ("diocese_id");
  CREATE INDEX "courts_officers_officers_regent_idx" ON "courts" USING btree ("officers_regent_id");
  CREATE INDEX "courts_officers_officers_vice_regent_idx" ON "courts" USING btree ("officers_vice_regent_id");
  CREATE INDEX "courts_officers_officers_recording_secretary_idx" ON "courts" USING btree ("officers_recording_secretary_id");
  CREATE INDEX "courts_officers_officers_financial_secretary_idx" ON "courts" USING btree ("officers_financial_secretary_id");
  CREATE INDEX "courts_officers_officers_treasurer_idx" ON "courts" USING btree ("officers_treasurer_id");
  CREATE INDEX "courts_meta_meta_image_idx" ON "courts" USING btree ("meta_image_id");
  CREATE INDEX "courts_slug_idx" ON "courts" USING btree ("slug");
  CREATE INDEX "courts_updated_at_idx" ON "courts" USING btree ("updated_at");
  CREATE INDEX "courts_created_at_idx" ON "courts" USING btree ("created_at");
  CREATE INDEX "courts__status_idx" ON "courts" USING btree ("_status");
  CREATE INDEX "courts_rels_order_idx" ON "courts_rels" USING btree ("order");
  CREATE INDEX "courts_rels_parent_idx" ON "courts_rels" USING btree ("parent_id");
  CREATE INDEX "courts_rels_path_idx" ON "courts_rels" USING btree ("path");
  CREATE INDEX "courts_rels_pages_id_idx" ON "courts_rels" USING btree ("pages_id");
  CREATE INDEX "courts_rels_charities_id_idx" ON "courts_rels" USING btree ("charities_id");
  CREATE INDEX "courts_rels_events_id_idx" ON "courts_rels" USING btree ("events_id");
  CREATE INDEX "courts_rels_fundraisers_id_idx" ON "courts_rels" USING btree ("fundraisers_id");
  CREATE INDEX "courts_rels_projects_id_idx" ON "courts_rels" USING btree ("projects_id");
  CREATE INDEX "courts_rels_courts_id_idx" ON "courts_rels" USING btree ("courts_id");
  CREATE INDEX "courts_rels_newsletters_id_idx" ON "courts_rels" USING btree ("newsletters_id");
  CREATE INDEX "_courts_v_parent_idx" ON "_courts_v" USING btree ("parent_id");
  CREATE INDEX "_courts_v_version_version_diocese_idx" ON "_courts_v" USING btree ("version_diocese_id");
  CREATE INDEX "_courts_v_version_officers_version_officers_regent_idx" ON "_courts_v" USING btree ("version_officers_regent_id");
  CREATE INDEX "_courts_v_version_officers_version_officers_vice_regent_idx" ON "_courts_v" USING btree ("version_officers_vice_regent_id");
  CREATE INDEX "_courts_v_version_officers_version_officers_recording_secretary_idx" ON "_courts_v" USING btree ("version_officers_recording_secretary_id");
  CREATE INDEX "_courts_v_version_officers_version_officers_financial_secretary_idx" ON "_courts_v" USING btree ("version_officers_financial_secretary_id");
  CREATE INDEX "_courts_v_version_officers_version_officers_treasurer_idx" ON "_courts_v" USING btree ("version_officers_treasurer_id");
  CREATE INDEX "_courts_v_version_meta_version_meta_image_idx" ON "_courts_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_courts_v_version_version_slug_idx" ON "_courts_v" USING btree ("version_slug");
  CREATE INDEX "_courts_v_version_version_updated_at_idx" ON "_courts_v" USING btree ("version_updated_at");
  CREATE INDEX "_courts_v_version_version_created_at_idx" ON "_courts_v" USING btree ("version_created_at");
  CREATE INDEX "_courts_v_version_version__status_idx" ON "_courts_v" USING btree ("version__status");
  CREATE INDEX "_courts_v_created_at_idx" ON "_courts_v" USING btree ("created_at");
  CREATE INDEX "_courts_v_updated_at_idx" ON "_courts_v" USING btree ("updated_at");
  CREATE INDEX "_courts_v_latest_idx" ON "_courts_v" USING btree ("latest");
  CREATE INDEX "_courts_v_autosave_idx" ON "_courts_v" USING btree ("autosave");
  CREATE INDEX "_courts_v_rels_order_idx" ON "_courts_v_rels" USING btree ("order");
  CREATE INDEX "_courts_v_rels_parent_idx" ON "_courts_v_rels" USING btree ("parent_id");
  CREATE INDEX "_courts_v_rels_path_idx" ON "_courts_v_rels" USING btree ("path");
  CREATE INDEX "_courts_v_rels_pages_id_idx" ON "_courts_v_rels" USING btree ("pages_id");
  CREATE INDEX "_courts_v_rels_charities_id_idx" ON "_courts_v_rels" USING btree ("charities_id");
  CREATE INDEX "_courts_v_rels_events_id_idx" ON "_courts_v_rels" USING btree ("events_id");
  CREATE INDEX "_courts_v_rels_fundraisers_id_idx" ON "_courts_v_rels" USING btree ("fundraisers_id");
  CREATE INDEX "_courts_v_rels_projects_id_idx" ON "_courts_v_rels" USING btree ("projects_id");
  CREATE INDEX "_courts_v_rels_courts_id_idx" ON "_courts_v_rels" USING btree ("courts_id");
  CREATE INDEX "_courts_v_rels_newsletters_id_idx" ON "_courts_v_rels" USING btree ("newsletters_id");
  CREATE INDEX "events_associated_court_idx" ON "events" USING btree ("associated_court_id");
  CREATE INDEX "events_meta_meta_image_idx" ON "events" USING btree ("meta_image_id");
  CREATE INDEX "events_slug_idx" ON "events" USING btree ("slug");
  CREATE INDEX "events_updated_at_idx" ON "events" USING btree ("updated_at");
  CREATE INDEX "events_created_at_idx" ON "events" USING btree ("created_at");
  CREATE INDEX "events__status_idx" ON "events" USING btree ("_status");
  CREATE INDEX "events_rels_order_idx" ON "events_rels" USING btree ("order");
  CREATE INDEX "events_rels_parent_idx" ON "events_rels" USING btree ("parent_id");
  CREATE INDEX "events_rels_path_idx" ON "events_rels" USING btree ("path");
  CREATE INDEX "events_rels_events_id_idx" ON "events_rels" USING btree ("events_id");
  CREATE INDEX "_events_v_parent_idx" ON "_events_v" USING btree ("parent_id");
  CREATE INDEX "_events_v_version_version_associated_court_idx" ON "_events_v" USING btree ("version_associated_court_id");
  CREATE INDEX "_events_v_version_meta_version_meta_image_idx" ON "_events_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_events_v_version_version_slug_idx" ON "_events_v" USING btree ("version_slug");
  CREATE INDEX "_events_v_version_version_updated_at_idx" ON "_events_v" USING btree ("version_updated_at");
  CREATE INDEX "_events_v_version_version_created_at_idx" ON "_events_v" USING btree ("version_created_at");
  CREATE INDEX "_events_v_version_version__status_idx" ON "_events_v" USING btree ("version__status");
  CREATE INDEX "_events_v_created_at_idx" ON "_events_v" USING btree ("created_at");
  CREATE INDEX "_events_v_updated_at_idx" ON "_events_v" USING btree ("updated_at");
  CREATE INDEX "_events_v_latest_idx" ON "_events_v" USING btree ("latest");
  CREATE INDEX "_events_v_autosave_idx" ON "_events_v" USING btree ("autosave");
  CREATE INDEX "_events_v_rels_order_idx" ON "_events_v_rels" USING btree ("order");
  CREATE INDEX "_events_v_rels_parent_idx" ON "_events_v_rels" USING btree ("parent_id");
  CREATE INDEX "_events_v_rels_path_idx" ON "_events_v_rels" USING btree ("path");
  CREATE INDEX "_events_v_rels_events_id_idx" ON "_events_v_rels" USING btree ("events_id");
  CREATE INDEX "fundraisers_associated_court_idx" ON "fundraisers" USING btree ("associated_court_id");
  CREATE INDEX "fundraisers_meta_meta_image_idx" ON "fundraisers" USING btree ("meta_image_id");
  CREATE INDEX "fundraisers_slug_idx" ON "fundraisers" USING btree ("slug");
  CREATE INDEX "fundraisers_updated_at_idx" ON "fundraisers" USING btree ("updated_at");
  CREATE INDEX "fundraisers_created_at_idx" ON "fundraisers" USING btree ("created_at");
  CREATE INDEX "fundraisers__status_idx" ON "fundraisers" USING btree ("_status");
  CREATE INDEX "fundraisers_rels_order_idx" ON "fundraisers_rels" USING btree ("order");
  CREATE INDEX "fundraisers_rels_parent_idx" ON "fundraisers_rels" USING btree ("parent_id");
  CREATE INDEX "fundraisers_rels_path_idx" ON "fundraisers_rels" USING btree ("path");
  CREATE INDEX "fundraisers_rels_fundraisers_id_idx" ON "fundraisers_rels" USING btree ("fundraisers_id");
  CREATE INDEX "_fundraisers_v_parent_idx" ON "_fundraisers_v" USING btree ("parent_id");
  CREATE INDEX "_fundraisers_v_version_version_associated_court_idx" ON "_fundraisers_v" USING btree ("version_associated_court_id");
  CREATE INDEX "_fundraisers_v_version_meta_version_meta_image_idx" ON "_fundraisers_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_fundraisers_v_version_version_slug_idx" ON "_fundraisers_v" USING btree ("version_slug");
  CREATE INDEX "_fundraisers_v_version_version_updated_at_idx" ON "_fundraisers_v" USING btree ("version_updated_at");
  CREATE INDEX "_fundraisers_v_version_version_created_at_idx" ON "_fundraisers_v" USING btree ("version_created_at");
  CREATE INDEX "_fundraisers_v_version_version__status_idx" ON "_fundraisers_v" USING btree ("version__status");
  CREATE INDEX "_fundraisers_v_created_at_idx" ON "_fundraisers_v" USING btree ("created_at");
  CREATE INDEX "_fundraisers_v_updated_at_idx" ON "_fundraisers_v" USING btree ("updated_at");
  CREATE INDEX "_fundraisers_v_latest_idx" ON "_fundraisers_v" USING btree ("latest");
  CREATE INDEX "_fundraisers_v_autosave_idx" ON "_fundraisers_v" USING btree ("autosave");
  CREATE INDEX "_fundraisers_v_rels_order_idx" ON "_fundraisers_v_rels" USING btree ("order");
  CREATE INDEX "_fundraisers_v_rels_parent_idx" ON "_fundraisers_v_rels" USING btree ("parent_id");
  CREATE INDEX "_fundraisers_v_rels_path_idx" ON "_fundraisers_v_rels" USING btree ("path");
  CREATE INDEX "_fundraisers_v_rels_fundraisers_id_idx" ON "_fundraisers_v_rels" USING btree ("fundraisers_id");
  CREATE INDEX "projects_associated_court_idx" ON "projects" USING btree ("associated_court_id");
  CREATE INDEX "projects_meta_meta_image_idx" ON "projects" USING btree ("meta_image_id");
  CREATE INDEX "projects_slug_idx" ON "projects" USING btree ("slug");
  CREATE INDEX "projects_updated_at_idx" ON "projects" USING btree ("updated_at");
  CREATE INDEX "projects_created_at_idx" ON "projects" USING btree ("created_at");
  CREATE INDEX "projects__status_idx" ON "projects" USING btree ("_status");
  CREATE INDEX "projects_rels_order_idx" ON "projects_rels" USING btree ("order");
  CREATE INDEX "projects_rels_parent_idx" ON "projects_rels" USING btree ("parent_id");
  CREATE INDEX "projects_rels_path_idx" ON "projects_rels" USING btree ("path");
  CREATE INDEX "projects_rels_projects_id_idx" ON "projects_rels" USING btree ("projects_id");
  CREATE INDEX "_projects_v_parent_idx" ON "_projects_v" USING btree ("parent_id");
  CREATE INDEX "_projects_v_version_version_associated_court_idx" ON "_projects_v" USING btree ("version_associated_court_id");
  CREATE INDEX "_projects_v_version_meta_version_meta_image_idx" ON "_projects_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_projects_v_version_version_slug_idx" ON "_projects_v" USING btree ("version_slug");
  CREATE INDEX "_projects_v_version_version_updated_at_idx" ON "_projects_v" USING btree ("version_updated_at");
  CREATE INDEX "_projects_v_version_version_created_at_idx" ON "_projects_v" USING btree ("version_created_at");
  CREATE INDEX "_projects_v_version_version__status_idx" ON "_projects_v" USING btree ("version__status");
  CREATE INDEX "_projects_v_created_at_idx" ON "_projects_v" USING btree ("created_at");
  CREATE INDEX "_projects_v_updated_at_idx" ON "_projects_v" USING btree ("updated_at");
  CREATE INDEX "_projects_v_latest_idx" ON "_projects_v" USING btree ("latest");
  CREATE INDEX "_projects_v_autosave_idx" ON "_projects_v" USING btree ("autosave");
  CREATE INDEX "_projects_v_rels_order_idx" ON "_projects_v_rels" USING btree ("order");
  CREATE INDEX "_projects_v_rels_parent_idx" ON "_projects_v_rels" USING btree ("parent_id");
  CREATE INDEX "_projects_v_rels_path_idx" ON "_projects_v_rels" USING btree ("path");
  CREATE INDEX "_projects_v_rels_projects_id_idx" ON "_projects_v_rels" USING btree ("projects_id");
  CREATE INDEX "charities_associated_court_idx" ON "charities" USING btree ("associated_court_id");
  CREATE INDEX "charities_meta_meta_image_idx" ON "charities" USING btree ("meta_image_id");
  CREATE INDEX "charities_slug_idx" ON "charities" USING btree ("slug");
  CREATE INDEX "charities_updated_at_idx" ON "charities" USING btree ("updated_at");
  CREATE INDEX "charities_created_at_idx" ON "charities" USING btree ("created_at");
  CREATE INDEX "charities__status_idx" ON "charities" USING btree ("_status");
  CREATE INDEX "charities_rels_order_idx" ON "charities_rels" USING btree ("order");
  CREATE INDEX "charities_rels_parent_idx" ON "charities_rels" USING btree ("parent_id");
  CREATE INDEX "charities_rels_path_idx" ON "charities_rels" USING btree ("path");
  CREATE INDEX "charities_rels_charities_id_idx" ON "charities_rels" USING btree ("charities_id");
  CREATE INDEX "_charities_v_parent_idx" ON "_charities_v" USING btree ("parent_id");
  CREATE INDEX "_charities_v_version_version_associated_court_idx" ON "_charities_v" USING btree ("version_associated_court_id");
  CREATE INDEX "_charities_v_version_meta_version_meta_image_idx" ON "_charities_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_charities_v_version_version_slug_idx" ON "_charities_v" USING btree ("version_slug");
  CREATE INDEX "_charities_v_version_version_updated_at_idx" ON "_charities_v" USING btree ("version_updated_at");
  CREATE INDEX "_charities_v_version_version_created_at_idx" ON "_charities_v" USING btree ("version_created_at");
  CREATE INDEX "_charities_v_version_version__status_idx" ON "_charities_v" USING btree ("version__status");
  CREATE INDEX "_charities_v_created_at_idx" ON "_charities_v" USING btree ("created_at");
  CREATE INDEX "_charities_v_updated_at_idx" ON "_charities_v" USING btree ("updated_at");
  CREATE INDEX "_charities_v_latest_idx" ON "_charities_v" USING btree ("latest");
  CREATE INDEX "_charities_v_autosave_idx" ON "_charities_v" USING btree ("autosave");
  CREATE INDEX "_charities_v_rels_order_idx" ON "_charities_v_rels" USING btree ("order");
  CREATE INDEX "_charities_v_rels_parent_idx" ON "_charities_v_rels" USING btree ("parent_id");
  CREATE INDEX "_charities_v_rels_path_idx" ON "_charities_v_rels" USING btree ("path");
  CREATE INDEX "_charities_v_rels_charities_id_idx" ON "_charities_v_rels" USING btree ("charities_id");
  CREATE INDEX "redirects_from_idx" ON "redirects" USING btree ("from");
  CREATE INDEX "redirects_updated_at_idx" ON "redirects" USING btree ("updated_at");
  CREATE INDEX "redirects_created_at_idx" ON "redirects" USING btree ("created_at");
  CREATE INDEX "redirects_rels_order_idx" ON "redirects_rels" USING btree ("order");
  CREATE INDEX "redirects_rels_parent_idx" ON "redirects_rels" USING btree ("parent_id");
  CREATE INDEX "redirects_rels_path_idx" ON "redirects_rels" USING btree ("path");
  CREATE INDEX "redirects_rels_pages_id_idx" ON "redirects_rels" USING btree ("pages_id");
  CREATE INDEX "forms_blocks_checkbox_order_idx" ON "forms_blocks_checkbox" USING btree ("_order");
  CREATE INDEX "forms_blocks_checkbox_parent_id_idx" ON "forms_blocks_checkbox" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_checkbox_path_idx" ON "forms_blocks_checkbox" USING btree ("_path");
  CREATE INDEX "forms_blocks_country_order_idx" ON "forms_blocks_country" USING btree ("_order");
  CREATE INDEX "forms_blocks_country_parent_id_idx" ON "forms_blocks_country" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_country_path_idx" ON "forms_blocks_country" USING btree ("_path");
  CREATE INDEX "forms_blocks_email_order_idx" ON "forms_blocks_email" USING btree ("_order");
  CREATE INDEX "forms_blocks_email_parent_id_idx" ON "forms_blocks_email" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_email_path_idx" ON "forms_blocks_email" USING btree ("_path");
  CREATE INDEX "forms_blocks_message_order_idx" ON "forms_blocks_message" USING btree ("_order");
  CREATE INDEX "forms_blocks_message_parent_id_idx" ON "forms_blocks_message" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_message_path_idx" ON "forms_blocks_message" USING btree ("_path");
  CREATE INDEX "forms_blocks_number_order_idx" ON "forms_blocks_number" USING btree ("_order");
  CREATE INDEX "forms_blocks_number_parent_id_idx" ON "forms_blocks_number" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_number_path_idx" ON "forms_blocks_number" USING btree ("_path");
  CREATE INDEX "forms_blocks_select_options_order_idx" ON "forms_blocks_select_options" USING btree ("_order");
  CREATE INDEX "forms_blocks_select_options_parent_id_idx" ON "forms_blocks_select_options" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_select_order_idx" ON "forms_blocks_select" USING btree ("_order");
  CREATE INDEX "forms_blocks_select_parent_id_idx" ON "forms_blocks_select" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_select_path_idx" ON "forms_blocks_select" USING btree ("_path");
  CREATE INDEX "forms_blocks_state_order_idx" ON "forms_blocks_state" USING btree ("_order");
  CREATE INDEX "forms_blocks_state_parent_id_idx" ON "forms_blocks_state" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_state_path_idx" ON "forms_blocks_state" USING btree ("_path");
  CREATE INDEX "forms_blocks_text_order_idx" ON "forms_blocks_text" USING btree ("_order");
  CREATE INDEX "forms_blocks_text_parent_id_idx" ON "forms_blocks_text" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_text_path_idx" ON "forms_blocks_text" USING btree ("_path");
  CREATE INDEX "forms_blocks_textarea_order_idx" ON "forms_blocks_textarea" USING btree ("_order");
  CREATE INDEX "forms_blocks_textarea_parent_id_idx" ON "forms_blocks_textarea" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_textarea_path_idx" ON "forms_blocks_textarea" USING btree ("_path");
  CREATE INDEX "forms_blocks_date_order_idx" ON "forms_blocks_date" USING btree ("_order");
  CREATE INDEX "forms_blocks_date_parent_id_idx" ON "forms_blocks_date" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_date_path_idx" ON "forms_blocks_date" USING btree ("_path");
  CREATE INDEX "forms_emails_order_idx" ON "forms_emails" USING btree ("_order");
  CREATE INDEX "forms_emails_parent_id_idx" ON "forms_emails" USING btree ("_parent_id");
  CREATE INDEX "forms_updated_at_idx" ON "forms" USING btree ("updated_at");
  CREATE INDEX "forms_created_at_idx" ON "forms" USING btree ("created_at");
  CREATE INDEX "form_submissions_submission_data_order_idx" ON "form_submissions_submission_data" USING btree ("_order");
  CREATE INDEX "form_submissions_submission_data_parent_id_idx" ON "form_submissions_submission_data" USING btree ("_parent_id");
  CREATE INDEX "form_submissions_form_idx" ON "form_submissions" USING btree ("form_id");
  CREATE INDEX "form_submissions_updated_at_idx" ON "form_submissions" USING btree ("updated_at");
  CREATE INDEX "form_submissions_created_at_idx" ON "form_submissions" USING btree ("created_at");
  CREATE INDEX "payload_jobs_log_order_idx" ON "payload_jobs_log" USING btree ("_order");
  CREATE INDEX "payload_jobs_log_parent_id_idx" ON "payload_jobs_log" USING btree ("_parent_id");
  CREATE INDEX "payload_jobs_completed_at_idx" ON "payload_jobs" USING btree ("completed_at");
  CREATE INDEX "payload_jobs_total_tried_idx" ON "payload_jobs" USING btree ("total_tried");
  CREATE INDEX "payload_jobs_has_error_idx" ON "payload_jobs" USING btree ("has_error");
  CREATE INDEX "payload_jobs_task_slug_idx" ON "payload_jobs" USING btree ("task_slug");
  CREATE INDEX "payload_jobs_queue_idx" ON "payload_jobs" USING btree ("queue");
  CREATE INDEX "payload_jobs_wait_until_idx" ON "payload_jobs" USING btree ("wait_until");
  CREATE INDEX "payload_jobs_processing_idx" ON "payload_jobs" USING btree ("processing");
  CREATE INDEX "payload_jobs_updated_at_idx" ON "payload_jobs" USING btree ("updated_at");
  CREATE INDEX "payload_jobs_created_at_idx" ON "payload_jobs" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_news_posts_id_idx" ON "payload_locked_documents_rels" USING btree ("news_posts_id");
  CREATE INDEX "payload_locked_documents_rels_newsletters_id_idx" ON "payload_locked_documents_rels" USING btree ("newsletters_id");
  CREATE INDEX "payload_locked_documents_rels_contacts_id_idx" ON "payload_locked_documents_rels" USING btree ("contacts_id");
  CREATE INDEX "payload_locked_documents_rels_dioceses_id_idx" ON "payload_locked_documents_rels" USING btree ("dioceses_id");
  CREATE INDEX "payload_locked_documents_rels_courts_id_idx" ON "payload_locked_documents_rels" USING btree ("courts_id");
  CREATE INDEX "payload_locked_documents_rels_events_id_idx" ON "payload_locked_documents_rels" USING btree ("events_id");
  CREATE INDEX "payload_locked_documents_rels_fundraisers_id_idx" ON "payload_locked_documents_rels" USING btree ("fundraisers_id");
  CREATE INDEX "payload_locked_documents_rels_projects_id_idx" ON "payload_locked_documents_rels" USING btree ("projects_id");
  CREATE INDEX "payload_locked_documents_rels_charities_id_idx" ON "payload_locked_documents_rels" USING btree ("charities_id");
  CREATE INDEX "payload_locked_documents_rels_redirects_id_idx" ON "payload_locked_documents_rels" USING btree ("redirects_id");
  CREATE INDEX "payload_locked_documents_rels_forms_id_idx" ON "payload_locked_documents_rels" USING btree ("forms_id");
  CREATE INDEX "payload_locked_documents_rels_form_submissions_id_idx" ON "payload_locked_documents_rels" USING btree ("form_submissions_id");
  CREATE INDEX "payload_locked_documents_rels_payload_jobs_id_idx" ON "payload_locked_documents_rels" USING btree ("payload_jobs_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "header_nav_items_sub_nav_links_order_idx" ON "header_nav_items_sub_nav_links" USING btree ("_order");
  CREATE INDEX "header_nav_items_sub_nav_links_parent_id_idx" ON "header_nav_items_sub_nav_links" USING btree ("_parent_id");
  CREATE INDEX "header_nav_items_sub_nav_order_idx" ON "header_nav_items_sub_nav" USING btree ("_order");
  CREATE INDEX "header_nav_items_sub_nav_parent_id_idx" ON "header_nav_items_sub_nav" USING btree ("_parent_id");
  CREATE INDEX "header_nav_items_order_idx" ON "header_nav_items" USING btree ("_order");
  CREATE INDEX "header_nav_items_parent_id_idx" ON "header_nav_items" USING btree ("_parent_id");
  CREATE INDEX "header_nav_buttons_order_idx" ON "header_nav_buttons" USING btree ("_order");
  CREATE INDEX "header_nav_buttons_parent_id_idx" ON "header_nav_buttons" USING btree ("_parent_id");
  CREATE INDEX "header_logo_idx" ON "header" USING btree ("logo_id");
  CREATE INDEX "header_rels_order_idx" ON "header_rels" USING btree ("order");
  CREATE INDEX "header_rels_parent_idx" ON "header_rels" USING btree ("parent_id");
  CREATE INDEX "header_rels_path_idx" ON "header_rels" USING btree ("path");
  CREATE INDEX "header_rels_pages_id_idx" ON "header_rels" USING btree ("pages_id");
  CREATE INDEX "header_rels_charities_id_idx" ON "header_rels" USING btree ("charities_id");
  CREATE INDEX "header_rels_events_id_idx" ON "header_rels" USING btree ("events_id");
  CREATE INDEX "header_rels_fundraisers_id_idx" ON "header_rels" USING btree ("fundraisers_id");
  CREATE INDEX "header_rels_projects_id_idx" ON "header_rels" USING btree ("projects_id");
  CREATE INDEX "header_rels_courts_id_idx" ON "header_rels" USING btree ("courts_id");
  CREATE INDEX "footer_nav_items_order_idx" ON "footer_nav_items" USING btree ("_order");
  CREATE INDEX "footer_nav_items_parent_id_idx" ON "footer_nav_items" USING btree ("_parent_id");
  CREATE INDEX "footer_social_media_order_idx" ON "footer_social_media" USING btree ("_order");
  CREATE INDEX "footer_social_media_parent_id_idx" ON "footer_social_media" USING btree ("_parent_id");
  CREATE INDEX "footer_logo_idx" ON "footer" USING btree ("logo_id");
  CREATE INDEX "footer_rels_order_idx" ON "footer_rels" USING btree ("order");
  CREATE INDEX "footer_rels_parent_idx" ON "footer_rels" USING btree ("parent_id");
  CREATE INDEX "footer_rels_path_idx" ON "footer_rels" USING btree ("path");
  CREATE INDEX "footer_rels_pages_id_idx" ON "footer_rels" USING btree ("pages_id");
  CREATE INDEX "footer_rels_charities_id_idx" ON "footer_rels" USING btree ("charities_id");
  CREATE INDEX "footer_rels_events_id_idx" ON "footer_rels" USING btree ("events_id");
  CREATE INDEX "footer_rels_fundraisers_id_idx" ON "footer_rels" USING btree ("fundraisers_id");
  CREATE INDEX "footer_rels_projects_id_idx" ON "footer_rels" USING btree ("projects_id");
  CREATE INDEX "footer_rels_courts_id_idx" ON "footer_rels" USING btree ("courts_id");`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_high_impact_hero_links" CASCADE;
  DROP TABLE "pages_blocks_high_impact_hero" CASCADE;
  DROP TABLE "pages_blocks_low_impact_hero" CASCADE;
  DROP TABLE "pages_blocks_media_right_hero_links" CASCADE;
  DROP TABLE "pages_blocks_media_right_hero" CASCADE;
  DROP TABLE "pages_blocks_content_columns" CASCADE;
  DROP TABLE "pages_blocks_content" CASCADE;
  DROP TABLE "pages_blocks_news_posts" CASCADE;
  DROP TABLE "pages_blocks_newsletters" CASCADE;
  DROP TABLE "pages_blocks_slider_slides_links" CASCADE;
  DROP TABLE "pages_blocks_slider_slides" CASCADE;
  DROP TABLE "pages_blocks_slider" CASCADE;
  DROP TABLE "pages_blocks_stats_stats" CASCADE;
  DROP TABLE "pages_blocks_stats" CASCADE;
  DROP TABLE "pages_blocks_side_bar_sections" CASCADE;
  DROP TABLE "pages_blocks_side_bar" CASCADE;
  DROP TABLE "pages_blocks_calendar_months_items" CASCADE;
  DROP TABLE "pages_blocks_calendar_months" CASCADE;
  DROP TABLE "pages_blocks_calendar" CASCADE;
  DROP TABLE "pages_blocks_contact_cards" CASCADE;
  DROP TABLE "pages_blocks_tabs_tabs" CASCADE;
  DROP TABLE "pages_blocks_tabs" CASCADE;
  DROP TABLE "pages_blocks_court_listing" CASCADE;
  DROP TABLE "pages_blocks_diocese_listing" CASCADE;
  DROP TABLE "pages_blocks_archive" CASCADE;
  DROP TABLE "pages_blocks_media_block_links" CASCADE;
  DROP TABLE "pages_blocks_media_block" CASCADE;
  DROP TABLE "pages_blocks_banner" CASCADE;
  DROP TABLE "pages_blocks_cta_links" CASCADE;
  DROP TABLE "pages_blocks_cta" CASCADE;
  DROP TABLE "pages_blocks_form_block" CASCADE;
  DROP TABLE "pages_breadcrumbs" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pages_rels" CASCADE;
  DROP TABLE "_pages_v_blocks_high_impact_hero_links" CASCADE;
  DROP TABLE "_pages_v_blocks_high_impact_hero" CASCADE;
  DROP TABLE "_pages_v_blocks_low_impact_hero" CASCADE;
  DROP TABLE "_pages_v_blocks_media_right_hero_links" CASCADE;
  DROP TABLE "_pages_v_blocks_media_right_hero" CASCADE;
  DROP TABLE "_pages_v_blocks_content_columns" CASCADE;
  DROP TABLE "_pages_v_blocks_content" CASCADE;
  DROP TABLE "_pages_v_blocks_news_posts" CASCADE;
  DROP TABLE "_pages_v_blocks_newsletters" CASCADE;
  DROP TABLE "_pages_v_blocks_slider_slides_links" CASCADE;
  DROP TABLE "_pages_v_blocks_slider_slides" CASCADE;
  DROP TABLE "_pages_v_blocks_slider" CASCADE;
  DROP TABLE "_pages_v_blocks_stats_stats" CASCADE;
  DROP TABLE "_pages_v_blocks_stats" CASCADE;
  DROP TABLE "_pages_v_blocks_side_bar_sections" CASCADE;
  DROP TABLE "_pages_v_blocks_side_bar" CASCADE;
  DROP TABLE "_pages_v_blocks_calendar_months_items" CASCADE;
  DROP TABLE "_pages_v_blocks_calendar_months" CASCADE;
  DROP TABLE "_pages_v_blocks_calendar" CASCADE;
  DROP TABLE "_pages_v_blocks_contact_cards" CASCADE;
  DROP TABLE "_pages_v_blocks_tabs_tabs" CASCADE;
  DROP TABLE "_pages_v_blocks_tabs" CASCADE;
  DROP TABLE "_pages_v_blocks_court_listing" CASCADE;
  DROP TABLE "_pages_v_blocks_diocese_listing" CASCADE;
  DROP TABLE "_pages_v_blocks_archive" CASCADE;
  DROP TABLE "_pages_v_blocks_media_block_links" CASCADE;
  DROP TABLE "_pages_v_blocks_media_block" CASCADE;
  DROP TABLE "_pages_v_blocks_banner" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_links" CASCADE;
  DROP TABLE "_pages_v_blocks_cta" CASCADE;
  DROP TABLE "_pages_v_blocks_form_block" CASCADE;
  DROP TABLE "_pages_v_version_breadcrumbs" CASCADE;
  DROP TABLE "_pages_v" CASCADE;
  DROP TABLE "_pages_v_rels" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "news_posts_links" CASCADE;
  DROP TABLE "news_posts" CASCADE;
  DROP TABLE "news_posts_rels" CASCADE;
  DROP TABLE "newsletters" CASCADE;
  DROP TABLE "contacts_roles" CASCADE;
  DROP TABLE "contacts_positions" CASCADE;
  DROP TABLE "contacts_officer_type" CASCADE;
  DROP TABLE "contacts" CASCADE;
  DROP TABLE "dioceses" CASCADE;
  DROP TABLE "dioceses_rels" CASCADE;
  DROP TABLE "courts" CASCADE;
  DROP TABLE "courts_rels" CASCADE;
  DROP TABLE "_courts_v" CASCADE;
  DROP TABLE "_courts_v_rels" CASCADE;
  DROP TABLE "events" CASCADE;
  DROP TABLE "events_rels" CASCADE;
  DROP TABLE "_events_v" CASCADE;
  DROP TABLE "_events_v_rels" CASCADE;
  DROP TABLE "fundraisers" CASCADE;
  DROP TABLE "fundraisers_rels" CASCADE;
  DROP TABLE "_fundraisers_v" CASCADE;
  DROP TABLE "_fundraisers_v_rels" CASCADE;
  DROP TABLE "projects" CASCADE;
  DROP TABLE "projects_rels" CASCADE;
  DROP TABLE "_projects_v" CASCADE;
  DROP TABLE "_projects_v_rels" CASCADE;
  DROP TABLE "charities" CASCADE;
  DROP TABLE "charities_rels" CASCADE;
  DROP TABLE "_charities_v" CASCADE;
  DROP TABLE "_charities_v_rels" CASCADE;
  DROP TABLE "redirects" CASCADE;
  DROP TABLE "redirects_rels" CASCADE;
  DROP TABLE "forms_blocks_checkbox" CASCADE;
  DROP TABLE "forms_blocks_country" CASCADE;
  DROP TABLE "forms_blocks_email" CASCADE;
  DROP TABLE "forms_blocks_message" CASCADE;
  DROP TABLE "forms_blocks_number" CASCADE;
  DROP TABLE "forms_blocks_select_options" CASCADE;
  DROP TABLE "forms_blocks_select" CASCADE;
  DROP TABLE "forms_blocks_state" CASCADE;
  DROP TABLE "forms_blocks_text" CASCADE;
  DROP TABLE "forms_blocks_textarea" CASCADE;
  DROP TABLE "forms_blocks_date" CASCADE;
  DROP TABLE "forms_emails" CASCADE;
  DROP TABLE "forms" CASCADE;
  DROP TABLE "form_submissions_submission_data" CASCADE;
  DROP TABLE "form_submissions" CASCADE;
  DROP TABLE "payload_jobs_log" CASCADE;
  DROP TABLE "payload_jobs" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "header_nav_items_sub_nav_links" CASCADE;
  DROP TABLE "header_nav_items_sub_nav" CASCADE;
  DROP TABLE "header_nav_items" CASCADE;
  DROP TABLE "header_nav_buttons" CASCADE;
  DROP TABLE "header" CASCADE;
  DROP TABLE "header_rels" CASCADE;
  DROP TABLE "footer_nav_items" CASCADE;
  DROP TABLE "footer_social_media" CASCADE;
  DROP TABLE "footer" CASCADE;
  DROP TABLE "footer_rels" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_high_impact_hero_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_high_impact_hero_links_link_color";
  DROP TYPE "public"."enum_pages_blocks_high_impact_hero_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_media_right_hero_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_media_right_hero_links_link_color";
  DROP TYPE "public"."enum_pages_blocks_media_right_hero_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_media_right_hero_button_type";
  DROP TYPE "public"."enum_pages_blocks_content_columns_size";
  DROP TYPE "public"."enum_pages_blocks_content_columns_link_type";
  DROP TYPE "public"."enum_pages_blocks_content_columns_link_color";
  DROP TYPE "public"."enum_pages_blocks_content_columns_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_news_posts_selection_type";
  DROP TYPE "public"."enum_pages_blocks_newsletters_selection_type";
  DROP TYPE "public"."enum_pages_blocks_newsletters_auto_population_type";
  DROP TYPE "public"."enum_pages_blocks_slider_slides_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_slider_slides_links_link_color";
  DROP TYPE "public"."enum_pages_blocks_slider_slides_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_side_bar_alignment";
  DROP TYPE "public"."enum_pages_blocks_contact_cards_contact_position";
  DROP TYPE "public"."enum_pages_blocks_contact_cards_officer_type";
  DROP TYPE "public"."enum_pages_blocks_court_listing_selection_type";
  DROP TYPE "public"."enum_pages_blocks_diocese_listing_selection_type";
  DROP TYPE "public"."enum_pages_blocks_archive_populate_by";
  DROP TYPE "public"."enum_pages_blocks_archive_relation_to";
  DROP TYPE "public"."enum_pages_blocks_archive_type";
  DROP TYPE "public"."enum_pages_blocks_media_block_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_media_block_links_link_color";
  DROP TYPE "public"."enum_pages_blocks_media_block_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_media_block_content_type";
  DROP TYPE "public"."enum_pages_blocks_media_block_media_alignment";
  DROP TYPE "public"."enum_pages_blocks_banner_style";
  DROP TYPE "public"."enum_pages_blocks_cta_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_cta_links_link_color";
  DROP TYPE "public"."enum_pages_blocks_cta_links_link_appearance";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum__pages_v_blocks_high_impact_hero_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_high_impact_hero_links_link_color";
  DROP TYPE "public"."enum__pages_v_blocks_high_impact_hero_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_media_right_hero_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_media_right_hero_links_link_color";
  DROP TYPE "public"."enum__pages_v_blocks_media_right_hero_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_media_right_hero_button_type";
  DROP TYPE "public"."enum__pages_v_blocks_content_columns_size";
  DROP TYPE "public"."enum__pages_v_blocks_content_columns_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_content_columns_link_color";
  DROP TYPE "public"."enum__pages_v_blocks_content_columns_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_news_posts_selection_type";
  DROP TYPE "public"."enum__pages_v_blocks_newsletters_selection_type";
  DROP TYPE "public"."enum__pages_v_blocks_newsletters_auto_population_type";
  DROP TYPE "public"."enum__pages_v_blocks_slider_slides_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_slider_slides_links_link_color";
  DROP TYPE "public"."enum__pages_v_blocks_slider_slides_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_side_bar_alignment";
  DROP TYPE "public"."enum__pages_v_blocks_contact_cards_contact_position";
  DROP TYPE "public"."enum__pages_v_blocks_contact_cards_officer_type";
  DROP TYPE "public"."enum__pages_v_blocks_court_listing_selection_type";
  DROP TYPE "public"."enum__pages_v_blocks_diocese_listing_selection_type";
  DROP TYPE "public"."enum__pages_v_blocks_archive_populate_by";
  DROP TYPE "public"."enum__pages_v_blocks_archive_relation_to";
  DROP TYPE "public"."enum__pages_v_blocks_archive_type";
  DROP TYPE "public"."enum__pages_v_blocks_media_block_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_media_block_links_link_color";
  DROP TYPE "public"."enum__pages_v_blocks_media_block_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_media_block_content_type";
  DROP TYPE "public"."enum__pages_v_blocks_media_block_media_alignment";
  DROP TYPE "public"."enum__pages_v_blocks_banner_style";
  DROP TYPE "public"."enum__pages_v_blocks_cta_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_cta_links_link_color";
  DROP TYPE "public"."enum__pages_v_blocks_cta_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_version_status";
  DROP TYPE "public"."enum_news_posts_links_link_type";
  DROP TYPE "public"."enum_news_posts_links_link_color";
  DROP TYPE "public"."enum_newsletters_type";
  DROP TYPE "public"."enum_contacts_positions";
  DROP TYPE "public"."enum_contacts_officer_type";
  DROP TYPE "public"."enum_dioceses_website_type";
  DROP TYPE "public"."enum_dioceses_website_color";
  DROP TYPE "public"."enum_courts_website_type";
  DROP TYPE "public"."enum_courts_website_color";
  DROP TYPE "public"."enum_courts_website_appearance";
  DROP TYPE "public"."enum_courts_status";
  DROP TYPE "public"."enum__courts_v_version_website_type";
  DROP TYPE "public"."enum__courts_v_version_website_color";
  DROP TYPE "public"."enum__courts_v_version_website_appearance";
  DROP TYPE "public"."enum__courts_v_version_status";
  DROP TYPE "public"."enum_events_type";
  DROP TYPE "public"."enum_events_status";
  DROP TYPE "public"."enum__events_v_version_type";
  DROP TYPE "public"."enum__events_v_version_status";
  DROP TYPE "public"."enum_fundraisers_type";
  DROP TYPE "public"."enum_fundraisers_status";
  DROP TYPE "public"."enum__fundraisers_v_version_type";
  DROP TYPE "public"."enum__fundraisers_v_version_status";
  DROP TYPE "public"."enum_projects_type";
  DROP TYPE "public"."enum_projects_status";
  DROP TYPE "public"."enum__projects_v_version_type";
  DROP TYPE "public"."enum__projects_v_version_status";
  DROP TYPE "public"."enum_charities_type";
  DROP TYPE "public"."enum_charities_status";
  DROP TYPE "public"."enum__charities_v_version_type";
  DROP TYPE "public"."enum__charities_v_version_status";
  DROP TYPE "public"."enum_redirects_to_type";
  DROP TYPE "public"."enum_forms_blocks_text_type";
  DROP TYPE "public"."enum_forms_confirmation_type";
  DROP TYPE "public"."enum_payload_jobs_log_task_slug";
  DROP TYPE "public"."enum_payload_jobs_log_state";
  DROP TYPE "public"."enum_payload_jobs_task_slug";
  DROP TYPE "public"."enum_header_nav_items_sub_nav_links_link_type";
  DROP TYPE "public"."enum_header_nav_items_sub_nav_links_link_color";
  DROP TYPE "public"."enum_header_nav_items_link_type";
  DROP TYPE "public"."enum_header_nav_items_link_color";
  DROP TYPE "public"."enum_header_nav_buttons_link_type";
  DROP TYPE "public"."enum_header_nav_buttons_link_color";
  DROP TYPE "public"."enum_header_nav_buttons_link_appearance";
  DROP TYPE "public"."enum_footer_nav_items_link_type";
  DROP TYPE "public"."enum_footer_nav_items_link_color";
  DROP TYPE "public"."enum_footer_social_media_platform";`)
}
