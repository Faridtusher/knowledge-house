
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'; // Import the icons

const Content = ({content}) => {
   console.log(content)
   const {subject_img, author_name, author_img, title, last_read, reading_time, hash_subject} = content
   return (
      <div className='shadow-lg shadow-gray-500/40 p-3 rounded'>
         <img className='rounded-md h-96 w-full object-cover' src={subject_img} alt="programming img" />

         <div className='flex justify-between items-center'>

            <div className='flex items-center mt-4 mb-2'>
               <div>
                  <img className='w-14' src={author_img} alt="image-1" />
               </div>
               <div className='ml-4'>
                  <h3 className='font-bold'>{author_name}</h3>
                  <p className='text-sm'>{last_read}</p>
               </div>
            </div>
            <div className='flex items-center'>
               <span className='text-sm'>{reading_time} min read </span>
               <button><FontAwesomeIcon icon={faCoffee} size="md" className="text-gray-700 m-2" /></button>
            </div>  
         </div>

          <h1 className='text-2xl font-bold'>{title}</h1>

         <p className='my-2'>
            {
               hash_subject.map((hash, idx) => <span key={idx}><a className="mr-4 text-sm" href=""> #{hash}</a> </span>)
            }
         </p>
         <button className='text-purple-800 underline mb-5'>Make as Read</button>
      </div>
   );
};

Content.propTypes = {
   content: PropTypes.object.isRequired
}

export default Content;