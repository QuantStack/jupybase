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

export interface IEnvironmentContent {
  kernelEnv: string;
  buildEnv: string;
  dependencies: string[];
  lockfile: string;
}

/**
 * A promise that resolves to project and environment information.
 */
export interface IProjectInfo {
  factory: () => Promise<{
    name: string;
    description: string;
    details: string;
    environment: IEnvironmentContent;
  }>;
}

/**
 * A token for the plugin that provides project information.
 */
export const IProjectInfo = new Token<IProjectInfo>(
  'jupybase:project-info-provider'
);

export interface IUser {
  name: string;
  email: string;
  role?: string;
}
