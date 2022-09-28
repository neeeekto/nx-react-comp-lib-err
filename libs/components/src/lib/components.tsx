import styles from './components.module.scss';
import {http} from '@test/http';

/* eslint-disable-next-line */
export interface ComponentsProps {}

export function Components(props: ComponentsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Components {http()}</h1>
    </div>
  );
}

export default Components;
