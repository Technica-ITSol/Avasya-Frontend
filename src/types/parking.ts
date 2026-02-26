export type SlotStatus = 'AVAILABLE' | 'OCCUPIED' | 'VISITOR' | 'RESERVED';

export interface ParkingSlot {
  id: string;
  label: string;
  status: SlotStatus;
  occupantVehicle?: string;
}

export interface ParkingOverview {
  occupancyPercent: number;
  misuseAlerts: number;
  slots: ParkingSlot[];
}
