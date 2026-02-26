import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '@/theme';

export const EmptyState = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subtitle}>{subtitle}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { padding: theme.spacing.xl, borderWidth: 1, borderColor: theme.colors.border, borderRadius: theme.radius.lg, gap: 4 },
  title: { ...theme.typography.h3, color: theme.colors.textPrimary },
  subtitle: { ...theme.typography.body, color: theme.colors.textSecondary }
});
