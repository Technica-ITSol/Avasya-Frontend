import React from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';
import { theme } from '@/theme';

interface AppButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'danger';
}

export const AppButton = ({ title, onPress, loading, variant = 'primary' }: AppButtonProps) => {
  const variantStyle =
    variant === 'secondary'
      ? styles.secondary
      : variant === 'danger'
        ? styles.danger
        : styles.primary;

  return (
    <Pressable style={[styles.base, variantStyle, loading && styles.disabled]} onPress={onPress} disabled={loading}>
      {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.label}>{title}</Text>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    minHeight: 44,
    borderRadius: theme.radius.md,
    justifyContent: 'center',
    alignItems: 'center'
  },
  primary: { backgroundColor: theme.colors.primary },
  secondary: { backgroundColor: theme.colors.card, borderWidth: 1, borderColor: theme.colors.border },
  danger: { backgroundColor: theme.colors.error },
  label: { color: '#fff', ...theme.typography.bodyLarge },
  disabled: { opacity: 0.6 }
});
