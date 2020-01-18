// @flow

type Space = 'tiny' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type SpaceType = {
  [space: Space]: string,
};

const spaces: SpaceType = {
  tiny: '2px',
  xxs: '8px',
  xs: '12px',
  sm: '16px',
  md: '24px',
  lg: '32px',
  xl: '80px',
  xxl: '120px',
};

export default spaces;
