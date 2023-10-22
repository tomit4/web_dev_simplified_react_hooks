import { useState, useRef } from 'react'
import ConfirmationModal from './ConfirmationModal.jsx'

export default function App() {
    const [open, setOpen] = useState(false)
    const modalRef = useRef()
    console.log('modalRef :=>', modalRef)

    return (
        <>
            <button type="submit" onClick={() => setOpen(true)}>
                Open
            </button>
            <ConfirmationModal
                ref={modalRef}
                isOpen={open}
                onClose={() => setOpen(false)}
            />
            {/* Kyle misses an undefined conditional here */}
            <button
                type="submit"
                onClick={() => {
                    if (modalRef.current) {
                        modalRef.current.focusCloseBtn()
                    }
                }}
            >
                Focus Close
            </button>
            <button
                type="submit"
                onClick={() => {
                    if (modalRef.current) {
                        modalRef.current.focusConfirmBtn()
                    }
                }}
            >
                Focus Confirm
            </button>
            <button
                type="submit"
                onClick={() => {
                    if (modalRef.current) {
                        modalRef.current.focusDenyBtn()
                    }
                }}
            >
                Focus Deny
            </button>
        </>
    )
}
