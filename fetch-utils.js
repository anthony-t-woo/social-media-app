const SUPABASE_URL = 'https://xymrqgrvifsouxppmhgn.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5bXJxZ3J2aWZzb3V4cHBtaGduIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQyNTU0ODMsImV4cCI6MTk4OTgzMTQ4M30.4HEq-XtAOWoYJ8ORsZ4vhxk-S8ri8ZYiulgXBYkUSZY';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({
        email,
        password,
    });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({
        email,
        password,
    });
}

export async function signOutUser() {
    return await client.auth.signOut();
}

export async function checkAuth() {
    if (!getUser()) {
        location.replace('./auth');
    }
}

export async function createProfile(email, username, bio) {
    console.log('profile');
    await client.from('profiles').insert({ email, username, bio });
}
/* Data functions */

export async function getProfiles() {
    const { data, error } = await client.from('profiles').select('*');
    return data;
}

export async function getProfileById(id) {
    const { data, error } = await client.from('profiles').select('*').eq('user_id', id);
    return data[0];
}

export async function updateKarma(id, karma) {
    await client.from('profiles').update([{ karma }]).eq('user_id', id);
}
