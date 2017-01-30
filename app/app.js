import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'

import { Route, Router, IndexRoute, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import reducers from './reducers'

const store = createStore(reducers, applyMiddleware(thunk));
const history = syncHistoryWithStore(hashHistory, store);

class Container extends React.Component {
    render() {
        return (
			<div>
                {this.props.children}
			</div>
        )
    }
}

class Index extends React.Component {
	render() {
		return (<div>Hello world!</div>)
	}
}

ReactDOM.render(
	<Provider store={store} >
		<Router history={history}>
			<Route path="/" component={Container}>
				<IndexRoute components={Index}/>
			</Route>
		</Router>
	</Provider>,
    document.getElementById('wrap')
);
