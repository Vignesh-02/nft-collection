import React from 'react'
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";


function NFTDropPage() {

    //Auth
    const connectWithMetamask = useMetamask();
    const address = useAddress();
    const disconnect = useDisconnect();


 

  return (
    
    <div className='flex h-screen flex-col   lg:grid lg:grid-cols-10'>
        { /* left */}
        <div className='lg:col-span-4 bg-gradient-to-tr from-cyan-400 to-rose-500'>
            <div className='flex flex-col items-center justify-center py-2
            lg:min-h-screen '>
                <div className='bg-gradient-to-br from-yellow-400  to-purple-200'>
                    <img className='w-48 rounded-xl object-cover 
                    lg:h-96 lg:w-72 p-2
                    ' src="https://links.papareact.com/8sg" alt="" />
                </div>
                <div className='text-center p-5 space-y-4 '>
                    <h1 className='text-4-xl font-bold text-white '>VIGU APES</h1>
                    <h2 className='text-xl text-gray-200'>A collection of the most agile apes in history</h2>
                </div>
            </div>
            
        </div>
            




            { /* right */}
        <div className='flex flex-1 flex-col p-12 lg:col-span-6'>
            {/* Header */}
            <header  className='flex items-center justify-between'>
                <h1 className='w-52 cursor-pointer text-xl font-extralight sm:w-80 '>
                    {' '}
                    <span className='font-extrabold 
                    underline decoration-orange-500
                    '>  VIGU'S   </span>
                    {' '} NFT MARKETPLACE
                </h1>

                <button onClick={() => (address ? disconnect(): connectWithMetamask() )} className='rounded-full bg-pink-300 px-4 py-4
                text-xs font-bold lg:px-4 lg:py-4 
                text-white'>
                    {address ? 'Sign Out': 'Sign In' }</button>
            </header>

            <hr className='my-2 border'/>
            {address && (
                <p className='text-center text-xl text-rose-300'> You're signed in with your wallet {address.substring(0,5)}...{address.substring(address.length - 5)}</p>
            )}


            {/* Content */}
            <div className='mt-10 flex flex-1 flex-col items-center space-y-6 
            text-center lg:justify-center'>
                <img className='w-81 object-cover pb-10 lg:h-40' src="https://links.papareact.com/bdy" alt="" />
                <h1 className='font-bold text-3xl lg:text-5xl lg:font-extrabold'>Vigu's NFT club</h1>

            </div>
            <p className='pt-2 text-xl text-center text-green-500' >
                15/21 NFT's claimed
            </p>

            {/* Mint  NFT BUTTON */}
            <button className='h-16 rounded-full w-full bg-red-600 text-white
            mt-12 font-white
            ' >MINT NFT (0.01 ETH)</button>
        </div>

  


    </div>
        )
  
}

export default NFTDropPage