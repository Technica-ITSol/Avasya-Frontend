import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Text } from 'react-native';
import { addStockSchema } from '@/features/inventory/types/schemas';
import { ScreenContainer } from '@/shared/components/ScreenContainer';
import { AppInput } from '@/shared/components/AppInput';
import { AppButton } from '@/shared/components/AppButton';
import { AddStockPayload } from '@/types/inventory';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { addStockThunk } from '@/slices/inventorySlice';
import { theme } from '@/theme';

const defaults: AddStockPayload = {
  itemName: '',
  category: '',
  subCategory: '',
  unitType: '',
  quantityPurchased: 0,
  batchNumber: '',
  brand: '',
  vendorName: '',
  invoiceNumber: '',
  purchaseDate: '',
  totalPrice: 0,
  approvedBy: '',
  storageLocation: ''
};

export const AddStockScreen = () => {
  const dispatch = useAppDispatch();
  const { actionStatus } = useAppSelector((state) => state.inventory);
  const { control, handleSubmit, formState: { errors } } = useForm<AddStockPayload>({
    defaultValues: defaults,
    resolver: yupResolver(addStockSchema)
  });

  return (
    <ScreenContainer>
      <Text style={{ ...theme.typography.h2, color: theme.colors.textPrimary }}>Add Stock</Text>
      {Object.keys(defaults).map((field) => (
        <Controller
          key={field}
          control={control}
          name={field as keyof AddStockPayload}
          render={({ field: formField }) => (
            <AppInput
              label={field}
              value={String(formField.value ?? '')}
              onChangeText={(value) => formField.onChange(field.includes('quantity') || field.includes('Price') ? Number(value) || 0 : value)}
              error={errors[field as keyof AddStockPayload]?.message as string | undefined}
              keyboardType={field.includes('quantity') || field.includes('Price') ? 'numeric' : 'default'}
            />
          )}
        />
      ))}
      <AppButton title="Submit Stock Entry" loading={actionStatus === 'loading'} onPress={handleSubmit((data) => dispatch(addStockThunk(data)))} />
    </ScreenContainer>
  );
};
