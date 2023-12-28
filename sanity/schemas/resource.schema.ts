const schema = {
  name: 'resource',
  title: 'Resource',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      require,
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'string',
      require,
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'paragraph',
      title: 'Paragraph',
      type: 'text',
      require,
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'title1',
      title: 'Title 1',
      type: 'string',
      require,
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'description1',
      title: 'Description 1',
      type: 'text',
      require,
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'title2',
      title: 'Title 2',
      type: 'string',
      require,
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'description2',
      title: 'Description 2',
      type: 'text',
      require,
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'title3',
      title: 'Title 3',
      type: 'string',
      require,
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'description3',
      title: 'Description 3',
      type: 'text',
      require,
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' }
    },
    {
      name: 'schouwingLink',
      title: 'Schouwing Link',
      type: 'string'
    },
    {
      name: 'youtubeLink',
      title: 'Youtube Link',
      type: 'url'
    },
    {
      name: 'views',
      title: 'Views',
      type: 'number',
      initialValue: 0
    },
    {
      name: 'poster',
      title: 'Poster',
      type: 'image',
      validation: (Rule: any) => Rule.required(),
      options: { 
        hotspot: true 
      }
    },
    {
      name: 'poster2',
      title: 'Poster2',
      type: 'image',
      options: { 
        hotspot: true 
      }
    },
    {
      name: 'poster3',
      title: 'Poster3',
      type: 'image',
      options: { 
        hotspot: true 
      }
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      options: {
        list: [ 'schuin bitumen dak', 'schuin pvc dak', 'schuin epdm dak', 'golfplaten dak', 'zinken dak', 'leistenen dak', 'dakkapellen', 'plat dak', 'dakpannen' ]
      }
    }
  ]
}

// Link structure
//  https://brochures.zongericht.nl/schouwing?dak-type=schuin-bitumen-dak
export default schema