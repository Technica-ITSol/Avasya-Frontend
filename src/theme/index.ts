import { colors, radius, spacing, typography } from './tokens';

export const theme = {
  colors,
  spacing,
  radius,
  typography,
  shadows: {
    card: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.08,
      shadowRadius: 8,
      elevation: 2
    }
  }
};
