-- Prepared source-only freeze. Never execute while keys/callback/provider QA are pending.
-- Stops only the 21 audited Mitos tables, including direct workshop writers.
BEGIN;
SET LOCAL lock_timeout = '5s';
CREATE SCHEMA mitos_cutover_v1;
COMMENT ON SCHEMA mitos_cutover_v1 IS 'Mitos own-table writer freeze v1';
CREATE FUNCTION mitos_cutover_v1.reject_write() RETURNS trigger LANGUAGE plpgsql AS $$
BEGIN
 RAISE EXCEPTION 'Mitos migration writer freeze is active' USING ERRCODE='55000';
END;
$$;
COMMENT ON FUNCTION mitos_cutover_v1.reject_write() IS 'Mitos own-table writer freeze v1';
DO $$
DECLARE t text;
BEGIN
 FOREACH t IN ARRAY ARRAY['comments','communities','contact_messages','editorial_myth_keywords','editorial_myth_research','editorial_myth_tags','editorial_myths','home_banners','myth_keywords','myth_narrations','myth_tags','myths','narration_beds','regions','seo_pages','tags','tarot_cards','tarot_orders','tarot_user_sessions','tarot_users','vertical_images'] LOOP
  EXECUTE format('LOCK TABLE public.%I IN SHARE ROW EXCLUSIVE MODE',t);
  EXECUTE format('CREATE TRIGGER mitos_cutover_write_guard_v1 BEFORE INSERT OR UPDATE OR DELETE OR TRUNCATE ON public.%I FOR EACH STATEMENT EXECUTE FUNCTION mitos_cutover_v1.reject_write()',t);
 END LOOP;
END;
$$;
COMMIT;
