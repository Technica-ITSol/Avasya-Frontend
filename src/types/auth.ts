export type UserRole = 'SUPER_ADMIN' | 'SOCIETY_ADMIN' | 'MANAGER' | 'STAFF' | 'RESIDENT' | 'GUARD';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  societyId?: string;
}
