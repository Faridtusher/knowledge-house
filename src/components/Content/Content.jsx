
import PropTypes from 'prop-types'
const Content = ({content}) => {
   console.log(content)
   const {subject_img, author_name, author_img, title, last_read, reading_time, hash_subject} = content
   return (
      <div>
         <img className='rounded-md h-96 w-full object-cover' src={subject_img} alt="" />


         <div className='flex justify-between items-center'>

            <div className='flex items-center my-4'>
               <div>
                  <img className='w-14' src={author_img} alt="image-1" />
               </div>
               <div className='ml-4'>
                  <h3 className='font-bold'>{author_name}</h3>
                  <p>{last_read}</p>
               </div>
            </div>
            <div>
               <span>{reading_time} min read <a href=""></a> </span>
            </div>  
         </div>


          <h1 className='text-2xl font-bold'>{title}</h1>
         <h2></h2>
      </div>
   );
};

Content.propTypes = {
   content: PropTypes.object.isRequired
}

export default Content;