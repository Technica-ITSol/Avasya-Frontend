import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { InventoryStackParamList } from '@/navigation/types';
import { InventoryListScreen } from '@/features/inventory/screens/InventoryListScreen';
import { AddStockScreen } from '@/features/inventory/screens/AddStockScreen';
import { RecordUsageScreen } from '@/features/inventory/screens/RecordUsageScreen';

const Stack = createNativeStackNavigator<InventoryStackParamList>();

export const InventoryNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="InventoryList" component={InventoryListScreen} options={{ title: 'Inventory' }} />
    <Stack.Screen name="AddStock" component={AddStockScreen} options={{ title: 'Add Stock' }} />
    <Stack.Screen name="RecordUsage" component={RecordUsageScreen} options={{ title: 'Record Usage' }} />
  </Stack.Navigator>
);
