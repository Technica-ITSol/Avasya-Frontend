import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Text } from 'react-native';
import { ScreenContainer } from '@/shared/components/ScreenContainer';
import { AppInput } from '@/shared/components/AppInput';
import { AppButton } from '@/shared/components/AppButton';
import { UsagePayload } from '@/types/inventory';
import { usageSchema } from '@/features/inventory/types/schemas';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { recordUsageThunk } from '@/slices/inventorySlice';
import { theme } from '@/theme';

const defaults: UsagePayload = {
  inventoryId: '',
  quantityUsed: 0,
  reason: '',
  placeOfUse: '',
  authorizedBy: '',
  usedBy: '',
  dateOfUsage: ''
};

export const RecordUsageScreen = () => {
  const dispatch = useAppDispatch();
  const { actionStatus } = useAppSelector((state) => state.inventory);
  const { control, handleSubmit, formState: { errors } } = useForm<UsagePayload>({
    defaultValues: defaults,
    resolver: yupResolver(usageSchema)
  });

  return (
    <ScreenContainer>
      <Text style={{ ...theme.typography.h2, color: theme.colors.textPrimary }}>Record Usage</Text>
      {Object.keys(defaults).map((field) => (
        <Controller
          key={field}
          control={control}
          name={field as keyof UsagePayload}
          render={({ field: formField }) => (
            <AppInput
              label={field}
              value={String(formField.value ?? '')}
              onChangeText={(value) => formField.onChange(field === 'quantityUsed' ? Number(value) || 0 : value)}
              error={errors[field as keyof UsagePayload]?.message as string | undefined}
              keyboardType={field === 'quantityUsed' ? 'numeric' : 'default'}
            />
          )}
        />
      ))}
      <AppButton title="Submit Usage" loading={actionStatus === 'loading'} onPress={handleSubmit((data) => dispatch(recordUsageThunk(data)))} />
    </ScreenContainer>
  );
};
