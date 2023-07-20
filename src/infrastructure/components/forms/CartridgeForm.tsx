import { useEffect } from 'react'
import SelectOption, { OptionValue } from '../SelectOption'
import ImageInput from '../ImageInput'
import TextArea from '../TextArea'
import TextInput from '../TextInput'
import Form from './Form'
import { useGetUserInChargeSelect } from '../../hooks/Users/useGetUserInChargeSelect'
import { useGetGroupInChargeSelect } from '../../hooks/Groups/useGetGroupInChargeSelect'
import { useGetLocationsSelect } from '../../hooks/Locations/useGetLocationsSelect'
import { useGetManufacturersSelect } from '../../hooks/Manufacturers/useGetManufacturersSelect'
import { useGetCartridgetypesSelect } from '../../hooks/Cartridges/useGetCartridgetypesSelect'

export default function CartridgeForm() {
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
    }

    const numbers = (): OptionValue[] => {
        const options: OptionValue[] = []
        for (let i = 1; i <= 100; i++) {
            const option: OptionValue = {
                id: i.toString(),
                name: i.toString(),
            }
            options.push(option)
        }

        return options
    }

    const threshold = numbers()
    const userInChargeOptions = useGetUserInChargeSelect()
    const groupInChargeOptions = useGetGroupInChargeSelect()
    const locationOptions = useGetLocationsSelect()
    const manufacturerOptions = useGetManufacturersSelect()
    const cartridgeTypeOptions = useGetCartridgetypesSelect()

    useEffect(() => {
        userInChargeOptions.get()
        groupInChargeOptions.get()
        locationOptions.get()
        manufacturerOptions.get()
        cartridgeTypeOptions.get()
    }, [])

    return (
        <div className='bg-white rounded container_form_computer'>
            <Form
                handleSubmit={handleSubmit}
                formHeader={'Cartridges'}
            >
                <TextInput
                    id={'testing'}
                    label={'Name'}
                    placeholder={'ingrese su nombre'}
                />

                <SelectOption
                    id={'location'}
                    label={'Locations'}
                    options={locationOptions.data?.data}
                />
                <SelectOption
                    id='type'
                    label='Cartridge Types'
                    options={cartridgeTypeOptions?.data}
                />
                <TextInput
                    id={'reference'}
                    label={'Reference'}
                />

                <SelectOption
                    id={'hardware'}
                    label={'Technician in charge of the hardware'}
                    options={userInChargeOptions.data?.data}
                />
                <SelectOption
                    id='manufacturer'
                    label='Manufacturers'
                    options={manufacturerOptions.data?.data}
                />
                <SelectOption
                    id={'group-hardware'}
                    label={'Group in charge of the hardware'}
                    options={groupInChargeOptions.data?.data}
                />

                <TextArea
                    id={'comment'}
                    label='Comments'
                    rows={3}
                />

                <SelectOption
                    id={'alertthreshold'}
                    label={'Alert Threshold'}
                    options={threshold}
                />

                <ImageInput
                    id={'pictures'}
                    label={'Pictures'}
                    fileType={'.jpg, .jpeg, .png'}
                    maxSize={3}
                />

                <TextInput
                    id={'stock_target'}
                    label='Stock Target'
                    type={'number'}
                />
            </Form>
        </div>
    )
}
