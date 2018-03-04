class Todo extends React.Component {
    constructor(props) {
        super(props)               
    }
    
    get style() {
        return {
            textDecoration: this.props.completed ? 'line-through' : 'none'                        
        }
    }

    get element() {
        return React.createElement('li', {                   
            onClick: this.props.onClick,
            style: this.style
        }, this.props.text)      
    }        
}