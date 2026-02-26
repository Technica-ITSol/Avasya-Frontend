import { apiClient } from '@/services/api';
import { ParkingOverview } from '@/types/parking';

export const fetchParkingOverview = async (): Promise<ParkingOverview> => {
  // Placeholder - swap endpoint to backend when ready.
  try {
    const { data } = await apiClient.get<ParkingOverview>('/parking/overview');
    return data;
  } catch {
    return {
      occupancyPercent: 68,
      misuseAlerts: 3,
      slots: [
        { id: '1', label: 'A-01', status: 'AVAILABLE' },
        { id: '2', label: 'A-02', status: 'OCCUPIED', occupantVehicle: 'MH12AB1234' },
        { id: '3', label: 'A-03', status: 'VISITOR' },
        { id: '4', label: 'A-04', status: 'RESERVED' }
      ]
    };
  }
};
