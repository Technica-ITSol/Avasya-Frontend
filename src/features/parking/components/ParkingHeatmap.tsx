import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ParkingSlot } from '@/types/parking';
import { theme } from '@/theme';

const slotColor = (status: ParkingSlot['status']) => {
  switch (status) {
    case 'AVAILABLE':
      return '#16A34A';
    case 'OCCUPIED':
      return '#DC2626';
    case 'VISITOR':
      return '#F59E0B';
    default:
      return '#2563EB';
  }
};

export const ParkingHeatmap = ({ slots }: { slots: ParkingSlot[] }) => (
  <View style={styles.grid}>
    {slots.map((slot) => (
      <View key={slot.id} style={[styles.slot, { backgroundColor: slotColor(slot.status) }]}>
        <Text style={styles.label}>{slot.label}</Text>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: theme.spacing.sm },
  slot: {
    width: '22%',
    minHeight: 60,
    borderRadius: theme.radius.md,
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: { color: '#fff', ...theme.typography.body }
});
