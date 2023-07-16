import { useEffect } from 'react'
import SelectOption, { OptionValue } from '../SelectOption'
import TextArea from '../TextArea'
import TextInput from '../TextInput'
import Form from './Form'
import { useGetUserInChargeSelect } from '../../hooks/Users/useGetUserInChargeSelect'
import { useGetGroupInChargeSelect } from '../../hooks/Groups/useGetGroupInChargeSelect'
import { useGetManufacturersSelect } from '../../hooks/Manufacturers/useGetManufacturersSelect'
import { useGetStatesSelect } from '../../hooks/States/useGetStatesSelect'
import { useGetLocationsSelect } from '../../hooks/Locations/useGetLocationsSelect'
import { useGetEnclosuremodelsSelect } from '../../hooks/Enclosures/useGetEnclosuremodelsSelect'

export default function EnclosuresForm() {
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
    const enclosureModelOptions = useGetEnclosuremodelsSelect()

    useEffect(() => {
        userInChargeOptions.get()
        groupInChargeOptions.get()
        locationOptions.get()
        stateOptions.get()
        manufacturerOptions.get()
        enclosureModelOptions.get()
    }, [])

    return (
        <div className='m-6 bg-white rounded container_form_computer'>
            <Form handleSubmit={handleSubmit}>
                <div>
                    <label
                        htmlFor='testing'
                        className='text-sm mb-2 font-semibold block'
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
                        htmlFor='status'
                        className='text-sm mb-2 font-semibold block'
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
                        htmlFor='location'
                        className='text-sm mb-2 font-semibold block'
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
                        htmlFor='hardware'
                        className='text-sm mb-2 font-semibold block'
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
                        htmlFor='manufacturer'
                        className='text-sm mb-2 font-semibold block'
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
                        htmlFor='group-hardware'
                        className='text-sm mb-2 font-semibold block'
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
                        htmlFor='model'
                        className='text-sm mb-2 font-semibold block'
                    >
                        Model
                    </label>
                    <SelectOption
                        id='model'
                        options={enclosureModelOptions?.data}
                    />
                </div>
                <div>
                    <label
                        htmlFor='serialnumber'
                        className='text-sm mb-2 font-semibold block'
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
                        htmlFor='otherserial'
                        className='text-sm mb-2 font-semibold block'
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
                        htmlFor='comment'
                        className='text-sm mb-2 font-semibold block'
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
                        htmlFor='power_supplies'
                        className='text-sm mb-2 font-semibold block'
                    >
                        Power supplies
                    </label>
                    <TextInput
                        id={'power_supplies'}
                        type={'number'}
                    />
                </div>
            </Form>
        </div>
    )
}
