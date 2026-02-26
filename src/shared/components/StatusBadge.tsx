import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '@/theme';

export const StatusBadge = ({ label, type }: { label: string; type: 'success' | 'warning' | 'error' }) => {
  const color = type === 'success' ? theme.colors.success : type === 'warning' ? theme.colors.warning : theme.colors.error;
  return (
    <View style={[styles.badge, { backgroundColor: `${color}20` }]}>
      <Text style={[styles.text, { color }]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: { alignSelf: 'flex-start', borderRadius: theme.radius.sm, paddingHorizontal: 8, paddingVertical: 4 },
  text: { ...theme.typography.caption, fontWeight: '600' }
});
