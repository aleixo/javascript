const { Component } = React;

class TodoApp extends Component {
    constructor(props) {
        super(props)
        this.input = '';

        this.storeTodoName = this.storeTodoName.bind(this);        
        this.addTodo = this.addTodo.bind(this);

    }

    addTodo() {
        todoDispatcher.addTodo(this.input)
    } 

    storeTodoName(event) {
        this.input = event.target.value || ''
    }

    get inputItem(){
       return React.createElement('input', {onChange: this.storeTodoName});
    }

    get addTodoButton(){
        return React.createElement('button', {onClick: this.addTodo},'New todo');
    }
    
    get todosList() {        
        let lis = [];                        
        this.props.todos.forEach((todo) => {            
            lis.push(
                React.createElement('li', {
                    key: todo.id, 
                    onClick: () => todoDispatcher.toggleTodo(todo.id)
                }, todo.text)
            );
        });
        
        return React.createElement('ul',{}, ...lis);
    }

    render() {
        console.log('WILL RETURN')
        return (
                React.createElement('div',
                {},
                this.inputItem,
                this.addTodoButton,
                this.todosList            
            )
        )
    }
}