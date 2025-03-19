import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AlertType = 'success' | 'info' | 'error';

export interface Alert {
  id: string;
  message: string;
  type: AlertType;
}

interface AlertState {
  alerts: Alert[];
}

const initialState: AlertState = {
  alerts: [],
};

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    showAlert: (state, action: PayloadAction<Omit<Alert, 'id'>>) => {
      const id = Math.random().toString(36).substring(7);
      state.alerts.push({ ...action.payload, id });
    },
    removeAlert: (state, action: PayloadAction<string>) => {
      state.alerts = state.alerts.filter(alert => alert.id !== action.payload);
    },
  },
});

export const { showAlert, removeAlert } = alertSlice.actions;
export default alertSlice.reducer;