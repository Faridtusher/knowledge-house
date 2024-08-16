
import PropTypes from 'prop-types'
import Cart from '../Cart/Cart';

const Carts = ({carts}) => {
   return (
      <div className="md:w-1/3 bg-red-100 text-center p-4">
         <p>Bookmarked Blogs : {carts.length} </p>
         
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
