import './scss/app.scss'
import Header from './components/Header/Header';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="wrapper">
        <Header/>
        <div className="content">
          <div className="container">

            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/cart' element={<Cart />}></Route>
              <Route path='*' element={<NotFound />}></Route>
            </Routes>

          </div>
        </div>
    </div>
  )
}
export default App;