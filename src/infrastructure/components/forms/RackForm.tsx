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
import { useGetAutoupdatesystemsSelect } from '../../hooks/Autoupdatesystems/useGetAutoupdatesystemsSelect'
import { useGetRackmodelsSelect } from '../../hooks/Racks/useGetRackmodelsSelect'
import { useGetRacktypesSelect } from '../../hooks/Racks/useGetRacktypesSelect'
import { useGetDcroomsSelect } from '../../hooks/Racks/useGetDcroomsSelect'

export default function RackForm() {
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
    const rackModelOptions = useGetRackmodelsSelect()
    const rackTypeOptions = useGetRacktypesSelect()
    const autoupdatesystemOptions = useGetAutoupdatesystemsSelect()
    const dcRoomOptions = useGetDcroomsSelect()

    const orientationOptions: OptionValue[] = [
        {
            name: 'North',
            id: '1',
        },
        {
            name: 'South',
            id: '2',
        },
        {
            name: 'East',
            id: '3',
        },
        {
            name: 'West',
            id: '4',
        },
    ]

    useEffect(() => {
        userInChargeOptions.get()
        groupInChargeOptions.get()
        locationOptions.get()
        stateOptions.get()
        manufacturerOptions.get()
        rackModelOptions.get()
        rackTypeOptions.get()
        dcRoomOptions.get()
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
                        htmlFor='type'
                    >
                        Rack types
                    </label>
                    <SelectOption
                        id='type'
                        label='Rack types'
                        options={rackTypeOptions?.data}
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
                        label={'Technician in charge of the hardware'}
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
                        label='Manufacturers'
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
                        label={'Group in charge of the hardware'}
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
                        label='Model'
                        options={rackModelOptions?.data}
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
                        htmlFor='otherserial'
                    >
                        Inventory Number
                    </label>
                    <TextInput
                        id={'otherserial'}
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
                        Comment
                    </label>
                    <TextArea
                        id={'comment'}
                        label='Comment'
                        rows={3}
                    />
                </div>

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='serverroom'
                    >
                        Server Rooms
                    </label>
                    <SelectOption
                        id='serverroom'
                        label='Server Rooms'
                        options={dcRoomOptions?.data}
                    />
                </div>

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='room_orientation'
                    >
                        Door orientation in room
                    </label>
                    <SelectOption
                        id={'room_orientation'}
                        label='Door orientation in room'
                        options={orientationOptions}
                    />
                </div>

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='number_units'
                    >
                        Number of units
                    </label>
                    <TextInput
                        id={'number_units'}
                        label='Number of units'
                        type={'number'}
                    />
                </div>

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='width'
                    >
                        Width
                    </label>
                    <TextInput
                        id={'width'}
                        label='Width'
                        type={'number'}
                    />
                </div>

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='height'
                    >
                        Height
                    </label>
                    <TextInput
                        id={'height'}
                        label='Height'
                        type={'number'}
                    />
                </div>

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='depth'
                    >
                        Depth
                    </label>
                    <TextInput
                        id={'depth'}
                        label='Depth'
                        type={'number'}
                    />
                </div>

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='max_power'
                    >
                        Max. power (in watts)
                    </label>
                    <TextInput
                        id={'max_power'}
                        label='Max. power (in watts)'
                        type={'number'}
                    />
                </div>

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='mesured_power'
                    >
                        Measured Power (in watts)
                    </label>
                    <TextInput
                        id={'mesured_power'}
                        label='Measured Power (in watts)'
                        type={'number'}
                    />
                </div>

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='max_weight'
                    >
                        Max. weight
                    </label>
                    <TextInput
                        id={'max_weight'}
                        label='Max. weight'
                        type={'number'}
                    />
                </div>

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='bgcolor'
                    >
                        Color
                    </label>
                    <TextInput
                        id={'bgcolor'}
                        label={'Color'}
                        type='text'
                    />
                </div>
            </Form>
        </div>
    )
}
