import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import MetaMask from '../../assets/icons/metamask.png';

const Stepper = ({ setStepper, handleConnect, signedStr, signedKeyLink, stepsDone }) => {
  return (
    <div>
      <div className="mt-5 lg:mt-3 text-black flex items-center gap-2 pb-5 lg:pb-0">
        <AiOutlineClose
          size={20}
          className="cursor-pointer"
          onClick={() => setStepper((prev) => !prev)}
        />
        Connect with Metamask
      </div>
      <div className="flex items-center justify-center flex-col">
        <div className="w-[200px]">
          <img className="w-full h-full" src={MetaMask} alt="" />
        </div>

        <div className="steps-container flex flex-col">
          <ul className="step-1 flex items-center flex-row gap-4">
            <li className="shapes flex items-center flex-col gap-2 mt-4">
              <div
                className={`${
                  signedStr !== false ? 'bg-blue-500' : 'bg-[#BFBFBF]'
                } div-circle w-2.5 h-2.5 rounded-full`}></div>
              <div
                className={`${
                  signedStr !== false ? 'bg-blue-500' : 'bg-[#BFBFBF]'
                } w-[2px] h-[4rem]`}></div>
            </li>
            <li
              className={`${
                signedStr !== false ? 'text-black' : 'text-[#808080]'
              } content flex flex-col gap-2 -mt-2`}>
              <h5 className="text-base font-medium">Step 1</h5>
              <p className="text-sm font-normal">
                You must register an ethereal wall to use the Metajuice Mango UI.
              </p>
            </li>
          </ul>

          <ul className="step-2 flex items-center flex-row gap-4">
            <li className="shapes flex items-center flex-col gap-2 mt-4">
              <div
                className={`${
                  signedKeyLink !== false ? 'bg-blue-500' : 'bg-[#BFBFBF]'
                } div-circle w-2.5 h-2.5 rounded-full`}></div>
              <div
                className={`${
                  signedKeyLink !== false ? 'bg-blue-500' : 'bg-[#BFBFBF]'
                } w-[2px] h-[4rem]`}></div>
            </li>
            <li
              className={`${
                signedKeyLink !== false ? 'text-black' : 'text-[#808080]'
              } content flex flex-col gap-2 -mt-2`}>
              <h5 className="text-base font-medium">Step 2</h5>
              <p className="text-sm font-normal">Initiate an action request with immutable X.</p>
            </li>
          </ul>

          <ul className="step-3 flex items-center flex-row gap-4">
            <li className="shapes flex items-center flex-col gap-2 mt-4">
              <div
                className={`${
                  stepsDone === true ? 'bg-blue-500' : 'bg-[#BFBFBF]'
                } div-circle w-2.5 h-2.5 rounded-full`}></div>
              <div
                className={`${
                  stepsDone === true ? 'bg-blue-500' : 'bg-[#BFBFBF]'
                } w-[2px] h-[4rem]`}></div>
            </li>
            <li
              className={`${
                stepsDone === true ? 'text-black' : 'text-[#808080]'
              } content flex flex-col gap-2 -mt-2`}>
              <h5 className="text-base font-medium">Step 3</h5>
              <p className="text-sm font-normal">
                Sign the key linking request from Imchangeable X.
              </p>
            </li>
          </ul>

          <ul className="step-4 flex items-center flex-row gap-4">
            <li className="shapes flex items-center flex-col gap-2 mt-2">
              <div
                className={`${
                  stepsDone === true ? 'bg-blue-500' : 'bg-[#BFBFBF]'
                } div-circle w-2.5 h-2.5 rounded-full`}></div>
            </li>
            <li
              className={`${
                stepsDone === true ? 'text-black' : 'text-[#808080]'
              } content flex flex-col gap-2 mt-1`}>
              <h5 className="text-base font-medium">Finish</h5>
            </li>
          </ul>
          <div className="btn-div flex items-center justify-center mt-5">
            <button
              className="text-white bg-blue-500 py-2 px-5 rounded-2xl font-normal hover:bg-blue-400"
              onClick={handleConnect}>
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
