import Image from 'next/image';
import styles from './nextimage.module.scss';

// per evitare di settare ogni volta width e height esatte
// <Image src={src} alt={alt} width="..." height="..." layout="responsive" objectFit="contain" />;

export default function NextImage({ src, width, height, alt = 'image not found', className = '' }) {
  return <Image className={className} src={src} alt={alt} width={width} height={height} layout="responsive" objectFit="contain" />;
}
