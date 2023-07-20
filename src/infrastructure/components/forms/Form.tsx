import { BsLaptop } from 'react-icons/bs'

interface formProps {
    children: React.ReactNode
    handleSubmit: (event: React.SyntheticEvent) => void
    formHeader: String
}

export default function Form(formProps: formProps) {
    const { children, handleSubmit, formHeader } = formProps

    return (
        <>
            <div className='form-header flex justify-center md:justify-start bg-medium-gray h-1/6 w-full border-b mx-auto py-4 px-5'>
                <BsLaptop
                    className='inline my-auto mr-2'
                    size='24'
                />
                <p className='text-base my-auto font-medium'>
                    New Item - {formHeader}
                </p>
            </div>
            <div className='container p-6 bg-white rounded-lg'>
                <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-2 gap-10 p-6 container__content'>
                        {children}
                    </div>

                    <div className='flex items-center justify-end h-24 border-t container__button'>
                        <button
                            className='flex items-center justify-center px-4 py-2 text-white border-2 rounded-md w-[10rem] md:mr-4 border-orange-dark bg-primary-light hover:border-black'
                            type='submit'
                        >
                            + Add
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
