export interface InventoryItem {
  id: string;
  itemName: string;
  category: string;
  batchNumber: string;
  vendorName: string;
  quantityPurchased: number;
  quantityUsed: number;
  quantityRemaining: number;
  pricePerUnit: number;
  storageLocation: string;
  status: 'LOW_STOCK' | 'IN_STOCK' | 'OUT_OF_STOCK';
}

export interface AddStockPayload {
  itemName: string;
  category: string;
  subCategory: string;
  unitType: string;
  quantityPurchased: number;
  batchNumber: string;
  brand: string;
  vendorName: string;
  invoiceNumber: string;
  purchaseDate: string;
  totalPrice: number;
  approvedBy: string;
  storageLocation: string;
}

export interface UsagePayload {
  inventoryId: string;
  quantityUsed: number;
  reason: string;
  placeOfUse: string;
  authorizedBy: string;
  usedBy: string;
  dateOfUsage: string;
}
