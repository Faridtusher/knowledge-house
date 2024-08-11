
import PropTypes from 'prop-types'
const Content = ({content}) => {
   console.log(content)
   return (
      <div>
         <h1>length:{content.subject_img}</h1>
      </div>
   );
};

Content.propTypes = {
   content: PropTypes.object.isRequired
}

export default Content;