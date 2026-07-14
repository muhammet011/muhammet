// ============================================================
//  AYAR DOSYASI — Bu dosyayı bir kez düzenlemen yeterli.
//  Tüm sayfalar (makaleler.html, makale.html, admin.html)
//  bu dosyayı kullanır.
// ============================================================

// 1) Supabase projenizin "Project URL" değeri
//    (Supabase Dashboard > Project Settings > API)
const SUPABASE_URL = "https://hliipzizstedaoyipctb.supabase.co";

// 2) Supabase projenizin "anon public" API anahtarı
//    (Supabase Dashboard > Project Settings > API)
const SUPABASE_ANON_KEY = "sb_publishable_uKVgQxf1RhITp49Ny4x1Hw_jeSRr3_T";

// 3) Admin paneline giriş şifresi (istediğiniz gibi değiştirin)
//    NOT: Bu basit bir kapı şifresidir, gelişmiş güvenlik sağlamaz.
//    Admin panelinin adresini (admin.html) kimseyle paylaşmayın.
const ADMIN_PASSWORD = "eskipazar2026";

// ============================================================
// Aşağıyı değiştirmenize gerek yok.
// ============================================================
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
