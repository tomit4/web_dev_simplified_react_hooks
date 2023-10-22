import React, { useImperativeHandle } from 'react'

export default React.forwardRef(function CustomInput({ style, ...props }, ref) {
    useImperativeHandle(
        ref,
        () => {
            return {
                alertHi: () => alert('hi'),
            }
        },
        [],
    )

    return (
        <input
            type="text"
            {...props}
            style={{
                border: 'none',
                backgroundColor: 'lightpink',
                padding: '.25em',
                borderBottom: '.1em solid black',
                borderTopRightRadius: '.25em',
                borderTopeLeftRadius: '.25em',
                ...style,
            }}
        />
    )
})
