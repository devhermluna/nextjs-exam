import {
  camelCase,
  upperFirst,
} from 'lodash';
import * as FeatherIcons from 'react-feather';

interface Props {
  name: string;
  size?: number;
  color?: string;
  className?: string | null;
}

const Icon = ({
  name,
  size,
  color,
  className,
}: Props) => {
  const ucName = upperFirst(camelCase(name));
  // eslint-disable-next-line
  const fIcon: {[key: string]: any} = FeatherIcons;

  if (!name || !fIcon[ucName]) return null;

  const Component = fIcon[ucName];

  return (
    <Component
      color={color}
      className={className}
      size={size}
    />
  );
};

Icon.defaultProps = {
  size: 20,
  color: '#000000',
  className: null,
};

export default Icon;
