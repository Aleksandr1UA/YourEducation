import { StarFill } from 'react-bootstrap-icons';

function SingleStar({ color = 'grey', handleSelect = () => { }, handleHover = () => { } }) {
    return (
        <StarFill className={'list-inline-item text-warning'}
                        color={color}
                        onMouseOver={handleHover}
                        onClick={handleSelect}
        />
    );
}

export default SingleStar;