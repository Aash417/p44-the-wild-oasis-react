import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://rahyzmexvplfykagtati.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhaHl6bWV4dnBsZnlrYWd0YXRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM4NzgyNDAsImV4cCI6MjAxOTQ1NDI0MH0.fEjr52bu6jwXgibEnYAKZGG6mWty87wULgEjR5Xj-M8';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
