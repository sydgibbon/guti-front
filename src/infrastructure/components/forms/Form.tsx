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
    TbUsers,
    TbMapPin,
    TbEdit,
    TbListDetails,
} from 'react-icons/tb'

interface formProps {
    children: React.ReactNode
    handleSubmit: (event: React.SyntheticEvent) => void
    formHeader: string
    iconName: string
}

const formIcons: { [key: string]: React.ReactNode } = {
    Computers: <BsLaptop size='24' />,
    Monitors: <BsDisplay size='24' />,
    Software: <TbApps size='24' />,
    NetworkDevices: <TbSitemap size='24' />,
    Devices: <TbUsb size='24' />,
    Printers: <TbPrinter size='24' />,
    Cartridges: <TbDropletFilled2 size='24' />,
    Consumables: <BsBoxSeam size='24' />,
    Phones: <TbPhone size='24' />,
    Racks: <TbServer size='24' />,
    Enclosures: <TbColumns size='24' />,
    PDUs: <TbPlug size='24' />,
    PassiveDevices: <TbBrowser size='24' />,
    Cables: <TbLine size='24' />,
    Simcards: <TbFileBarcode size='24' />,
    Groups: <TbUsers size='24' />,
    Locations: <TbMapPin size='24' />,
    Manufacturer: <TbEdit size='24' />,
    Status: <TbListDetails size='24' />,
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
