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
        'flex h-5 items-center justify-start px-1.5 transition-colors md:h-10 md:w-full md:px-4 md:py-2',
        'text-brand-600 md:text-foreground-secondary cursor-pointer whitespace-nowrap rounded-sm bg-transparent text-sm font-medium',
        'hover:bg-gray-50 hover:text-gray-800',
        isSelected && 'pointer-events-none md:bg-gray-50 md:text-gray-800'
      )}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};
