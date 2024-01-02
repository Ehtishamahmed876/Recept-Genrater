"use client"
// components/Receipt.js
import React, { useState } from "react";
import AddItemModal from "./AddModelitem";

const Receipt = ({ items }) => {

    const [isModalOpen, setModalOpen] = useState(false);
  const [receiptItems, setReceiptItems] = useState(items);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const saveItem = (newItem) => {
    setReceiptItems([...receiptItems, newItem]);
    console.log("res",receiptItems)
  };

  const deleteItem = (index) => {
    const updatedItems = [...receiptItems];
    updatedItems.splice(index, 1);
    setReceiptItems(updatedItems);
  };
  const totalAmount = receiptItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <div className="bg-white mt-10 p-10">
      <div className="flex justify-between items-center">
        <div>
          <img src="/images/logo.png" alt="logo" className="w-48" />
        </div>
        <div className="space-y-5">
          <div className="flex gap-2 items-center justify-end">
            <h1 className="text-lg text-black font-[500]">Invoice Number</h1>
            <input
              className="border  border-black p-3 rounded-lg w-60 "
              value={"004"}
            />
          </div>
          <div className="flex gap-2 items-center justify-end">
            <h1 className="text-lg text-end text-black font-[500]">Date</h1>
            <input
              className="border  border-black p-3 rounded-lg w-60"
              type="date"
            />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="flex gap-5 items-center">
          <h1 className="text-2xl font-[500] text-black">
            FRIENDS COMPUTERS & IT SERVICES
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
            />
          </svg>
        </div>
        <p className="text-gray-300 text-sm font-[400] w-[30rem]">
          Deals in: Computers, Laptops, Printers, Toners, Windows
          Installations,Composing, CD/DVD Writing, Printer Repairing, Toner
          RefillingNADRA Verifictions, Photo Printing, Scanning, Photo Copy, FAX
        </p>
        <p className="text-black text-xl font-[400]">PH: 051-2362090</p>
        <p className="text-black text-xl font-[400]">
          ADDRESS: Basement 08, Farhan Plaza, G-11 Markaz Islamabad
        </p>
        <p className="text-black text-xl font-[400]">
          M/S: Dawat e Islami G-11 Markaz, Islamabad
        </p>
      </div>

      <div className="mt-20">
        <div className="flex gap-2 items-center ">
          <h1 className="text-lg text-black font-[500]">Bill to:</h1>
          <input
            className="border  border-black p-3 rounded-lg w-96 "
            placeholder="Email address, Company or Name"
          />
        </div>
      </div>

      <div className="  mt-10">
        <table className="w-full mb-4">
          <thead>
            <tr>
              <th className="text-start text-xl font-[500] text-black border-black p-2">
                Description
              </th>
              <th className="text-start text-xl font-[500] text-black border-black p-2">
                Qty
              </th>
              <th className="text-start text-xl font-[500] text-black border-black p-2">
                Rate
              </th>
              <th className="text-start text-xl font-[500] text-black border-black p-2">
                Amount
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody className="font-[600]">
            {receiptItems.map((item, index) => (
              <tr key={index}>
                <td className="border border-black p-4">{item.name}</td>
                <td className="border border-black p-4">{item.qty}</td>
                <td className="border border-black p-4">{item.price}</td>
                <td className="border border-black p-4">
                  {item.price * item.qty}
                </td>
                <td className="">
                  <button
                  onClick={() => deleteItem(index)}
                  className="text-red-500 hover:text-red-700"
                >
                     <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex gap-3 items-center">
        <svg
          onClick={openModal}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer text-blue-500"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        <h1 className="text-xl font-[500] text-black cursor-pointer" onClick={openModal}>
          Add another line item
        </h1>
      </div>
      {isModalOpen && (
        <AddItemModal onClose={closeModal} onSave={saveItem} />
      )}




        <div className="flex justify-end mt-20">
          <div className="flex flex-col gap-5  rounded-md items-end bg-[#F8F9FA]  w-96 p-5 justify-end">
            <div className="flex gap-3">
              <h1 className="text-xl text-black font-[400]">Subtotal</h1>
              <p className="text-xl text-black font-[400]">{totalAmount}</p>
            </div>
            <div className="flex items-center gap-3">
              <h1 className="text-xl text-black font-[400]">Discount</h1>
              <input
                className="border  border-black p-2 rounded-lg w-40 "
                placeholder="10%"
              />
              <p className="text-xl text-black font-[400]">0.00</p>
            </div>
            <div className="flex items-center gap-3">
              <h1 className="text-xl text-black font-[400]">Received</h1>
              <input
                className="border  border-black p-2 rounded-lg w-52 "
                placeholder="0.00"
              />
            </div>
            <div className="flex gap-3">
              <h1 className="text-xl text-black font-[400]">Total</h1>
              <p className="text-xl text-black font-[400]">0.00</p>
            </div>
          </div>
        </div>

        <div className="p-[1px] mt-20 w-full bg-[#E5E5E5]">
          
        </div>

        <div className='flex gap-6 mt-10 justify-end'>
             <button className='px-10 py-3 bg-black text-white rounded-md'>Preview</button>
             <button className='px-10 py-3 bg-gray-400 text-white rounded-md'>Send</button>
          </div>
      </div>



    </div>
  );
};

export default Receipt;
