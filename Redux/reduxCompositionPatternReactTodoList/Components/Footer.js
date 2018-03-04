class Footer extends React.Component {
    constructor(props) {
        super(props);
        
        this.filter = this.props.filter;
        this.linkClicked = this.linkClicked.bind(this);
    }

    linkClicked(event) {                
        event.preventDefault();
        this.props.dispatcher.toggleVisibilityFilter(this.filter);
    }

    get element() {
        return React.createElement('a', {
            href: '#' ,
            onClick: this.linkClicked
        }, ' ', this.props.children);                        
    }
}