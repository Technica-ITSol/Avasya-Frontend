import { UserRole } from '@/types/auth';

const roleAccess: Record<UserRole, { parking: boolean; inventory: boolean }> = {
  SUPER_ADMIN: { parking: true, inventory: true },
  SOCIETY_ADMIN: { parking: true, inventory: true },
  MANAGER: { parking: true, inventory: true },
  STAFF: { parking: true, inventory: true },
  RESIDENT: { parking: true, inventory: false },
  GUARD: { parking: true, inventory: false }
};

export const canAccessFeature = (role: UserRole, feature: 'parking' | 'inventory') => roleAccess[role][feature];
