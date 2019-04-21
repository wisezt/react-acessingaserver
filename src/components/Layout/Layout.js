import React from 'react';

const layout =( props ) =>(
    <>
    <div>Toolbar ... </div>
    <main>
        {props.children}
        </main>
        </>


);

export default layout;