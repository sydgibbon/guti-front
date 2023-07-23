import { useEffect } from 'react'
import { useGetGroupInChargeSelect } from '../../hooks/Groups/useGetGroupInChargeSelect'
import { useGetLocationsSelect } from '../../hooks/Locations/useGetLocationsSelect'
import { useGetManufacturersSelect } from '../../hooks/Manufacturers/useGetManufacturersSelect'
import { useGetStatesSelect } from '../../hooks/States/useGetStatesSelect'
import { useGetUserInChargeSelect } from '../../hooks/Users/useGetUserInChargeSelect'
import SelectOption, { OptionValue } from '../SelectOption'
import TextArea from '../TextArea'
import TextInput from '../TextInput'
import Form from './Form'
import { useGetPassivedcmodelsSelect } from '../../hooks/PassiveDevices/useGetPassivedcmodelsSelect'
import { useGetPassivedctypesSelect } from '../../hooks/PassiveDevices/useGetPassivedctypesSelect'

export default function PassiveDeviceForm() {
    // const computer = useCreateComputer();

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
    }

    // useEffect(() => {
    //   if (computer.error) {
    //     alert(computer.error);
    //   }
    // }, [computer.error]);

    const userInChargeOptions = useGetUserInChargeSelect()
    const groupInChargeOptions = useGetGroupInChargeSelect()
    const locationOptions = useGetLocationsSelect()
    const stateOptions = useGetStatesSelect()
    const manufacturerOptions = useGetManufacturersSelect()
    const passiveDeviceModelOptions = useGetPassivedcmodelsSelect()
    const passiveDeviceTypeOptions = useGetPassivedctypesSelect()

    useEffect(() => {
        userInChargeOptions.get()
        groupInChargeOptions.get()
        locationOptions.get()
        stateOptions.get()
        manufacturerOptions.get()
        passiveDeviceModelOptions.get()
        passiveDeviceTypeOptions.get()
    }, [])

    return (
        <div className='bg-white rounded container_form_computer'>
            <Form
                handleSubmit={handleSubmit}
                formHeader={'Passives'}
                iconName={''}
            >
                <TextInput
                    id={'name'}
                    label={'Name'}
                    placeholder={'ingrese su nombre'}
                />

                <SelectOption
                    id={'status'}
                    label={'Status'}
                    options={stateOptions.data?.data}
                />
                <SelectOption
                    id={'location'}
                    label={'Locations'}
                    options={locationOptions.data?.data}
                />
                <SelectOption
                    id={'passivedcequipmenttypes'}
                    label='Passive device types'
                    options={passiveDeviceTypeOptions?.data}
                />
                <SelectOption
                    id={'user_tech'}
                    label={'Technician in charge of the hardware'}
                    options={userInChargeOptions.data?.data}
                />
                <SelectOption
                    id={'manufacturers'}
                    label='Manufacturers'
                    options={manufacturerOptions.data?.data}
                />
                <SelectOption
                    id={'groups_tech'}
                    label={'Group in charge of the hardware'}
                    options={groupInChargeOptions.data?.data}
                />
                <SelectOption
                    id={'pdumodels'}
                    label='Model'
                    options={passiveDeviceModelOptions?.data}
                />

                <TextInput
                    id={'serialnumber'}
                    label='Serial Number'
                    placeholder='Enter your Serial Number here'
                    required
                />
                <TextInput
                    id={'serial'}
                    label='Inventory Number'
                    placeholder='Enter your Inventory Number here'
                    required
                />
                <TextArea
                    id={'comment'}
                    label='Comments'
                    rows={3}
                />
            </Form>
        </div>
    )
}
