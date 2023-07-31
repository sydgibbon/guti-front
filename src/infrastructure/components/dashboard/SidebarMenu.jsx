import { BsChevronCompactDown } from 'react-icons/bs'
import Item from '../atomic/Item'

const SidebarMenu = ({
    text,
    icon,
    subMenu,
    selected,
    setSelected,
    hasOptions,
    context,
}) => {
    const setSidebarMenuItemSelected = () => {
        if (selected !== text) setSelected(text)
    }

    return (
        <>
            <div
                className={`py-2 px-3 flex justify-between hover:border-l-2 border-primary-light cursor-normal select-none 
        ${
            context === 'edditAsset'
                ? selected === text && 'shadow-md border-l-2'
                : selected === text &&
                  !hasOptions &&
                  'border-l-2 bg-white font-bold'
        } 
        `}
                onClick={setSidebarMenuItemSelected}
            >
                <Item
                    icon={icon}
                    text={text}
                />
                {hasOptions && (
                    <BsChevronCompactDown className='block my-auto' />
                )}
            </div>
            {selected === text && subMenu}
        </>
    )
}

export default SidebarMenu
