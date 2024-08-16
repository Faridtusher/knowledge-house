
import PropTypes from 'prop-types'

const Cart = ({cart}) => {
   const {title} = cart
   return (
      <div className='bg-slate-100 font-semibold rounded p-3 my-4'>
         <h1 className='text-xl text-bold'>{title}</h1>
      </div>
   );
};

Cart.propTypes = {
   cart : PropTypes.object
}

export default Cart;