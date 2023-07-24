import { useEffect, useState } from 'react'
import SelectOption from '../SelectOption'
import TextArea from '../TextArea'
import TextInput from '../TextInput'
import Form from './Form'
import { useGetUserInChargeSelect } from '../../hooks/Users/useGetUserInChargeSelect'
import { useGetUsersSelect } from '../../hooks/Users/useGetUsersSelect'
import { useGetGroupInChargeSelect } from '../../hooks/Groups/useGetGroupInChargeSelect'
import { useGetGroupsSelect } from '../../hooks/Groups/useGetGroupsSelect'
import { useGetLocationsSelect } from '../../hooks/Locations/useGetLocationsSelect'
import { useGetManufacturersSelect } from '../../hooks/Manufacturers/useGetManufacturersSelect'
import { useGetAutoupdatesystemsSelect } from '../../hooks/Autoupdatesystems/useGetAutoupdatesystemsSelect'
import { useGetSoftwareCategoriesSelect } from '../../hooks/Softwares/useGetSoftwareCategoriesSelect'
import { useGetAllSoftwares } from '../../hooks/Softwares/useGetAllSoftwares'
import Checkbox from '../CheckBox'
import ImageInput from '../ImageInput'

export default function SoftwareForm() {
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
    }

    const userInChargeOptions = useGetUserInChargeSelect()
    const usersOptions = useGetUsersSelect()
    const groupInChargeOptions = useGetGroupInChargeSelect()
    const groupsOptions = useGetGroupsSelect()
    const locationOptions = useGetLocationsSelect()
    const manufacturerOptions = useGetManufacturersSelect()
    const softwarecategoryOptions = useGetSoftwareCategoriesSelect()
    const autoupdatesystemOptions = useGetAutoupdatesystemsSelect()
    const upgradeOptions = useGetAllSoftwares()

    interface CheckboxState {
        associable: boolean
        upgrade: boolean
    }

    useEffect(() => {
        usersOptions.get()
        userInChargeOptions.get()
        groupsOptions.get()
        groupInChargeOptions.get()
        locationOptions.get()
        manufacturerOptions.get()
        softwarecategoryOptions.get()
        autoupdatesystemOptions.get()
        upgradeOptions.get()
    }, [])

    const [checkboxes, setCheckboxes] = useState({
        associable: false,
        upgrade: false,
    })

    const handleCheckboxChange = (checkboxName: keyof CheckboxState) => {
        setCheckboxes((prevCheckboxes) => ({
            ...prevCheckboxes,
            [checkboxName]: !prevCheckboxes[checkboxName],
        }))
    }

    return (
        <div className='m-6 bg-white rounded container_form_computer'>
            <Form handleSubmit={handleSubmit}>
                <div className='flex flex-col items-start'>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='testing'
                    >
                        Name
                    </label>
                    <TextInput
                        id={'testing'}
                        placeholder={'ingrese su nombre'}
                    />
                </div>

                <div className='flex flex-col items-start'>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='childof'
                    >
                        Associable to a Ticket
                    </label>
                    <div className='grid grid-cols-4 gap-2 flex-1'>
                        <Checkbox
                            id='childof'
                            checked={checkboxes.associable}
                            onChange={() => handleCheckboxChange('associable')}
                        />
                    </div>
                </div>

                <div className='flex flex-col items-start'>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='location'
                    >
                        Locations
                    </label>
                    <SelectOption
                        id={'location'}
                        options={locationOptions.data?.data}
                    />
                </div>

                <div className='flex flex-col items-start'>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='hardware'
                    >
                        Technician in charge of the hardware
                    </label>
                    <SelectOption
                        id={'hardware'}
                        options={userInChargeOptions.data?.data}
                    />
                </div>

                <div className='flex flex-col items-start'>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='publisher'
                    >
                        Publisher
                    </label>
                    <SelectOption
                        id={'publisher'}
                        options={manufacturerOptions.data?.data}
                    />
                </div>

                <div className='flex flex-col items-start'>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='group-hardware'
                    >
                        Group in charge of the hardware
                    </label>
                    <SelectOption
                        id={'group-hardware'}
                        options={groupInChargeOptions.data?.data}
                    />
                </div>

                <div className='flex flex-col items-start'>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='user'
                    >
                        User
                    </label>
                    <SelectOption
                        id={'user'}
                        options={usersOptions.data?.data}
                    />
                </div>

                <div className='flex flex-col items-start'>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='groups'
                    >
                        Groups
                    </label>
                    <SelectOption
                        id={'groups'}
                        options={groupsOptions.data?.data}
                    />
                </div>

                <div className='flex flex-col items-start'>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='comment'
                    >
                        Comment
                    </label>
                    <TextArea
                        id={'comment'}
                        placeholder='Enter your comment here'
                        rows={3}
                    />
                </div>

                <div className='flex flex-col items-start'>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='pictures'
                    >
                        Pictures
                    </label>
                    <ImageInput
                        id={'pictures'}
                        fileType={'.jpg, .jpeg, .png'}
                        maxSize={3}
                    />
                </div>

                <div className='flex flex-col items-start'>
                    <label className='text-sm mb-2 font-semibold block'>
                        Upgrade
                    </label>
                    <div className='grid grid-cols-4 gap-2'>
                        <Checkbox
                            id='upgrade'
                            label='From'
                            checked={checkboxes.upgrade}
                            onChange={() => handleCheckboxChange('upgrade')}
                        />
                        <SelectOption
                            id={'from'}
                            label={''}
                            options={upgradeOptions?.data}
                        />
                    </div>
                </div>

                <div className='flex flex-col items-start'>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='softwarecategories'
                    >
                        Software Category
                    </label>
                    <SelectOption
                        id={'softwarecategories'}
                        options={softwarecategoryOptions?.data}
                    />
                </div>
            </Form>
        </div>
    )
}
