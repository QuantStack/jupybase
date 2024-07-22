import { Token } from '@lumino/coreutils';
import type { AxiosInstance } from 'axios';
import { SupabaseClient } from '@supabase/supabase-js';

export interface IJupybaseClient {
  supabaseClient?: SupabaseClient;
  apiClient?: AxiosInstance;
}
export const IJupybaseClient = new Token<IJupybaseClient>(
  'jupybase:IJupybaseClient'
);
