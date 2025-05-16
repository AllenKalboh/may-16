import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://vhcejvpppdvfwvfqkldx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZoY2VqdnBwcGR2Znd2ZnFrbGR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYxNjk0MDAsImV4cCI6MjA2MTc0NTQwMH0.CbzrC9WKm37k4D-qcilhn59KPHD2_6wE383qNITH-kI";
export const supabase = createClient(supabaseUrl, supabaseKey);
