-- Baseline schema migration for DSA OS app tables

-- Extensions used for UUIDs etc.
CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";
CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";

-- =========================
-- profiles
-- =========================
CREATE TABLE IF NOT EXISTS "public"."profiles" (
    "id" "uuid" NOT NULL,
    "email" "text",
    "display_name" "text",
    "avatar_url" "text",
    "bio" "text",
    "preferences" "jsonb" DEFAULT '{}'::"jsonb",
    "created_at" timestamp with time zone DEFAULT "now"(),
    "updated_at" timestamp with time zone DEFAULT "now"()
);

-- =========================
-- patterns
-- =========================
CREATE TABLE IF NOT EXISTS "public"."patterns" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "slug" "text" NOT NULL,
    "name" "text" NOT NULL,
    "category" "text",
    "description" "text",
    "order_index" integer,
    "created_at" timestamp with time zone DEFAULT "now"(),
    "status" "text" DEFAULT 'not-started'::"text",
    "solved_count" integer DEFAULT 0,
    "total_problems" integer DEFAULT 10
);

-- =========================
-- problems
-- =========================
CREATE TABLE IF NOT EXISTS "public"."problems" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "pattern_id" "uuid" NOT NULL,
    "title" "text" NOT NULL,
    "source" "text" NOT NULL,
    "external_id" "text",
    "link" "text",
    "difficulty" "text",
    "is_active" boolean DEFAULT true,
    "created_at" timestamp with time zone DEFAULT "now"()
);

-- =========================
-- problem_explanations
-- =========================
CREATE TABLE IF NOT EXISTS "public"."problem_explanations" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "problem_id" "uuid" NOT NULL,
    "short_reason" "text",
    "explanation" "text",
    "hints" "text",
    "pattern_triggers" "text"[],
    "pitfalls" "text",
    "constraints_summary" "text",
    "created_at" timestamp with time zone DEFAULT "now"()
);

-- =========================
-- user_problem_progress
-- =========================
CREATE TABLE IF NOT EXISTS "public"."user_problem_progress" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "user_id" "uuid" NOT NULL,
    "problem_id" "uuid" NOT NULL,
    "status" "text" DEFAULT 'unsolved'::"text" NOT NULL,
    "attempts" integer DEFAULT 0,
    "last_attempt_at" timestamp with time zone,
    "last_result" "text",
    "notes" "text",
    "rating" integer,
    "created_at" timestamp with time zone DEFAULT "now"()
);

-- =========================
-- daily_logs
-- =========================
CREATE TABLE IF NOT EXISTS "public"."daily_logs" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "user_id" "uuid" NOT NULL,
    "log_date" "date" NOT NULL,
    "problems_read" "jsonb",
    "problem_solved" "uuid",
    "pattern_id" "uuid",
    "time_spent_minutes" integer,
    "mistakes" "text",
    "confidence" "text",
    "notes" "text",
    "created_at" timestamp with time zone DEFAULT "now"()
);

-- =========================
-- pattern_notes
-- =========================
CREATE TABLE IF NOT EXISTS "public"."pattern_notes" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "user_id" "uuid" NOT NULL,
    "pattern_id" "uuid" NOT NULL,
    "content" "text",
    "created_at" timestamp with time zone DEFAULT "now"(),
    "updated_at" timestamp with time zone DEFAULT "now"()
);

-- =========================
-- weekly_plans
-- =========================
CREATE TABLE IF NOT EXISTS "public"."weekly_plans" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "user_id" "uuid" NOT NULL,
    "week_number" integer NOT NULL,
    "year" integer NOT NULL,
    "pattern_id" "uuid",
    "status" "text" DEFAULT 'not_started'::"text",
    "checklist" "jsonb",
    "notes" "text",
    "created_at" timestamp with time zone DEFAULT "now"()
);

-- =========================
-- Row Level Security (RLS) enabling
-- =========================
ALTER TABLE "public"."daily_logs" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."pattern_notes" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."problems" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."profiles" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."user_problem_progress" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."weekly_plans" ENABLE ROW LEVEL SECURITY;
