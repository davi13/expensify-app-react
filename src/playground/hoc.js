//Higer Oder component (HOC)- A comoponent(HOC) that renders another component
//Reuse Code
//Render hijacking
//Prop manipulation
//Abstrac state
import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The Info is: <strong>{props.info}</strong></p>
    </div>
);

const withAdmingWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p> this is prive info. please don't share!</p>}
            <WrappedComponent {...props} />
        </div>
    );

};

const AdminInfo = withAdmingWarning(Info);
//ReactDOM.render(<AdminInfo isAdmin={true} info="there is the details" />, document.getElementById('app'));

const requiereAuthentification = (WrappedComponent) => {
    return (props) => (
        <div>
            {!props.isAuthenticated ? <p>please connected to see the info!</p> : <WrappedComponent {...props} />}
        </div>
    )
}

const AuthInfo = requiereAuthentification(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info="there is the details" />, document.getElementById('app'));