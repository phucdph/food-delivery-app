import type { ElementType, ComponentPropsWithoutRef } from 'react';
import type { Sprinkles} from '~/styles/sprinkles.css';
import { rainbowSprinkles } from '~/styles/sprinkles.css';

export type BoxProps<C extends ElementType> = Sprinkles &
  ComponentPropsWithoutRef<C> & {
    as?: C;
  };

const Box = <C extends ElementType = 'div'>({
  as,
  children,
  ...props
}: BoxProps<C>) => {
  const Component = as || 'div';
  const { className, style, otherProps } = rainbowSprinkles(props);

  return (
    <Component className={className} style={style} {...otherProps}>
      {children}
    </Component>
  );
};

export default Box;
