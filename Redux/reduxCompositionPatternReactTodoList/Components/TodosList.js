class TodosList extends React.Component {
    constructor(props) {
        super(props)

        this.input = '';
        this.storeTodoName = this.storeTodoName.bind(this);                     
    }    

    storeTodoName(event) {
        this.input = event.target.value || ''
    }

    get inputItem() {
       return React.createElement('input', {onChange: this.storeTodoName});
    }

    get addTodoButton(){        
        return React.createElement('button', {
            onClick: () => this.props.dispatcher.addTodo(this.input)             
        },'New todo');
    }
    
    get todosList() {                           
        if (this.props.todos.length === 0) {
            return;
        }
        let lis = this.props.todos.map( todo => {            
            return React.createElement('li', {
                key: todo.id, 
                onClick: () => this.props.dispatcher.toggleTodo(todo.id),
                style: {
                    textDecoration: todo.completed ? 'line-through' : 'none'                        
                }
            }, todo.text)            
        })                            
        return React.createElement('ul',{}, ...lis);
    }    

    get footer() {
        return React.createElement('p', 
            {},
            'Show',
            new Footer({
                filter: 'SHOW_ALL', 
                children: 'All', 
                dispatcher: 
                this.props.dispatcher}
            ).element, 
            new Footer(
                {filter: 'SHOW_ACTIVE',
                 children: 'Active', 
                 dispatcher: 
                 this.props.dispatcher}
            ).element,
            new Footer(
                {filter: 'SHOW_COMPLETED', 
                children: 'Complete', 
                dispatcher: this.props.dispatcher}
            ).element);
    }

    render() {        
        return (
                React.createElement('div',
                {},
                this.inputItem,
                this.addTodoButton,
                this.todosList,
                this.footer                               
            )
        )
    }
}