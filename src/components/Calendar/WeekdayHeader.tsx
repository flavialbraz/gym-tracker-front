import React from 'react';

const WeekdayHeader = () => {
  // Array com os nomes dos dias da semana
  const weekdays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {weekdays.map((weekday, index) => (
        <div key={index}>{weekday}</div>
      ))}
    </div>
  );
};

export default WeekdayHeader;
