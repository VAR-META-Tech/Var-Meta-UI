export const withAttr = (cond: boolean | undefined) => {
  return (cond ? 'true' : undefined) as any;
};
