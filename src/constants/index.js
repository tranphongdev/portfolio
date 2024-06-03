import trello from '../assets/project/pt3.jpg';
import tdpshop from '../assets/project/prj.jpg';
import portfolio from '../assets/project/portfolio.jpg';

export const projects = [
    {
        src: portfolio,
        name: 'My Portfolio',
        type: 'My Personal Website',
        desc: ['Welcome to my personal website!'],
        technology: ['ReactJs', 'React Hook', 'Javascript', 'HTML', 'CSS', 'EmailJs'],
        preview: 'https://cv-tranphongdev.vercel.app/',
        srcCode: '#',
        color: '#00a8ff',
    },
    {
        src: tdpshop,
        name: 'TPD Shop',
        type: 'Website Ecomerce ',
        desc: [
            'Welcome to my website ercomerce!',
            'Website offers the following main features:',
            'API Calls to Display Products, Add/Remove from Cart and Wislist, Filter Products by price, Detail product, and Login',
        ],
        technology: ['ReactJs', 'React Hook', 'Redux', 'Javascript', 'HTML', 'CSS', 'Tailwindcss'],
        preview: 'https://tpdshop.vercel.app/',
        srcCode: '#',
        color: '#0984e3',
    },
    {
        src: trello,
        name: 'Trello App',
        type: 'Website Ecomerce ',
        desc: ['Features: Dark mode, Light Mode, System mode, Drag drop between column, Drag drop between card.'],
        technology: ['ReactJs', 'Dnd-kit', 'React Hook', 'Material UI,', 'Javascript', 'HTML', 'CSS', 'Tailwindcss'],
        preview: 'https://trello-app-coral-six.vercel.app/',
        srcCode: '#',
        color: '#4f75ff',
    },
];
