export default {
    title: 'Work',
    name: 'work',
    type: 'document',
    fields:[
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Featured Image',
            name:'featured_image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            title: 'Pictures',
            name: 'pictures',
            type: 'array',
            of: [{type: 'image',
                options: {
                    hotspot: true // <-- Defaults to false
                }}]
        },
        {
            title: 'Short Description',
            name: 'shortdesc',
            type: 'string'
        },
        {
            title: 'Description',
            name: 'desc',
            type: 'text'
        }
    ]
}