import Receipt from '@/components/Recepit';
import Image from 'next/image'

const Home = () => {
  const receiptItems = [
    { name: 'Toner Refilling 36-A', price: 650, qty:1 },
 
  ];

  return (
    <div className='p-20 container mx-auto'>
      <div className='flex justify-between items-center'>
          <h1 className='text-3xl font-[500] text-black'>CREATE INVOICE</h1>
          <div className='flex gap-6'>
             <button className='px-10 py-3 bg-black text-white rounded-md'>Preview</button>
             <button className='px-10 py-3 bg-gray-400 text-white rounded-md'>Send</button>
          </div>
      </div>
      <Receipt items={receiptItems} />
    </div>
  );
};

export default Home;