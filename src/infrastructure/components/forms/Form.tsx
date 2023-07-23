import { BsLaptop, BsDisplay, BsBoxSeam } from 'react-icons/bs'
import {
    TbPhone,
    TbServer,
    TbColumns,
    TbPlug,
    TbBrowser,
    TbLine,
    TbFileBarcode,
    TbApps,
    TbSitemap,
    TbUsb,
    TbPrinter,
    TbDropletFilled2,
} from 'react-icons/tb'

interface formProps {
    children: React.ReactNode
    handleSubmit: (event: React.SyntheticEvent) => void
    formHeader: string
    iconName: string
}

const formIcons: { [key: string]: React.ReactNode } = {
    Computer: <BsLaptop size='24' />,
    Monitor: <BsDisplay size='24' />,
    Software: <TbApps size='24' />,
    NetworkDevice: <TbSitemap size='24' />,
    Device: <TbUsb size='24' />,
    Printer: <TbPrinter size='24' />,
    Cartridge: <TbDropletFilled2 size='24' />,
    Consumable: <BsBoxSeam size='24' />,
    Phone: <TbPhone size='24' />,
    Rack: <TbServer size='24' />,
    Enclosures: <TbColumns size='24' />,
    Pdu: <TbPlug size='24' />,
    PassiveDevice: <TbBrowser size='24' />,
    Cable: <TbLine size='24' />,
    SimCard: <TbFileBarcode size='24' />,
}

export default function Form(formProps: formProps) {
    const { children, handleSubmit, formHeader, iconName } = formProps

    const icon = formIcons[iconName]

    return (
        <>
            <div className='form-header flex justify-center md:justify-start bg-medium-gray h-1/6 w-full border-b mx-auto py-4 px-5 gap-2'>
                {/* <BsLaptop
                    className='inline my-auto mr-2'
                    size='24'
                /> */}
                {icon}
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
