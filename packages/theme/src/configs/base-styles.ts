export const baseStyles = (prefix: string) => ({
  color: `hsl(var(--${prefix}-foreground))`,
  backgroundColor: `hsl(var(--${prefix}-background))`,
  '--toaster-width': '440px',
  '@media (max-width: 37.5rem)': {
    '--toaster-width': '359px',
  },
});
