// Global types for the application
export type SampleRole = 'admin' | 'editor' | 'viewer';

export interface SampleUser {
  id: string;
  email: string;
  username: string;
  role: SampleRole;
  avatarUrl?: string;
}