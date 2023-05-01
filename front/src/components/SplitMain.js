import React from 'react';

export default function SplitMain() {
    const onClick = () => {
        import('../notify').then(result => result.default());
    };

    return (
      <div className = "SplitMain">
        <button onClick={onClick}>Click Me</button>
      </div>
    );
}