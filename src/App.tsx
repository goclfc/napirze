import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Landing from './components/landing/Landing';
import Donation from './components/donation/Donation';


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<Landing/>}/>
        <Route path='donation' element={<Donation/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
