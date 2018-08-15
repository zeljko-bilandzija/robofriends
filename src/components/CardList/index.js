import React from "react";

import Card from '../Card';

const cardlist = ({ robots }) => {
    /* if (true) {
        throw new Error('Some error');
    } */
    const cards = robots.map(robot => <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />);
    
    return (
        <div>
            {cards}
        </div>
    );
};

export default cardlist;
