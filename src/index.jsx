import React from "react"
import { Router, Route, Link } from "react-router-dom"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { createBrowserHistory } from "history"
import createSagaMiddleware from "redux-saga"
import { rootReducer, rootSaga } from "./modules"
import Main from "./pages/Main.jsx"
import Test from "./pages/test"

const browserHistory = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware({
	context: {
		history: browserHistory,
	},
})

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

render(
	<Router history={browserHistory}>
		<Provider store={store}>
			<Main />
		</Provider>
	</Router>,
	document.getElementById("root")
)
