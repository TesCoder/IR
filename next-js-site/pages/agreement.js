import Alert from '@/components/Alert';
import { Button } from '@/components/Button';
import { packages } from '@/data/agreementInfo';
import useAgreementForm from '@/hooks/useAgreementForm'
import signAgreement from '@/lib/signAgreement';
import '@/styles/agreement.module.css'
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';


export default function Agreement() {
  
  return (
    <div className='container mt-0 m-4 border border-red-700 shadow-sm'>
      <div className='p-4 flex justify-content-center'>
        <Image onClick={() => setIsFirstOpen(false)} className="cursor-pointer hover:drop-shadow-lg" src='/images/logo-circle.png' 
        width={200} height={200} alt="Logo" priority />
      </div>
      <div className='row justify-content-center'>
        <div className='col-11 col-md-8'> 
          <h1>Application Support Agreement</h1>
        </div>
      </div>
    </div>
  )
}