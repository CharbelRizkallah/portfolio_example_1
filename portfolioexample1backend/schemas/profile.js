export default {
    title: 'Profile',
    name: 'profile',
    type: 'document',
    fields:[
        {
            title: 'Picture',
            name: 'picture',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            title: 'Name',
            name: 'name',
            type: 'string'
        },
        {
            title: 'Profession',
            name: 'profession',
            type: 'string'
        },
        {
            title: 'About',
            name: 'about',
            type: 'text'
        },
        {
            title: 'Email',
            name: 'email',
            type: 'string'
        },
        {
            title: 'Phone',
            name: 'phone',
            type: 'string'
        },
        {
            title: 'Website',
            name: 'website',
            type: 'string'
        }
    ]
}