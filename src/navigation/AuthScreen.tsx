import React, { useState } from 'react';
import { Text } from 'react-native';
import { ScreenContainer } from '@/shared/components/ScreenContainer';
import { AppInput } from '@/shared/components/AppInput';
import { AppButton } from '@/shared/components/AppButton';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { loginThunk } from '@/slices/authSlice';
import { theme } from '@/theme';

export const AuthScreen = () => {
  const [email, setEmail] = useState('admin@avasya.com');
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.auth.status);

  return (
    <ScreenContainer>
      <Text style={{ ...theme.typography.h2, color: theme.colors.textPrimary }}>Avasya Login</Text>
      <AppInput label="Email" value={email} onChangeText={setEmail} />
      <AppButton title="Login (Mock)" loading={status === 'loading'} onPress={() => dispatch(loginThunk(email))} />
    </ScreenContainer>
  );
};
