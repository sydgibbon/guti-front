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
        <div className='bg-white rounded container_form_computer'>
            <Form
                handleSubmit={handleSubmit}
                formHeader={'Software'}
                iconName={'Software'}
            >
                <TextInput
                    id={'testing'}
                    label={'Name'}
                    placeholder={'ingrese su nombre'}
                />

                <div className='  rounded-lg'>
                    <div className='mb-2 font-semibold'>
                        Associable to a Ticket
                    </div>
                    <div className='grid grid-cols-4 gap-2'>
                        <Checkbox
                            id='childof'
                            label=''
                            checked={checkboxes.associable}
                            onChange={() => handleCheckboxChange('associable')}
                        />
                    </div>
                </div>

                <SelectOption
                    id={'location'}
                    label={'Locations'}
                    options={locationOptions.data?.data}
                />
                <SelectOption
                    id={'hardware'}
                    label={'Technician in charge of the hardware'}
                    options={userInChargeOptions.data?.data}
                />
                <SelectOption
                    id={'publisher'}
                    label={'Publisher'}
                    options={manufacturerOptions.data?.data}
                />
                <SelectOption
                    id={'group-hardware'}
                    label={'Group in charge of the hardware'}
                    options={groupInChargeOptions.data?.data}
                />
                <SelectOption
                    id={'user'}
                    label={'User'}
                    options={usersOptions.data?.data}
                />
                <SelectOption
                    id={'groups'}
                    label={'Groups'}
                    options={groupsOptions.data?.data}
                />

                <TextArea
                    id={'comment'}
                    label={'Comment'}
                    placeholder='Enter your comment here'
                    rows={3}
                />

                <ImageInput
                    id={'pictures'}
                    label={'Pictures'}
                    fileType={'.jpg, .jpeg, .png'}
                    maxSize={3}
                />

                <div className='  rounded-lg'>
                    <div className='mb-2 font-semibold'>Upgrade</div>
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
                <SelectOption
                    id={'softwarecategories'}
                    label={'Software Category'}
                    options={softwarecategoryOptions?.data}
                />
            </Form>
        </div>
    )
}
