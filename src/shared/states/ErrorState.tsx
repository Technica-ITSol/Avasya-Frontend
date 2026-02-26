import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '@/theme';

export const ErrorState = ({ message }: { message?: string }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Failed to load data</Text>
    <Text style={styles.message}>{message ?? 'Please try again later.'}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { padding: theme.spacing.lg, backgroundColor: '#FEE2E2', borderRadius: theme.radius.md, gap: 8 },
  title: { ...theme.typography.bodyLarge, color: theme.colors.error },
  message: { ...theme.typography.body, color: theme.colors.textPrimary }
});
