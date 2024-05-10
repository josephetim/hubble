import React from 'react';
import styles from './Indicator.module.css'
import indicatorImage from '@/assets/indicator.png';
import indicatorImage2 from "@/assets/indicator-1.png"
import Image from 'next/image';

export default function SignalIndicator(props)  {
  return (
    <div className={props.angle ? styles.signalIndicator : styles.signalIndicator2}>
      <Image src={props.angle ? indicatorImage : indicatorImage2} alt="Signal Indicator" />
    </div>
  );
};
