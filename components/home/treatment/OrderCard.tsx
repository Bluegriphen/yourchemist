import SmallCard from '@/components/ui/SmallCard'
import React from 'react'

const OrderCard = () => {
  return (
    <div className="max-h-134.75 max-w-106.25 rounded-4">
        <div className="w-full h-full rounded-4">
            <div>
                <h3 className="font-semibold text-dark-gray text-[32px]">Order your prescriptions anytime using our mobile app.</h3>
                <p className="text-gray font-normal text-[16px]">Upload your prescription, track your order, and get medicines delivered to your door.</p>

                <div>
                    <SmallCard/>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default OrderCard