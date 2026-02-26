# Avasya Frontend (Expo + React Native + TypeScript)

Production-oriented scaffold for:
- Resident Society Parking Management
- Inventory Management

## Folder Tree

```txt
.
├── App.tsx
├── app.json
├── src
│   ├── app
│   │   └── AppRoot.tsx
│   ├── constants
│   │   └── env.ts
│   ├── features
│   │   ├── inventory
│   │   │   ├── components
│   │   │   │   └── InventoryListItem.tsx
│   │   │   ├── screens
│   │   │   │   ├── AddStockScreen.tsx
│   │   │   │   ├── InventoryListScreen.tsx
│   │   │   │   └── RecordUsageScreen.tsx
│   │   │   ├── services
│   │   │   │   └── inventoryService.ts
│   │   │   └── types
│   │   │       └── schemas.ts
│   │   └── parking
│   │       ├── components
│   │       │   └── ParkingHeatmap.tsx
│   │       ├── screens
│   │       │   └── ParkingDashboardScreen.tsx
│   │       └── services
│   │           └── parkingService.ts
│   ├── hooks
│   │   ├── redux.ts
│   │   └── useRole.ts
│   ├── navigation
│   │   ├── AuthScreen.tsx
│   │   ├── InventoryNavigator.tsx
│   │   ├── MainNavigator.tsx
│   │   ├── RootNavigator.tsx
│   │   └── types.ts
│   ├── services
│   │   ├── api.ts
│   │   └── authService.ts
│   ├── shared
│   │   ├── components
│   │   │   ├── AppButton.tsx
│   │   │   ├── AppInput.tsx
│   │   │   ├── ScreenContainer.tsx
│   │   │   └── StatusBadge.tsx
│   │   ├── layout
│   │   │   └── SectionCard.tsx
│   │   └── states
│   │       ├── EmptyState.tsx
│   │       ├── ErrorState.tsx
│   │       └── LoadingState.tsx
│   ├── slices
│   │   ├── authSlice.ts
│   │   ├── inventorySlice.ts
│   │   └── parkingSlice.ts
│   ├── store
│   │   └── index.ts
│   ├── theme
│   │   ├── index.ts
│   │   └── tokens.ts
│   ├── types
│   │   ├── auth.ts
│   │   ├── common.ts
│   │   ├── inventory.ts
│   │   └── parking.ts
│   └── utils
│       └── permissions.ts
└── .env.example
```

## Run

```bash
npm install
npm run start
```
