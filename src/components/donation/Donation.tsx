import Header from '../header/Header'
import floodplainDonate from '../../assets/images/content/floodplainDonate.png'
import DonationCard from './DonationCard'
type Props = {}

const Donation = (props: Props) => {
  return (
    <div className='mt-16'>
        <Header transparent={false}/>
        <div className="flex flex-wrap flex-col-reverse md:flex-row">
            <div className="img w-full lg:max-w-[50%]">
                <img src={floodplainDonate} alt="" className='w-full h-auto'/>
            </div>
            <div className="donation w-full lg:max-w-[50%]">
                <DonationCard />
            </div>
        </div>
    </div>
  )
}
export default Donation