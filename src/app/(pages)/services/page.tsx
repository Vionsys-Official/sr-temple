import Commitment from '@/app/ui/services/Commitment';
import Herosection from '@/app/ui/services/Herosection';
import TemplePlanning from '@/app/ui/services/TemplePlanning';
// import { Link } from 'lucide-react';
// import Image from 'next/image';
import React from 'react';

const page = () => (
  <main className="pt-12 md:pt-16">
    <Herosection />
    <TemplePlanning />
    <Commitment />
  </main>
);

export default page;
