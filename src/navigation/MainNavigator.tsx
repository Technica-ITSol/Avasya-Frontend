import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainTabParamList } from '@/navigation/types';
import { ParkingDashboardScreen } from '@/features/parking/screens/ParkingDashboardScreen';
import { InventoryNavigator } from '@/navigation/InventoryNavigator';

const Tab = createBottomTabNavigator<MainTabParamList>();

export const MainNavigator = ({ showInventory }: { showInventory: boolean }) => (
  <Tab.Navigator>
    <Tab.Screen name="Parking" component={ParkingDashboardScreen} options={{ title: 'Parking' }} />
    {showInventory && <Tab.Screen name="Inventory" component={InventoryNavigator} options={{ headerShown: false }} />}
  </Tab.Navigator>
);
