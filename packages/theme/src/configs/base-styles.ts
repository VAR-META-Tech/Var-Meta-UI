export const baseStyles = (prefix: string) => ({
  color: `hsl(var(--${prefix}-foreground))`,
  borderColor: `hsl(var(--${prefix}-border))`,
  backgroundColor: `hsl(var(--${prefix}-background))`,
});
