import React, {Fragment, useState} from 'react'

function Contador() {
    const [count, setCount] = useState(0)

    return (
        <Fragment>
            <p>Tu contador es {count}</p>
            <button onClick={() => setCount(count + 1)}>Sube en contador</button>
        </Fragment>
    )
}

export default Contador
