interface Props {
  query: string;
  category: string;
}

const Header = ({ query, category }: Props) => {
  if(query && category) {
    return (
      <h1 className='heading3 self-start text-black-400'>
        Zoekresultaten voor <span className='capitalize text-gradient_orange'>"{query}"</span> in <span className='capitalize text-gradient_orange'>{category}</span>
      </h1>
    )
  }

  if(query) {
    return (
      <h1 className='heading3 self-start text-black-400'>
        Zoekresultaten voor <span className='capitalize text-gradient_orange'>"{query}"</span> 
      </h1>
    )
  }

  if(category) {
    return (
      <h1 className='heading3 self-start text-black-400'>
        Zoekresultaten voor <span className='capitalize text-gradient_orange'>{category}</span>
      </h1>
    )
  }

  return (
    <h1 className='heading3 self-start text-gradient_orange'>geen resultaten</h1>
  )
}

export default Header