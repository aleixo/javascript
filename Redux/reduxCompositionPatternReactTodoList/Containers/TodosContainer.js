class TodosContainer extends React.Component {
    constructor(props) {
        super(props)
        
        this.storeTodoName = this.storeTodoName.bind(this);                     
    }    

    storeTodoName(event) {
        this.input = event.target.value;
    }

    get inputItem() {
       return React.createElement('input', {onChange: this.storeTodoName});
    }

    get addTodoButton() {        
        return React.createElement('button', {
            onClick: () => this.props.dispatcher.addTodo(this.input)             
        },'New todo');
    }

    get todosList() {
        return new TodosList({
            todos: this.props.todos,
            onClick: todo => this.props.dispatcher.toggleTodo(todo.id) 
            
        }).element;
    }

    get footer() {   
        return new Footer({
            visibilityFilter: this.props.visibilityFilter,
            onClick: (event, filter) => {
                event.preventDefault();
                this.props.dispatcher.toggleVisibilityFilter(filter);
            }
        }).element;        
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