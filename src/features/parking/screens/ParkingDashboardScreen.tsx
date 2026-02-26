import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScreenContainer } from '@/shared/components/ScreenContainer';
import { theme } from '@/theme';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { getParkingOverviewThunk } from '@/slices/parkingSlice';
import { LoadingState } from '@/shared/states/LoadingState';
import { ErrorState } from '@/shared/states/ErrorState';
import { ParkingHeatmap } from '@/features/parking/components/ParkingHeatmap';

export const ParkingDashboardScreen = () => {
  const dispatch = useAppDispatch();
  const { data, status, error } = useAppSelector((state) => state.parking);

  useEffect(() => {
    dispatch(getParkingOverviewThunk());
  }, [dispatch]);

  return (
    <ScreenContainer>
      <Text style={styles.title}>Parking Intelligence</Text>
      {status === 'loading' && <LoadingState />}
      {status === 'error' && <ErrorState message={error ?? undefined} />}
      {status === 'success' && data && (
        <View style={styles.card}>
          <Text style={styles.metric}>Occupancy: {data.occupancyPercent}%</Text>
          <Text style={styles.metric}>Misuse Alerts: {data.misuseAlerts}</Text>
          <ParkingHeatmap slots={data.slots} />
        </View>
      )}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  title: { ...theme.typography.h2, color: theme.colors.textPrimary },
  card: { backgroundColor: theme.colors.card, borderRadius: theme.radius.lg, padding: theme.spacing.lg, gap: 12 },
  metric: { ...theme.typography.bodyLarge, color: theme.colors.textPrimary }
});
