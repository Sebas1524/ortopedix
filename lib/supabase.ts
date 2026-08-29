import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://skqnunkbnnlsykfnpgcy.supabase.co";
const supabaseAnonKey = "sb_publishable_XioCnx1jeJNgRQHAPTM4Pg_AdlllZyc";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
