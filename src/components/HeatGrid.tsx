import GridBox from './GridBox';
import { createHeatGrid, DAYS } from '../data';

function HeatGrid() {
  return (
    <div className='grid grid-cols-7-max gap-2 text-center font-medium'>
      {DAYS.map((day) => {
        return <p>{day}</p>;
      })}

      {createHeatGrid().map((weight) => (
        <GridBox weight={weight} />
      ))}
    </div>
  );
}

export default HeatGrid;
