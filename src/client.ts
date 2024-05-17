import { createClient as defaultCreateClient } from '@supabase/supabase-js';
import {
  NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY
} from './config';

export const createClient = () =>
  defaultCreateClient(
    // Pass Supabase URL and anonymous key from the environment to the client
    NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
