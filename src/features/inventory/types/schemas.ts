import * as yup from 'yup';

export const addStockSchema = yup.object({
  itemName: yup.string().required('Item name is required'),
  category: yup.string().required('Category is required'),
  subCategory: yup.string().required('Sub-category is required'),
  unitType: yup.string().required('Unit type is required'),
  quantityPurchased: yup.number().positive().required(),
  batchNumber: yup.string().required(),
  brand: yup.string().required(),
  vendorName: yup.string().required(),
  invoiceNumber: yup.string().required(),
  purchaseDate: yup.string().required(),
  totalPrice: yup.number().positive().required(),
  approvedBy: yup.string().required(),
  storageLocation: yup.string().required()
});

export const usageSchema = yup.object({
  inventoryId: yup.string().required('Inventory item is required'),
  quantityUsed: yup.number().positive().required(),
  reason: yup.string().required(),
  placeOfUse: yup.string().required(),
  authorizedBy: yup.string().required(),
  usedBy: yup.string().required(),
  dateOfUsage: yup.string().required()
});
