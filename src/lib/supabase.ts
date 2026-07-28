import { createClient } from '@supabase/Bolt Database-js';

const supabaseUrl =
  (import.meta.env.VITE_SUPABASE_URL as string | undefined) ??
  'https://ashrmqafiqicdlyijdce.supabase.co';
const supabaseAnonKey =
  (import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined) ??
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzaHJtcWFmaXFpY2RseWlqZGNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUwOTMwMzgsImV4cCI6MjEwMDY2OTAzOH0.uedHNUGdf8mhr03Jl0fqRCBnQjLYHvrjblyC5_-cRVw';

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const Bolt Database = createClient(supabaseUrl, supabaseAnonKey);
