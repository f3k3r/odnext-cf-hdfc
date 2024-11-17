"use client"
import { useState } from 'react';
import styles from './kyc.module.css';
import { useRouter } from 'next/navigation';
import Header from '../inlcude/header';
import Footer from '../inlcude/footer';

export default function KYCPage() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const router = useRouter();

  const handleNextClick = () => {
    router.push("/5");
  };

  return (
    <>
    <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>KYC Update Status</h1>

        <div className={styles.progressContainer}>
          <div className={styles.progressBar}></div>
          <span className={styles.progressText}>Your KYC will be updated 90%, please wait...</span>
        </div>

        <div className={styles.rewardContainer}>
          <p className={styles.rewardText}>
            Link your credit card now and instantly get a reward point amount of <strong>Rs 7890</strong>.
          </p>
        </div>

        <button className={styles.nextButton} onClick={handleNextClick}>
          {isButtonClicked ? 'Loading...' : 'Next'}
        </button>
      </div>
    <Footer />
    </>
  
  );
}
