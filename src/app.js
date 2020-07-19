import React from 'react';
import {Switch, Route} from 'react-router';
function Home () {
    return (
        <div>
            Home 3
        </div>
    )
}
class App extends React.Component{
    render(){
        return(
            <Switch>
                <Route path="/" render={props => (
                    <Home {...props} />
                )} />
            </Switch>
        )
    }
}

export default App;