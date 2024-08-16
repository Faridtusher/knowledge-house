
import PropTypes from 'prop-types'
import Cart from '../Cart/Cart';

const Carts = ({carts}) => {
   return (
      <div className="md:w-1/3 bg-slate-300 rounded text-center mx-2	 p-4">
         <p className='bg-slate-100 font-semibold rounded p-2 text-red-600'>Bookmarked Blogs : {carts.length} </p>
         
         {
            carts.map(cart => <Cart key ={cart.id} cart ={cart}></Cart>)
         }
         
      </div>
   );
};

Carts.propTypes = {
   carts : PropTypes.array
}

export default Carts;
