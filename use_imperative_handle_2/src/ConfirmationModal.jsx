import React, { useImperativeHandle, useRef } from 'react'

function ConfirmationModal({ isOpen, onClose }, ref) {
    const closeRef = useRef()
    const denyRef = useRef()
    const confirmRef = useRef()

    useImperativeHandle(ref, () => {
        return {
            focusCloseBtn: () => closeRef.current.focus(),
            focusDenyBtn: () => denyRef.current.focus(),
            focusConfirmBtn: () => confirmRef.current.focus(),
        }
    })

    // NOTE: Kyle misses that you need refs
    // to return even if modal isn't open
    if (!isOpen)
        return (
            <>
                <span ref={closeRef} />
                <span ref={denyRef} />
                <span ref={confirmRef} />
            </>
        )

    return (
        <div className="modal" ref={ref}>
            <button
                type="submit"
                className="close-btn"
                ref={closeRef}
                onClick={onClose}
            >
                &#88;
            </button>
            <div className="modal-header">
                <h1>Title</h1>
            </div>
            <div className="modal-body">Do you confirm?</div>
            <div className="modal-footer">
                <button
                    type="submit"
                    className="confirm-btn"
                    ref={confirmRef}
                    onClick={onClose}
                >
                    Yes
                </button>
                <button
                    type="submit"
                    className="deny-btn"
                    ref={denyRef}
                    onClick={onClose}
                >
                    No
                </button>
            </div>
        </div>
    )
}

export default React.forwardRef(ConfirmationModal)
