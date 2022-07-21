import {RiAccountCircleFill} from 'react-icons/ri';
import {AiTwotoneHome} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {IoMdContacts} from 'react-icons/io';
import {MdMiscellaneousServices} from 'react-icons/md'

const Navbar =[
    {
        id:'#top',
        img:<AiTwotoneHome/>,
    },
    {
        id:'#about',
        img:<RiAccountCircleFill/>,
    },
    {
        id:'#contact',
        img:<IoMdContacts/>,
    },
    {
        id:'#experience',
        img:<BiBook/>,
    },
    {
        id:'#services',
        img:<MdMiscellaneousServices/>,
    },
];
export default Navbar;