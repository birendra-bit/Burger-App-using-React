import React from 'react';
import Aux from '../../hoc/auxllary'
import './Layout.css'

const layout =props=>(
    <Aux>
        <div>toolbar, SideDrawer, Backdrop</div>
        <main className='Content'>
            {props.children}
        </main>
    </Aux>
)

export default layout