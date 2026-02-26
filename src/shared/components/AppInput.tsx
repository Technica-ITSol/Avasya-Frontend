import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { theme } from '@/theme';

interface AppInputProps {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  placeholder?: string;
  error?: string;
  keyboardType?: 'default' | 'numeric';
}

export const AppInput = ({ label, value, onChangeText, placeholder, error, keyboardType = 'default' }: AppInputProps) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      keyboardType={keyboardType}
      style={[styles.input, error && styles.errorInput]}
      placeholderTextColor={theme.colors.textSecondary}
    />
    {error ? <Text style={styles.error}>{error}</Text> : null}
  </View>
);

const styles = StyleSheet.create({
  container: { gap: theme.spacing.xs },
  label: { ...theme.typography.body, color: theme.colors.textPrimary },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.md,
    paddingHorizontal: theme.spacing.md,
    minHeight: 44,
    backgroundColor: theme.colors.card
  },
  errorInput: { borderColor: theme.colors.error },
  error: { color: theme.colors.error, ...theme.typography.caption }
});
