import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://dmvbmnngzzjmocydbvdo.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtdmJtbm5nenpqbW9jeWRidmRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIxNzc2MzEsImV4cCI6MjA0Nzc1MzYzMX0.e6H55imqeOEl1KleN6l36L4M26W55FdU1whE9p_ZWmM"

export const supabase = createClient(supabaseUrl, supabaseKey)