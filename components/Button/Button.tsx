import classNames from 'classnames';
import { Typography } from '../Typography/Typography';
import { AddButton } from './Icons/AddButton';
import { Chevron } from './Icons/Chevron';

import styles from './Button.module.scss';

interface Props {
  label: string;
  variant?: 'primary' | 'secondary' | 'add' | 'collapse';
  underline?: boolean;
  selected?: boolean;
  onClick?(): void;
  tight?: boolean;
}

export function Button({
  label,
  tight,
  onClick,
  selected,
  underline,
  variant = 'primary',
}: Props) {
  const isTertiary =
    variant === 'add' || variant === 'collapse';

  const classes = classNames(styles.Button, {
    [styles.rotate]: selected,
    [styles.primary]: variant === 'primary',
    [styles.secondary]: variant === 'secondary',
    [styles.tertiary]: isTertiary,
    [styles.tertiary]: isTertiary,
    [styles.tight]: tight,
  });

  return (
    <button className={classes} onClick={onClick}>
      {getIcon()}
      <Typography underline={underline} element="h3">
        {label}
      </Typography>
    </button>
  );

  function getIcon() {
    switch (variant) {
      case 'add':
        return <AddButton />;
      case 'collapse':
        return <Chevron />;
      default:
        return null;
    }
  }
}
