import DakTypeCard from './dakTypeData/card/DakTypeCard'
import {
  title,
  shortDescription,
  slug,
  schouwingLink,
  views,
  image
} from './dakTypeData/zinkenDakData';


const ZinkenDak = (  ) => {
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

export default ZinkenDak