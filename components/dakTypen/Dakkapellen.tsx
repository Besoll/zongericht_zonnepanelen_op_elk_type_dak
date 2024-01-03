import DakTypeCard from './dakTypeData/card/DakTypeCard'
import {
  title,
  id,
  shortDescription,  
  paragraphHead,
  paragraphText1,
  paragraphText2,
  paragraphText3,
  paragraphText4,
  title1,
  title2,
  title3,
  description1,
  description2,
  description3,
  slug,
  schouwingLink,
  youtubeLink,
  views,
  category,
  image,
  image2,
  image3
} from './dakTypeData/dakkapellenData';


const Dakkapellen = (  ) => {
  return (
    <DakTypeCard 
      title={title} 
      shortDescription={shortDescription} 
      image={image} 
      views={views} 
      schouwingLink={schouwingLink} 
      slug={slug} 
    />
  )
}

export default Dakkapellen