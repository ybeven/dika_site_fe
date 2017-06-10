
// 组件名要大写
class Demo4Component extends React.Component {

    constructor(props) {
        // 写在第一行
        super(props);

        // 初始化state
        this.state = {
            time: '',
            text: props.name
        };
    }

    componentDidMount() {
        // 如果不是在render需要用到的属性，不用放在props后者state
        // 可以直接放在组建实例也就是this上
        this.inteval = setInterval(() => { // 箭头函数
            this.setState({
              time: new Date().toLocaleString()
            });
        }, 1000);
    }

    componentWillUnmount() {
        console.log('Demo4Component::componentWillUnmount');
        clearInterval(this.inteval);
    }

    render() {
        let { props, state } = this;

        // 组建的render方法里只能返回一个跟元素
        return <h1><span>{state.text}</span>{state.time}</h1>;
    }

}

// 组件说明，描述组建接受哪些参数，参数类型，及是否必传
Demo4Component.PropTypes = {
    name: React.PropTypes.string.isRequired
};


window.Demo4Component = Demo4Component;