
import PropTypes from 'prop-types'

const Cart = ({cart}) => {
   const {title} = cart
   return (
      <div>
         <h1 className='text-xl'>{title}</h1>
      </div>
   );
};

Cart.propTypes = {
   cart : PropTypes.object
}

export default Cart;