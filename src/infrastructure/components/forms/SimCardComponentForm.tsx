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

export default function SimCardComponentForm() {
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
                        htmlFor='manufacturer'
                    >
                        Manufacturer
                    </label>
                    <SelectOption
                        id='manufacturer'
                        label='Manufacturer'
                    />
                </div>

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='type'
                    >
                        Type
                    </label>
                    <SelectOption
                        id='type'
                        label='Type'
                    />
                </div>

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='voltage'
                    >
                        Voltage
                    </label>
                    <TextInput
                        id={'voltage'}
                        label='Voltage'
                    />
                </div>

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='testing'
                    >
                        Allow VOIP
                    </label>
                    <SelectOption
                        id={'testing'}
                        label={'Allow VOIP'}
                        options={textOption}
                    />
                </div>
            </Form>
        </div>
    )
}
