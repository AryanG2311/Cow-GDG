import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { removeAlert, Alert as AlertType } from '../store/alertSlice';

interface AlertProps {
  alert: AlertType;
}

const Alert: React.FC<AlertProps> = ({ alert }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(removeAlert(alert.id));
    }, 5000);

    return () => clearTimeout(timer);
  }, [alert.id, dispatch]);

  const getAlertStyles = () => {
    switch (alert.type) {
      case 'success':
        return 'bg-green-50 text-green-800 border-green-200';
      case 'info':
        return 'bg-blue-50 text-blue-800 border-blue-200';
      case 'error':
        return 'bg-red-50 text-red-800 border-red-200';
      default:
        return 'bg-gray-50 text-gray-800 border-gray-200';
    }
  };

  return (
    <div
      className={`flex items-center justify-between px-4 py-3 border rounded-lg shadow-sm ${getAlertStyles()} animate-fade-in`}
      role="alert"
    >
      <p className="text-sm font-medium">{alert.message}</p>
      <button
        onClick={() => dispatch(removeAlert(alert.id))}
        className="ml-4 inline-flex text-gray-400 hover:text-gray-600 transition-colors"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
};

export default Alert;