import styles from '@/styles/Card.module.css';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Card = ({
  children,
  className,
}: Props) => (
  <div className={`${className} ${styles.card}`}>
    {children}
  </div>
);

Card.defaultProps = {
  className: '',
};

export default Card;
