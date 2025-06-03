import clsx from 'clsx';

const determineColor = (weight: number): string => {
  switch (weight) {
    case 100:
      return 'bg-grid-100';
    case 200:
      return 'bg-grid-200';
    case 300:
      return 'bg-grid-300';
    case 400:
      return 'bg-grid-400';
    case 500:
      return 'bg-grid-500';
    case 600:
      return 'bg-grid-100';
    default:
      return '';
  }
};

function GridBox({ weight }: { weight: number }) {
  return (
    <div
      className={clsx(
        'h-[60px] w-[60px] justify-self-center',
        determineColor(weight)
      )}
    />
  );
}

/*

bg-[#50d71e]
*/

export default GridBox;
