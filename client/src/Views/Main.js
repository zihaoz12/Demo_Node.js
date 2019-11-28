import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Gallery from '../Component/Gallery';
import Login from '../Component/Login';
import Register from '../Component/Register';
import NewPost from '../Component/NewPost';


const Main = ()=>(
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route  path='/gallery' component={Gallery}/>
            <Route  path='/login' component={Login}/>
            <Route  path='/register' component={Register}/>
            <Route  path='/about' component={About}/>
            <Route  path='/posts/new' component={NewPost}/>
        </Switch>
    </main>
)

export default Main