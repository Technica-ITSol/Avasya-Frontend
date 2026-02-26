import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { getInventoryThunk } from '@/slices/inventorySlice';
import { ScreenContainer } from '@/shared/components/ScreenContainer';
import { LoadingState } from '@/shared/states/LoadingState';
import { ErrorState } from '@/shared/states/ErrorState';
import { EmptyState } from '@/shared/states/EmptyState';
import { InventoryListItem } from '@/features/inventory/components/InventoryListItem';
import { theme } from '@/theme';

export const InventoryListScreen = () => {
  const dispatch = useAppDispatch();
  const { items, status, error } = useAppSelector((state) => state.inventory);

  useEffect(() => {
    dispatch(getInventoryThunk());
  }, [dispatch]);

  return (
    <ScreenContainer>
      <Text style={{ ...theme.typography.h2, color: theme.colors.textPrimary }}>Inventory List</Text>
      {status === 'loading' && <LoadingState />}
      {status === 'error' && <ErrorState message={error ?? undefined} />}
      {status === 'success' && items.length === 0 && (
        <EmptyState title="No inventory added yet" subtitle="Add first stock to start tracking usage and audit logs." />
      )}
      {status === 'success' && items.map((item) => <InventoryListItem key={item.id} item={item} />)}
    </ScreenContainer>
  );
};
