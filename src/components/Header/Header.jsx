
import profile from '../../../images/profile.png'
const Header = () => {
   return (
      <div className='flex font-bold justify-between items-center mx-20 border-b border-gray-300 pb-2'>
         <p className='text-xl'>Knowledge <span className='text-orange-700	'>House</span></p>
         <img src={profile} alt="" />
      </div>
   );
};

export default Header;

