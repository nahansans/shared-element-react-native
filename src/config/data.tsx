import faker from 'faker'

export const images = [
    'https://images.unsplash.com/photo-1503656142023-618e7d1f435a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=403&q=80',
    'https://images.unsplash.com/photo-1462953491269-9aff00919695?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    'https://images.unsplash.com/photo-1567608580061-0437abed1133?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1482&q=80',
    'https://images.unsplash.com/photo-1574870111867-089730e5a72b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    'https://images.unsplash.com/photo-1534759846116-5799c33ce22a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1376&q=80',
    'https://images.unsplash.com/photo-1519664824562-b4bc73f9795a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80',
    'https://images.unsplash.com/photo-1516934024742-b461fba47600?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80',
    'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    'https://images.unsplash.com/photo-1453199619492-2f112dd7a489?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    'https://images.unsplash.com/photo-1535083783855-76ae62b2914e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80'
]

export const data =  [...Array(10).keys()].map((i: any) => {
    return {
        key: String(i),
        title: faker.name.jobTitle(),
        description: faker.commerce.productDescription(),
        location: faker.address.streetAddress(),
        image: images[i],
        user: {
            name: faker.name.findName(),
            avatar: faker.internet.avatar(),
            job: faker.name.jobType(),
            details: [
                {
                    label: 'Shots',
                    value: faker.random.number(400)
                },
                {
                    label: 'Follower',
                    value: faker.random.number(5000)
                },
                {
                    label: 'Following',
                    value: faker.random.number(2000)
                }
            ],
        },
    }
})