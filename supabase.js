// Este archivo se ejecuta DESPUÉS que se carga la librería Supabase
const SUPABASE_URL = "https://kctitomnuvrmdumrybes.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjdGl0b21udXZybWR1bXJ5YmVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3NzA4OTcsImV4cCI6MjA2MDM0Njg5N30.syXuvkyaxoQWcJx0xhSUXhmrI1yOGF5SFZADd7lGEts";

// 👇 Esto espera que ya se haya cargado la librería Supabase en login.html
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
