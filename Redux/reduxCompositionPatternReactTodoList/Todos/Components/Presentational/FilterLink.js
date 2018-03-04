class FilterLink extends React.Component {
    constructor(props) {
        super(props);        
        this.filter = this.props.key;                
    }

    get element() {        
        if (this.props.currentFilter === this.filter) {            
            return React.createElement('span' ,{} ,' ' ,this.props.children);
        }
        return React.createElement('a', {
            href: '#' ,
            onClick: this.props.onClick
        }, ' ', this.props.children);                        
    }
}