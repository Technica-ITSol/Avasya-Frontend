import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { theme } from '@/theme';

export const LoadingState = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={theme.colors.primary} />
  </View>
);

const styles = StyleSheet.create({
  container: { paddingVertical: theme.spacing.xl, alignItems: 'center' }
});
