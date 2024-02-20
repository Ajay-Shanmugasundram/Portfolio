import { Image } from 'react-bootstrap';
import Githubstats from '../../assests/githubstats.png'

const LanguageStats = () => {
    return (
        <Image src={Githubstats} className='border-rounded w-100 h-100' ></Image>
    );
};

export default LanguageStats;
