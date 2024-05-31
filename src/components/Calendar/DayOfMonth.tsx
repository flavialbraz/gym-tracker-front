import React from 'react';

interface DayOfMonthProps {
  data: Date;
  didGo: boolean;
  onClick: () => void;
}

const DayOfMonth: React.FC<DayOfMonthProps> = ({ data, didGo, onClick }) => {
  // Array com os nomes dos dias da semana
  const weekdays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
  // Obtém o nome do dia da semana para a data fornecida
  const dayOfWeek = weekdays[data.getDay()];

  return (
    <div onClick={onClick} style={{ cursor: 'pointer', textDecoration: didGo ? 'line-through' : 'none' }}>
      <div>{dayOfWeek}</div>
      <div>{data.getDate()}</div>
    </div>
  );
};

export default DayOfMonth;
