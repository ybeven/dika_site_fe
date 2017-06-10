
// 组件名要大写
class Demo3Component extends React.Component {

    constructor(props) {
        // 写在第一行
        super(props);

        // 初始化state
        this.state = {
            welcome: '欢迎',
            text: props.text
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            text: '我被改变了' + new Date().getTime()
        });
    }

    render() {
        let { props, state } = this;

        // 组建的render方法里只能返回一个跟元素
        return (
            <div>
                <h1>{`${props.company} ${state.welcome}：${state.text}`}</h1>
                <button onClick={this.handleClick}>点我改变state</button>
            </div>
        );
    }

}

// 组件内部可以设置自己的默认props
Demo3Component.defaultProps = {
    text: 'aaaa',
    company: '哈哈'
};

window.Demo3Component = Demo3Component;