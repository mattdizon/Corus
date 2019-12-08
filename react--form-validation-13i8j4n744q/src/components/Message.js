import React from 'react';

const Message = ({message}) => {
    return (
        <div>
            <h3 className="text-center message">
                {message ? message : "Form is Incomplete!"}
            </h3>
        </div>
    )
}

export default Message;
