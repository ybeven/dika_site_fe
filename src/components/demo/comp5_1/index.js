import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {
    addA,
    addB1
} from './action';

class Comp5_1 extends Component {

    constructor(props) {
        super(props);

        this.addA = this.addA.bind(this);
        this.addB1 = this.addB1.bind(this);
    }

    addA() {
        this.props.addA();
    }

    addB1() {
        let { props } = this;

        props.addB1(props.step);
    }

    render() {
        const { props, state } = this;

        return (
            <div>
                <p>{props.defStr}</p>
                <p>{props.a}</p>
                <p>{props.b.b1}</p>
                <p>{props.num}</p>
                <p>{props.obj.obj1}</p>

                <button onClick={this.addA}>改变a</button>
                <button onClick={this.addB1}>改变b.b1</button>
            </div>
        );
    }

}

Comp5_1.propTypes = {
    step: PropTypes.number.isRequired
};

Comp5_1.defaultProps = {
    defStr: 'Comp5_1_默认'
};

function mapStateToProps(state, props) {
    const { comp5_1_reducer, comp5_2_reducer } = state;
    
    return {
        a: comp5_1_reducer.a,
        b: comp5_1_reducer.b,
        num: comp5_2_reducer.num,
        obj: comp5_2_reducer.obj
    };
}

const mapDispatchToProps = {
    addA,
    addB1
};

export default connect(mapStateToProps, mapDispatchToProps)(Comp5_1);
