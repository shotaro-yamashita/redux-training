import React from 'react';
import { Route, Link, Switch, RouteComponentProps } from 'react-router-dom';
import Todo from './Todo';
import Form from '../components/Form';
import Page404 from './Page404';

type Props = {} & RouteComponentProps<{id: string}>;

const Test: React.FC<Props> = (props) => <p>画面ID: {props.match.params.id}</p>;

const Layout: React.FC = () => {
  return (
    <div className="body">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/test/1">Test</Link></li>
        <li><Link to="/form">Form</Link></li>
      </ul>

      <Switch>
        <Route exact path='/' component={Todo} />
        <Route path='/test/:id' component={Test} />
        <Route path='/form' component={Form} />
        <Route exact component={Page404} />
      </Switch>
    </div>
  );
};

export default Layout;
