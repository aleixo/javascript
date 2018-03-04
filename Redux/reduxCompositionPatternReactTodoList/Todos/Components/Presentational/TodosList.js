class TodosList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.unsubscribe = this.props.dispatcher.subscribe(() => {
            this.forceUpdate();
        })
    }

    componentWillUnmount() {        
        this.unsubscribe();
    }
    
    get element() {                           
        let lis = this.props.todos.map( todo => {                   
            return new Todo({
                key: todo.id,
                text: todo.text,
                completed: todo.completed,
                onClick: () => this.props.onClick(todo)                                
            }).element;                            
        })  
                                  
        return React.createElement('ul',{}, ...lis);
    }
}