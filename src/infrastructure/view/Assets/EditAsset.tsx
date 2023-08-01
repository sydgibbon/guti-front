import {
    AssetOptions,
    EditAssetOption,
} from '../../contexts/asset/AssetOptions'
import { useLocation } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import SidebarMenu from '../../components/dashboard/SidebarMenu'
import { capitalize } from '@mui/material'

export default function EditAsset() {
    const [selectedOption, setSelectedOption] = useState<string>('')

    const assetPath = useLocation().pathname
    const asset = assetPath.substring(assetPath.lastIndexOf('/') + 1)

    const selectedOptions: EditAssetOption | undefined = AssetOptions.find(
        (locName) => locName.name === capitalize(asset)
    )

    const handleOptionClick = (optionName: string) => {
        setSelectedOption(optionName)
    }

    // Set the initial selected option to the first item in the options list
    useEffect(() => {
        if (
            selectedOption === '' &&
            selectedOptions &&
            selectedOptions.options.length > 0
        ) {
            setSelectedOption(selectedOptions.options[0].name)
        }
    }, [])

    return (
        <div className='flex flex-col edit-asset-container'>
            <div className='flex form-sidebar-section'>
                <div className='mt-12 w-56 sidebar'>
                    {selectedOptions &&
                        selectedOptions.options.map((option) => (
                            <SidebarMenu
                                key={option.name}
                                text={option.name}
                                selected={selectedOption}
                                setSelected={handleOptionClick}
                                icon={<></>}
                                hasOptions={false}
                                subMenu={<></>}
                                context={'editAsset'}
                            />
                        ))}
                </div>
                <div className='flex flex-col w-full title-form-section'>
                    {selectedOption && (
                        <div className='box-border block title'>
                            <span className='p-2 text-lg font-semibold bg-white rounded-md form-title'>
                                {`${selectedOptions?.name} - ExampleAsset`}
                            </span>
                        </div>
                    )}

                    <div className='mt-5 mr-6 form'>
                        {selectedOption &&
                            selectedOptions?.options.find(
                                (option) => option.name === selectedOption
                            )?.content}
                    </div>
                </div>
            </div>
        </div>
    )
}
