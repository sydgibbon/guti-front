import { useEffect } from 'react'
import SelectOption, { OptionValue } from '../SelectOption'
import TextArea from '../TextArea'
import TextInput from '../TextInput'
import Form from './Form'
import { useGetUserInChargeSelect } from '../../hooks/Users/useGetUserInChargeSelect'
import { useGetGroupInChargeSelect } from '../../hooks/Groups/useGetGroupInChargeSelect'
import { useGetLocationsSelect } from '../../hooks/Locations/useGetLocationsSelect'
import { useGetStatesSelect } from '../../hooks/States/useGetStatesSelect'
import { useGetManufacturersSelect } from '../../hooks/Manufacturers/useGetManufacturersSelect'
import { useGetPdumodelsSelect } from '../../hooks/Pdus/useGetPdumodelsSelect'
import { useGetPdutypesSelect } from '../../hooks/Pdus/useGetPdutypesSelect'

export default function PduForm() {
    // const computer = useCreateComputer();

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
    }

    // useEffect(() => {
    //   if (computer.error) {
    //     alert(computer.error);
    //   }
    // }, [computer.error]);4

    const userInChargeOptions = useGetUserInChargeSelect()
    const groupInChargeOptions = useGetGroupInChargeSelect()
    const locationOptions = useGetLocationsSelect()
    const stateOptions = useGetStatesSelect()
    const manufacturerOptions = useGetManufacturersSelect()
    const pduModelOptions = useGetPdumodelsSelect()
    const pduTypeOptions = useGetPdutypesSelect()

    useEffect(() => {
        userInChargeOptions.get()
        groupInChargeOptions.get()
        locationOptions.get()
        stateOptions.get()
        manufacturerOptions.get()
        pduModelOptions.get()
        pduTypeOptions.get()
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
                        htmlFor='pdutypes'
                    >
                        PDU types
                    </label>
                    <SelectOption
                        id={'pdutypes'}
                        options={pduTypeOptions?.data}
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
                        options={pduModelOptions?.data}
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
                        htmlFor='serial'
                    >
                        Inventory Number
                    </label>
                    <TextInput
                        id={'serial'}
                        placeholder='Enter your Inventory Number here'
                        required
                    />
                </div>

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='comment'
                    >
                        Comment
                    </label>
                    <TextArea
                        id={'comment'}
                        rows={3}
                    />
                </div>
            </Form>
        </div>
    )
}
