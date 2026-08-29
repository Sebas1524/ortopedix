import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://skqnunkbnnlsykfnpgcy.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrcW51bmtibm5sc3lrZm5wZ2N5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgwMjYzNDUsImV4cCI6MjEwMzYwMjM0NX0.CmE2x7iZz2LO96hDhub2iS7ml4Q3RSwW5h73COYI1ao";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
