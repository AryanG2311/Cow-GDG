import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import Alert from './Alert';

const AlertContainer: React.FC = () => {
  const alerts = useSelector((state: RootState) => state.alert.alerts);

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2 min-w-[320px] max-w-md">
      {alerts.map((alert) => (
        <Alert key={alert.id} alert={alert} />
      ))}
    </div>
  );
};

export default AlertContainer;