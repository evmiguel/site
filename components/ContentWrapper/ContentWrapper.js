import className from 'classnames/bind';
import styles from './ContentWrapper.module.scss';

let cx = className.bind(styles);

export default function ContentWrapper({ content, children, className }) {
  return (
    <article className={`${cx(['component', className])} [&_h2]:text-4xl`}>
      <div dangerouslySetInnerHTML={{ __html: content ?? '' }} />
      {children}
    </article>
  );
}
