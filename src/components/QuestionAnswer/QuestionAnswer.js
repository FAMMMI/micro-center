import React from 'react';
import './QuestionAnswer.css'

const QuestionAnswer = () => {
    return (
        <div className='Question-container'>
            <div>
                <h1>1. How React Works ?</h1>
                <p><strong>Answer: </strong>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It designs views for each state in the application, updates, and renders just the right component when the data changes. Hence the declarative view makes that code more predictable and easier to debug. A React application is made of multiple components and each of them is responsible for rendering a small, reusable piece of HTML. Components can be nested within other components and doing that, allows complex applications to be built out of simple building blocks. React uses virtual dom in which it reserves the recent changes and it compares it with the react-dom, then discovers the changes between these two and updates the actual dom.</p>
            </div>
            <div>
                <h1>2.Props vs State</h1>
                <p><strong>Answer: </strong>Props (short for properties) are a Component's configuration. They are received from above and immutable. A Component cannot change its props, but it put together the props of its child Components.<br />
                    The state is a data structure that starts with a default value when a Component mounts. The state object is where the values are stored that belong to the component. A Component manages its state internally. Besides setting an initial state, it cannot fiddle with the state of its children.

                </p>
            </div>
        </div>
    );
};

export default QuestionAnswer;