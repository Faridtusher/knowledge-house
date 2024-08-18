import PropTypes from 'prop-types'
import Cart from '../Cart/Cart';

const Carts = ({carts, handelTimes, readingTimes}) => {
   return (
      <div className="md:w-1/3">
         <p className='text-purple-800 font-semibold mb-5 bg-slate-300 rounded mx-2 p-4 text-center'>
            Spend Time on Read: {readingTimes} min
         </p>
         
         <div className='bg-slate-300 rounded text-center mx-2 p-4 sticky top-0 z-20'>
            <p className='font-semibold text-red-600'>Bookmarked Blogs: {carts.length}</p>
         
            {
               carts.map(cart => (
                  <Cart key={cart.id} handelTimes={handelTimes} cart={cart}></Cart>
               ))
            }
         </div>
      </div>
   );
};

Carts.propTypes = {
   carts: PropTypes.array,
   handelTimes: PropTypes.func,
   readingTimes: PropTypes.number,
};

export default Carts;
