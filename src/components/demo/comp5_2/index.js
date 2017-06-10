import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {
    addNum,
    addObj1
} from './action';

class Comp5_2 extends Component {

    constructor(props) {
        super(props);

        this.addNum = this.addNum.bind(this);
        this.addObj1 = this.addObj1.bind(this);
    }

    addNum() {
        this.props.addNum();
    }

    addObj1() {
        let { props } = this;

        props.addObj1(props.step);
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

                <button onClick={this.addNum}>改变num</button>
                <button onClick={this.addObj1}>改变obj.obj1</button>
            </div>
        );
    }

}

Comp5_2.propTypes = {
    step: PropTypes.number.isRequired
};

Comp5_2.defaultProps = {
    defStr: 'Comp5_2_默认'
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
    addNum,
    addObj1
};

export default connect(mapStateToProps, mapDispatchToProps)(Comp5_2);
