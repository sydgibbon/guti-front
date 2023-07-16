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
        <div className='m-6 bg-white rounded container_form_computer'>
            <Form handleSubmit={handleSubmit}>
                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='name'
                    >
                        Name
                    </label>
                    <TextInput
                        id={'name'}
                        label={'Name'}
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
                        label={'Status'}
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
                        label={'Locations'}
                        options={locationOptions.data?.data}
                    />
                </div>

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='passivedcequipmenttypes'
                    >
                        Passive device types
                    </label>
                    <SelectOption
                        id={'passivedcequipmenttypes'}
                        label='Passive device types'
                        options={passiveDeviceTypeOptions?.data}
                    />
                </div>

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='user_tech'
                    >
                        Technician in charge of the hardware
                    </label>
                    <SelectOption
                        id={'user_tech'}
                        label={'Technician in charge of the hardware'}
                        options={userInChargeOptions.data?.data}
                    />
                </div>

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='manufacturers'
                    >
                        Manufacturers
                    </label>
                    <SelectOption
                        id={'manufacturers'}
                        label='Manufacturers'
                        options={manufacturerOptions.data?.data}
                    />
                </div>

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='groups_tech'
                    >
                        Group in charge of the hardware
                    </label>
                    <SelectOption
                        id={'groups_tech'}
                        label={'Group in charge of the hardware'}
                        options={groupInChargeOptions.data?.data}
                    />
                </div>

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='pdumodels'
                    >
                        Model
                    </label>
                    <SelectOption
                        id={'pdumodels'}
                        label='Model'
                        options={passiveDeviceModelOptions?.data}
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
                        label='Serial Number'
                        placeholder='Enter your Serial Number here'
                        required
                    />
                </div>

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='serial'
                    >
                        Inventory Number
                    </label>
                    <TextInput
                        id={'serial'}
                        label='Inventory Number'
                        placeholder='Enter your Inventory Number here'
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
                        label='Comments'
                        rows={3}
                    />
                </div>
            </Form>
        </div>
    )
}
