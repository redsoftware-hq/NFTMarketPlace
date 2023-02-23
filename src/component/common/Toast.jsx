import React from 'react';

const Toast = ({ message, type }) => {
  const toastClass = () => {
    switch (type) {
      case 'success':
        return 'bg-green-500';
      case 'error':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div
      className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 w-64 px-4 py-2 rounded-md text-white ${toastClass()} transition ease-in duration-500 z-50`}
    >
      <p className="text-center font-medium">{message}</p>
    </div>
  );
};
export default Toast;
