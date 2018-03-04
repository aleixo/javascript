class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    get element() {   
        let filterLinks = [
            {filter: 'SHOW_ALL', text: 'ALL'},
            {filter: 'SHOW_ACTIVE', text: 'Active'},
            {filter: 'SHOW_COMPLETED', text: 'Completed'}
        ];        

        const elements = filterLinks.map( link => {
           return new FilterLink({   
                key: link.filter,
                children: link.text,                 
                currentFilter: this.props.visibilityFilter,
                onClick: (event) => this.props.onClick(event, link.filter)
            }).element;            
        });        
        
        return React.createElement('p', {}, 'Show', elements);
    }
}