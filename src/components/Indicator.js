import React from 'react';
import styles from './Indicator.module.css'
import indicatorImage from '@/assets/indicator.png';
import Image from 'next/image';

export default function SignalIndicator()  {
  return (
    <div className={styles.signalIndicator}>
      <Image src={indicatorImage} alt="Signal Indicator" />
    </div>
  );
};
