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

const numberOption: OptionValue[] = [
    {
        name: '1',
        id: '1',
    },
    {
        name: '1/2',
        id: '1',
    },
    {
        name: '1/3',
        id: '1',
    },
    {
        name: '1/4',
        id: '1',
    },
]

export default function PduModelForm() {
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
                        htmlFor='testing'
                    >
                        Product Number
                    </label>
                    <TextInput
                        id={'testing'}
                        label={'Product Number'}
                    />
                </div>

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='testing'
                    >
                        Weight
                    </label>
                    <TextInput
                        id={'testing'}
                        label={'Weight'}
                    />
                </div>

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='testing'
                    >
                        Required units
                    </label>
                    <TextInput
                        id={'testing'}
                        label={'Required units'}
                    />
                </div>

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='testing'
                    >
                        Depth
                    </label>
                    <SelectOption
                        id={'testing'}
                        label={'Depth'}
                        options={numberOption}
                    />
                </div>

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='testing'
                    >
                        Power connections
                    </label>
                    <TextInput
                        id={'testing'}
                        label={'Power connections'}
                    />
                </div>

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='testing'
                    >
                        Power consumption
                    </label>
                    <TextInput
                        id={'testing'}
                        label={'Power consumption'}
                    />
                </div>

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='testing'
                    >
                        Is half rack
                    </label>
                    <SelectOption
                        id={'testing'}
                        label={'Is half rack'}
                        options={textOption}
                    />
                </div>
            </Form>
        </div>
    )
}
