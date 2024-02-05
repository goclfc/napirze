import Header from '../header/Header'
import floodplainDonate from '../../assets/images/content/PLAN.jpg'
import DonationCard from './DonationCard'
import { useState } from 'react'
import Loading from '../loading/Loading'

const Donation = () => {
  const [loading,setLoading] = useState(false)

  return (
    <div className='mt-16'>
      <Loading isLoading={loading} />
        <Header transparent={false}/>
        <div className="flex flex-wrap flex-col-reverse md:flex-row">
            <div className="img w-full lg:max-w-[50%]">
                <img src={floodplainDonate} alt="" className='w-full h-auto'/>
            </div>
            <div className="donation w-full lg:max-w-[50%]">
                <DonationCard setLoading={setLoading}/>
            </div>
        </div>
    </div>
  )
}
export default Donation