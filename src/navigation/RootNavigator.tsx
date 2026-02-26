import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navigation/types';
import { AuthScreen } from '@/navigation/AuthScreen';
import { MainNavigator } from '@/navigation/MainNavigator';
import { useAppSelector } from '@/hooks/redux';
import { canAccessFeature } from '@/utils/permissions';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  const { token, role } = useAppSelector((state) => state.auth);
  const canViewInventory = canAccessFeature(role, 'inventory');

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!token ? (
        <Stack.Screen name="Auth" component={AuthScreen} />
      ) : (
        <Stack.Screen name="Main">{() => <MainNavigator showInventory={canViewInventory} />}</Stack.Screen>
      )}
    </Stack.Navigator>
  );
};
