const tweets = [
    {
        id: 't1',
        user: {
            id: 'u1',
            username: 'avinash273',
            name: 'Avinash Shanker',
            image: 'https://i.pravatar.cc/300',
        },
        createdAt: '2020-12-03T23:00:00.000Z',
        content: 'There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.',
        image: 'https://www.theladders.com/wp-content/uploads/success-190926-1000x563.jpg',
        numberOfComments: 123,
        numberOfRetweets: 11,
        numberOfLikes: 10,
    },
    {
        id: 't2',
        user: {
            id: 'u2',
            username: 'francis',
            name: 'Francis Dchuz',
            image: 'https://i.pravatar.cc/300',
        },
        createdAt: '2020-12-03T13:00:00.000Z',
        content: 'Spend as much time as possible with people you like. The happiest people are social with strong relationships. Not spending more time with people we love is something we regret the most.',
        image: 'https://i.vimeocdn.com/video/208974515_1280x720.jpg',
        numberOfComments: 4,
        numberOfRetweets: 17,
        numberOfLikes: 99,
    },
    {
        id: 't3',
        user: {
            id: 'u3',
            username: 'Jona_88',
            name: 'Jonathan Edwards',
            image: 'https://politheor.net/wp-content/uploads/2018/01/FEDERLE-Michele-Profile-picture.jpg',
        },
        createdAt: '2020-12-03T21:00:00.000Z',
        content: 'Before you speak, listen. Before you write, think. Before you spend, earn. Before you invest, investigate. Before you criticize, wait. Before you pray, forgive. Before you quit, try. Before you retire, save. Before you die, give.',
        //image: 'https://i.vimeocdn.com/video/208974515_1280x720.jpg',
        numberOfComments: 24,
        numberOfRetweets: 7,
        numberOfLikes: 56,
    }
];

export default tweets;