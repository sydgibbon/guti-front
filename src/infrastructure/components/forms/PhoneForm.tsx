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
import { useGetStatesSelect } from '../../hooks/States/useGetStatesSelect'
import { useGetManufacturersSelect } from '../../hooks/Manufacturers/useGetManufacturersSelect'
import { useGetAutoupdatesystemsSelect } from '../../hooks/Autoupdatesystems/useGetAutoupdatesystemsSelect'
import { useGetPhonetypesSelect } from '../../hooks/Phones/useGetPhonetypesSelect'
import { useGetPhonemodelsSelect } from '../../hooks/Phones/useGetPhonemodelsSelect'
import { useGetPhonePowerSuppliesSelect } from '../../hooks/Phones/useGetPhonePowerSuppliesSelect'
import Checkbox from '../CheckBox'

export default function PhoneForm() {
    // const computer = useCreateComputer();

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
    }

    // useEffect(() => {
    //   if (computer.error) {
    //     alert(computer.error);
    //   }
    // }, [computer.error]);

    interface CheckboxState {
        headset: boolean
        speaker: boolean
    }

    const [checkboxes, setCheckboxes] = useState({
        headset: false,
        speaker: false,
    })

    const handleCheckboxChange = (checkboxName: keyof CheckboxState) => {
        setCheckboxes((prevCheckboxes) => ({
            ...prevCheckboxes,
            [checkboxName]: !prevCheckboxes[checkboxName],
        }))
    }

    const userInChargeOptions = useGetUserInChargeSelect()
    const usersOptions = useGetUsersSelect()
    const groupInChargeOptions = useGetGroupInChargeSelect()
    const groupsOptions = useGetGroupsSelect()
    const locationOptions = useGetLocationsSelect()
    const stateOptions = useGetStatesSelect()
    const manufacturerOptions = useGetManufacturersSelect()
    const phoneModelOptions = useGetPhonemodelsSelect()
    const phoneTypeOptions = useGetPhonetypesSelect()
    const phonePowerSupplyTypeOptions = useGetPhonePowerSuppliesSelect()
    const autoupdatesystemOptions = useGetAutoupdatesystemsSelect()

    const managementTypeOptions = [
        { id: '0', name: 'Unit Management' },
        { id: '1', name: 'Global Management' },
    ]

    useEffect(() => {
        usersOptions.get()
        userInChargeOptions.get()
        groupsOptions.get()
        groupInChargeOptions.get()
        locationOptions.get()
        stateOptions.get()
        manufacturerOptions.get()
        phoneModelOptions.get()
        phoneTypeOptions.get()
        phonePowerSupplyTypeOptions.get()
        autoupdatesystemOptions.get()
    }, [])
    return (
        <div className='m-6 bg-white rounded container_form_computer'>
            <Form handleSubmit={handleSubmit}>
                <div>
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

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='status'
                    >
                        Status
                    </label>
                    <SelectOption
                        id={'status'}
                        options={stateOptions.data?.data}
                    />
                </div>

                <div>
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

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='type'
                    >
                        Phone types
                    </label>
                    <SelectOption
                        id='type'
                        options={phoneTypeOptions?.data}
                    />
                </div>

                <div>
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

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='manufacturer'
                    >
                        Manufacturers
                    </label>
                    <SelectOption
                        id='manufacturer'
                        options={manufacturerOptions.data?.data}
                    />
                </div>

                <div>
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

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='model'
                    >
                        Model
                    </label>
                    <SelectOption
                        id='model'
                        options={phoneModelOptions?.data}
                    />
                </div>

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='alternativeusernamenumber'
                    >
                        Alternate Username Number
                    </label>
                    <TextInput
                        id={'alternativeusernamenumber'}
                        placeholder='Enter your Alternate Username number here'
                        required
                    />
                </div>

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='serialnumber'
                    >
                        Serial Number
                    </label>
                    <TextInput
                        id={'serialnumber'}
                        placeholder='Enter your Serial Number here'
                        required
                    />
                </div>

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='alternativeusername'
                    >
                        Alternate Username
                    </label>
                    <TextInput
                        id={'alternativeusername'}
                        placeholder='Enter your Alternate Username here'
                        required
                    />
                </div>

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='otherserial'
                    >
                        Inventory Number
                    </label>
                    <TextInput
                        id={'otherserial'}
                        placeholder='Enter your Inventory Number here'
                        required
                    />
                </div>

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='user'
                    >
                        User
                    </label>
                    <SelectOption
                        id='user'
                        options={usersOptions.data?.data}
                    />
                </div>

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='managmenttype'
                    >
                        Managment Type
                    </label>
                    <SelectOption
                        id='managmenttype'
                        options={managementTypeOptions}
                    />
                </div>

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='group'
                    >
                        Groups
                    </label>
                    <SelectOption
                        id='group'
                        options={groupsOptions.data?.data}
                    />
                </div>

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='uuid'
                    >
                        UUID
                    </label>
                    <TextInput
                        id='uuid'
                        placeholder='Enter your UUID here'
                        required
                    />
                </div>

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='comment'
                    >
                        Comments
                    </label>
                    <TextArea
                        id={'comment'}
                        rows={3}
                    />
                </div>

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='brand'
                    >
                        Brand
                    </label>
                    <TextInput
                        id={'brand'}
                    />
                </div>

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='updatesource'
                    >
                        Update Source
                    </label>
                    <SelectOption
                        id='updatesource'
                        options={autoupdatesystemOptions.data?.data}
                    />
                </div>

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='number_line'
                    >
                        Number of Lines
                    </label>
                    <TextInput
                        id={'number_line'}
                        type={'number'}
                    />
                </div>

                <div className='  rounded-lg'>
                    <div className='mb-2 font-semibold'>Ports</div>
                    <div className='grid grid-cols-5 gap-2'>
                        <Checkbox
                            id='have_headset'
                            label='Headset'
                            checked={checkboxes.headset}
                            onChange={() => handleCheckboxChange('headset')}
                        />
                        <Checkbox
                            id='have_hp'
                            label='Speaker'
                            checked={checkboxes.speaker}
                            onChange={() => handleCheckboxChange('speaker')}
                        />
                    </div>
                </div>
            </Form>
        </div>
    )
}
