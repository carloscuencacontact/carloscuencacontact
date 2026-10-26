(() => {
  const config = window.ELVERTEX_SUPABASE_CONFIG;
  if (!config?.url || !config?.anonKey || !window.supabase?.createClient) return;

  window.elvertexSupabase = window.supabase.createClient(config.url, config.anonKey);
})();
