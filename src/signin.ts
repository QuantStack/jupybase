import { createClient } from './client';
import { MAIN_APP_PUBLIC_URL, QSAI_COOKIE_NAME } from './config';

export const getURL = (path: string = '') => {
  let url = MAIN_APP_PUBLIC_URL;

  url = url.replace(/\/+$/, '');
  // Make sure to include `https://` when not localhost.
  url = url.includes('http') ? url : `https://${url}`;

  path = path.replace(/^\/+/, '');

  return path ? `${url}/${path}` : url;
};

export function extractCookies() {
  const cookies = document.cookie
    .split(/\s*;\s*/)
    .map(cookie => cookie.split('='));
  const isAccessToken = (name: string) => name === QSAI_COOKIE_NAME.accessToken;

  const isRefreshToken = (name: string) =>
    name === QSAI_COOKIE_NAME.refreshToken;

  const accessTokenCookie = cookies.find(x => isAccessToken(x[0]));
  const refreshTokenCookie = cookies.find(x => isRefreshToken(x[0]));
  if (accessTokenCookie && refreshTokenCookie) {
    return { accessTokenCookie, refreshTokenCookie };
  }
  return undefined;
}
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
