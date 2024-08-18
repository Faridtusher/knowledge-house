
import PropTypes from 'prop-types'

const Cart = ({cart, handelTimes}) => {
   // console.log(cart)
   const {title, author_name, id, reading_time} = cart
   return (
      <div className='bg-slate-100 rounded p-3 my-4'>
         <h1 className='text-l font-semibold mb-3'>Title : {title}</h1>
         <p className='mb-3'>Author: {author_name}</p>
         <p>Reading Time : <span className='text-red-600'>{reading_time}</span> min</p>
         <button onClick={() => handelTimes(id, reading_time)} className='text-purple-800 underline mt-3'>Make as Read</button>
      </div>
   );
};

Cart.propTypes = {
   cart : PropTypes.object,
   handelTimes : PropTypes.func
}

export default Cart;