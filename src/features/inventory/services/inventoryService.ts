import { AddStockPayload, InventoryItem, UsagePayload } from '@/types/inventory';
import { apiClient } from '@/services/api';

export const fetchInventory = async (): Promise<InventoryItem[]> => {
  try {
    const { data } = await apiClient.get<InventoryItem[]>('/inventory');
    return data;
  } catch {
    return [
      {
        id: 'inv-1',
        itemName: 'Floor Cleaner',
        category: 'Cleaning',
        batchNumber: 'FC-2024-10',
        vendorName: 'Sparkle Supplies',
        quantityPurchased: 100,
        quantityUsed: 82,
        quantityRemaining: 18,
        pricePerUnit: 95,
        storageLocation: 'Store Room 1',
        status: 'LOW_STOCK'
      }
    ];
  }
};

export const addStock = async (payload: AddStockPayload) => apiClient.post('/inventory/stock', payload);

export const recordUsage = async (payload: UsagePayload) => apiClient.post('/inventory/usage', payload);
