import { UserRole } from '@/types/auth';

export const mockLogin = async (email: string): Promise<{ token: string; role: UserRole }> => {
  const role: UserRole = email.includes('super')
    ? 'SUPER_ADMIN'
    : email.includes('admin')
      ? 'SOCIETY_ADMIN'
      : 'MANAGER';

  await new Promise((resolve) => setTimeout(resolve, 400));

  return { token: 'mock-jwt-token', role };
};
