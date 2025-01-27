import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="bg-white rounded shadow p-4">
      <h3 className="text-lg font-bold text-red-500">{title}</h3>
      {children}
    </div>
  );
};

export default Card;
