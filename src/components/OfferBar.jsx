import React from 'react'
import { Sparkle } from 'lucide-react'
function OfferBar() {
    return (
        <div className='flex min-h-7 w-full item-center justify-center gap-2 bg-linear-to-r from-rose-600 via-pink-500 to-orange-400 px-2 py-1 text-12px font-semibold text-white sm:text-sm'>
            <Sparkle size={15} className='shrink-0' />
            <p>
                Special Offer :use code{""}
                <span className='rounded bg-white/20 px-2 py-1'>J0Y20</span>{""}
                for 20% OFF! Free Luxury Gift Packaging on orders over $60.
            </p>
        </div>
    )
}

export default OfferBar
