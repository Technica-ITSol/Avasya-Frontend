import React, { PropsWithChildren } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { theme } from '@/theme';

export const ScreenContainer = ({ children }: PropsWithChildren) => (
  <SafeAreaView style={styles.safe}>
    <ScrollView contentContainerStyle={styles.content}>
      <View>{children}</View>
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: theme.colors.background },
  content: { padding: theme.spacing.lg, gap: theme.spacing.md }
});
