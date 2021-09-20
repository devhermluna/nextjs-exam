import classNames from 'classnames';

interface Props {
  big: string;
  tiny: string;
  className?: string;
}

const ProgressiveImageLoader = ({
  big,
  tiny,
  className,
}: Props) => (
  <div
    className={classNames(className, 'bg-cover bg-center bg-gray-200')}
    style={{
      backgroundImage: `url(${big}), url(${tiny})`,
    }}
  />
);

ProgressiveImageLoader.defaultProps = {
  className: '',
};

export default ProgressiveImageLoader;
