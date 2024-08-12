import ToastProvider from "../../_components/ToastProvider"


export default function Template({ children }: { children: React.ReactNode }) {

    console.log('hello template')

    return (
        <ToastProvider>
            {children}
        </ToastProvider>
    )
}