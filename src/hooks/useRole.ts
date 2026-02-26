import { useAppSelector } from '@/hooks/redux';

export const useRole = () => {
  const role = useAppSelector((state) => state.auth.role);
  return { role };
};
