'use client';

import { useState, useEffect } from 'react';

import { UploadModal } from '@/components/UploadModal';
import { ProductWithPrice } from '@/types';
import AuthModal from '@/components/AuthModal';

interface ModalProviderProps {
  products: ProductWithPrice[];
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ products }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal />
      <UploadModal />
    </>
  );
};