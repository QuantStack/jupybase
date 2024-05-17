import { createClient } from './client';
import { MAIN_APP_PUBLIC_URL } from './config';

export const getURL = (path: string = '') => {
  let url = MAIN_APP_PUBLIC_URL;

  url = url.replace(/\/+$/, '');
  // Make sure to include `https://` when not localhost.
  url = url.includes('http') ? url : `https://${url}`;

  path = path.replace(/^\/+/, '');

  return path ? `${url}/${path}` : url;
};

export async function signInWithOAuth() {
  const provider = 'github';

  // Create client-side supabase client and call signInWithOAuth
  const supabase = createClient();
  const redirectURL = getURL('/auth/callback');
  await supabase.auth.signInWithOAuth({
    provider: provider,
    options: {
      redirectTo: redirectURL
    }
  });
}
