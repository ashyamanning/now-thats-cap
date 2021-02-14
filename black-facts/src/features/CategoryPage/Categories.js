import React from 'react';
// import Catgories from './Categories';

import categoryData from './Data/categoryData';

const Categories = () => {
    return (
        <div>
            <div> 
                <ul>
                    {categoryData.map((item, index) => (
                        <button to={item.link} key={index}>
                            {item.title}
                        </button>
                    ))}
                </ul>
            </div>   
        </div>
    )
}

export default Categories
