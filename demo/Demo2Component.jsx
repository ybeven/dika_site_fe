
// 组件名要大写
class Demo2Component extends React.Component {

    render() {
        let { props, state } = this;

        return <h1>{props.text}</h1>;
    }
}

window.Demo2Component = Demo2Component;