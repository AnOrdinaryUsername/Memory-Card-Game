import styled from 'styled-components';
import { Image } from '../atoms';

const CardContainer = styled.div`
    cursor: pointer;
    line-height: 0;
    box-shadow: var(--card-shadow);
`;

const Card = (props) => {
    return (
        <CardContainer tabIndex={props.tabIndex}>
            <Image {...props} />
        </CardContainer>
    );
};

export default Card;
