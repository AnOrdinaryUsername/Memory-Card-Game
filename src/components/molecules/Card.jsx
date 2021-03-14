import { Image } from '../atoms';

const Card = ({ src, alt }) => {
    return (
        <div>
            <Image src={src} alt={alt} />
        </div>
    );
};

export default Card;
