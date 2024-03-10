import React from 'react'
import Typewriter from 'typewriter-effect';

const Type = () => {
    return (
        <div>
            <Typewriter
                options={{
                    strings: ['Empowering Connectivity!','Anytime!', 'Anywhere!'],
                    autoStart: true,
                    loop: true,
                }}
            />
        </div>
    )
}

export default Type
