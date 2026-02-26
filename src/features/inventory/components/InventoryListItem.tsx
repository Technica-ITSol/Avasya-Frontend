import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { InventoryItem } from '@/types/inventory';
import { theme } from '@/theme';
import { StatusBadge } from '@/shared/components/StatusBadge';

export const InventoryListItem = ({ item }: { item: InventoryItem }) => (
  <View style={styles.card}>
    <Text style={styles.name}>{item.itemName}</Text>
    <Text style={styles.meta}>{item.category} • Batch: {item.batchNumber}</Text>
    <Text style={styles.meta}>Vendor: {item.vendorName} • Remaining: {item.quantityRemaining}</Text>
    <Text style={styles.meta}>Storage: {item.storageLocation}</Text>
    <StatusBadge
      label={item.status.replace('_', ' ')}
      type={item.status === 'LOW_STOCK' ? 'warning' : item.status === 'OUT_OF_STOCK' ? 'error' : 'success'}
    />
  </View>
);

const styles = StyleSheet.create({
  card: { backgroundColor: theme.colors.card, padding: theme.spacing.md, borderRadius: theme.radius.lg, gap: 6 },
  name: { ...theme.typography.bodyLarge, color: theme.colors.textPrimary },
  meta: { ...theme.typography.body, color: theme.colors.textSecondary }
});
