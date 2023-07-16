import SelectOption, { OptionValue } from '../SelectOption'
import TextArea from '../TextArea'
import TextInput from '../TextInput'
import Form from './Form'

const textOption: OptionValue[] = [
    {
        name: 'Yes',
        id: '1',
    },
    {
        name: 'No',
        id: '2',
    },
]

export default function StatusForm() {
    // const computer = useCreateComputer();

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
    }

    // useEffect(() => {
    //   if (computer.error) {
    //     alert(computer.error);
    //   }
    // }, [computer.error]);

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
                        options={textOption}
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
                        options={textOption}
                    />
                </div>

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='type'
                    >
                        Devices Types
                    </label>
                    <SelectOption
                        id='type'
                        label='Devices Types'
                        options={textOption}
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
                        options={textOption}
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
                        options={textOption}
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
                        options={textOption}
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
                        options={textOption}
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
                        label='Alternate Username Number'
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
                        label='Serial Number'
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
                        label='Alternate Username'
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
                        label='Inventory Number'
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
                        label='User'
                        options={textOption}
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
                        label='Managment Type'
                        options={textOption}
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
                        label='Groups'
                        options={textOption}
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
                        label='UUID'
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
                        label='Comments'
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
                        label={'Brand'}
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
                        label='Update Source'
                        options={textOption}
                    />
                </div>
            </Form>
        </div>
    )
}
