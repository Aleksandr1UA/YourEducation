import { useState } from "react";
import SingleStar from "./SingleStar";


function StarRating({numTotalStars = 5}) {
    const [numSelectedStars, setNumSelectedStars] = useState(0);
    const [numHoveringStars, setNumHoveringStars] = useState(null);

    const [isUserHovering, setIsUserHovering] = useState(false);

    function getColor(isUserHovering, i, numSelectedStars, numHoveringStars) {
        const threshold = isUserHovering ? numHoveringStars : numSelectedStars;
        return i < threshold ? 'orange' : 'gray';
    }

    return <>
        <div onMouseEnter={() => setIsUserHovering(true)} onMouseLeave={() => setIsUserHovering(false)}
            className={'d-flex'}>
            {Array.from({ length: numTotalStars }).map((el, i) => (
                <SingleStar key={i} color={getColor(isUserHovering, i, numSelectedStars, numHoveringStars)}
                    handleSelect={() => setNumSelectedStars(i + 1)}
                    handleHover={() => setNumHoveringStars(i + 1)}    
                />
            ))}
        </div>
    </>
}

export default StarRating;