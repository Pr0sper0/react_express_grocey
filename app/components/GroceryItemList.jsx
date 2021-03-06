var React = require('react');
var createReactClass = require('create-react-class');
var GroceryItem = require('./GroceryItem.jsx');
var GroceryListAddItem = require('./GroceryListAddItem.jsx');

module.exports = createReactClass({
    render(){
        return (
            <div>
                <h1>Grocery Listify</h1>
                <div>
                    {this.props.items.map(function(itek,index){
                        return (
                           <GroceryItem key={"item" + index} item={itek}/>
                        )
                    })
                    }
                </div>
                    <GroceryListAddItem />
            </div>   
        );
    }
})