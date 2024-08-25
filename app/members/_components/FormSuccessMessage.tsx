export default function FormSuccessMessage() {
    return (
        <div className={`h-full flex flex-col gap-4 items-center justify-center text-center`}>
            <h2 className={`mt-8 font-serif text-3xl leading-none font-bold`}>Thank you.</h2>
            <p className={`mt-4`}>We will get back to you very soon.</p>
        </div>
    )
}