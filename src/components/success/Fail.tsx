import Header from '../header/Header'
import Footer from '../footer/Footer'

const Fail = () => {
  return (
    <div className='flex flex-col h-screen'>
        <Header transparent={false} />
         <h2 className='text-3xl font-smooch-bold text-napirzeDark mt-40 text-center'>Your payment was not successfull</h2>
        <Footer />
    </div>
  )
}
export default Fail