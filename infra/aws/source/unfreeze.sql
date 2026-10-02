-- Before accepting RDS writes: abort only after reconciling captured events/jobs.
-- After RDS acceptance this is NOT a safe DNS/Neon rollback; follow the runbook.
BEGIN;
SET LOCAL lock_timeout = '5s';
DO $$
DECLARE t text;
BEGIN
 IF obj_description('mitos_cutover_v1'::regnamespace,'pg_namespace') IS DISTINCT FROM 'Mitos own-table writer freeze v1' THEN
  RAISE EXCEPTION 'Freeze ownership mismatch';
 END IF;
 FOREACH t IN ARRAY ARRAY['comments','communities','contact_messages','editorial_myth_keywords','editorial_myth_research','editorial_myth_tags','editorial_myths','home_banners','myth_keywords','myth_narrations','myth_tags','myths','narration_beds','regions','seo_pages','tags','tarot_cards','tarot_orders','tarot_user_sessions','tarot_users','vertical_images'] LOOP
  IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgrelid=format('public.%I',t)::regclass AND tgname='mitos_cutover_write_guard_v1' AND tgfoid='mitos_cutover_v1.reject_write()'::regprocedure) THEN
   RAISE EXCEPTION 'Freeze guard missing on %',t;
  END IF;
  EXECUTE format('DROP TRIGGER mitos_cutover_write_guard_v1 ON public.%I',t);
 END LOOP;
END;
$$;
DROP FUNCTION mitos_cutover_v1.reject_write();
DROP SCHEMA mitos_cutover_v1;
COMMIT;
