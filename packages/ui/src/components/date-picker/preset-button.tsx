import { cn } from '../../utils/cn';

export const PresetButton = ({
  preset,
  label,
  isSelected,
  onClick,
}: {
  preset: string;
  label: string;
  isSelected: boolean;
  onClick: (preset: string) => void;
}): JSX.Element => {
  const handleClick = () => {
    onClick(preset);
  };

  return (
    <button
      className={cn(
        'md:w-full px-1.5 md:px-4 md:py-2 h-5 md:h-10 flex items-center justify-start transition-colors ',
        'rounded-sm bg-transparent whitespace-nowrap text-brand-600 md:text-gray-700 cursor-pointer text-sm font-medium',
        'hover:text-gray-800 hover:bg-gray-50',
        isSelected && 'pointer-events-none md:text-gray-800 md:bg-gray-50'
      )}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};
