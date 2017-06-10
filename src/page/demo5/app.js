import React, { Component } from 'react';

import Comp5_1 from 'comp/demo/comp5_1';
import Comp5_2 from 'comp/demo/comp5_2';

class App extends Component {

    render() {
        return (
            <div>
                <Comp5_1 step={2} />
                <Comp5_2 step={3} />
            </div>
        );
    }

}

export default App;