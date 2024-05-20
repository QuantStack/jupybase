export const NEXT_PUBLIC_SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL || '{@{NEXT_PUBLIC_SUPABASE_URL}@}';

export const NEXT_PUBLIC_SUPABASE_S3_URL =
  process.env.NEXT_PUBLIC_SUPABASE_S3_URL ||
  '{@{NEXT_PUBLIC_SUPABASE_S3_URL}@}';

export const NEXT_PUBLIC_SUPABASE_PROJECT_REF =
  process.env.NEXT_PUBLIC_SUPABASE_PROJECT_REF ||
  '{@{NEXT_PUBLIC_SUPABASE_PROJECT_REF}@}';

export const NEXT_PUBLIC_SUPABASE_S3_REGION =
  process.env.NEXT_PUBLIC_SUPABASE_S3_REGION ||
  '{@{NEXT_PUBLIC_SUPABASE_S3_REGION}@}';

export const NEXT_PUBLIC_SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  '{@{NEXT_PUBLIC_SUPABASE_ANON_KEY}@}';

export const MAIN_APP_PUBLIC_URL =
  process.env.MAIN_APP_PUBLIC_URL || '{@{MAIN_APP_PUBLIC_URL}@}';

export const QSAI_COOKIE_NAME = {
  accessToken: 'qsai-access-token',
  refreshToken: 'qsai-refresh-token'
};
