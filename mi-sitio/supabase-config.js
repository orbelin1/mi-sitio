// supabase-config.js
// Conexión del sitio con Supabase.
// Solo va la clave PÚBLICA (publishable / anon). NUNCA la service_role / secret.
const SUPABASE_URL = 'https://ionjzdmsaaqnrardmleo.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_hqykE3v3WEYPexRZybkJPA_X9b8dq8G';

var supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
