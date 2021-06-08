import React, { useState } from 'react';
import Fruit from '../fruit/index'
import Food from '../food/index'

const Index: React.FC = (props) => {
    // const visible = useState(false)
    return (
        <div>
            <Fruit />
            <Food />
        </div>
    );
};

export default Index;