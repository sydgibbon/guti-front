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

export default function MonitorModelForm() {
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
            <Form
                handleSubmit={handleSubmit}
                formHeader={'Monitor Models'}
                iconName={'Monitors'}
            >
                <TextInput
                    id={'testing'}
                    label={'Name'}
                    placeholder={'ingrese su nombre'}
                />

                <TextArea
                    id={'comment'}
                    label='Comment'
                    rows={3}
                />

                <TextInput
                    id={'testing'}
                    label={'Product Number'}
                />

                <TextInput
                    id={'testing'}
                    label={'Weight'}
                />

                <TextInput
                    id={'testing'}
                    label={'Required units'}
                />

                <SelectOption
                    id={'testing'}
                    label={'Depth'}
                    options={numberOption}
                />

                <TextInput
                    id={'testing'}
                    label={'Power connections'}
                />

                <TextInput
                    id={'testing'}
                    label={'Power consumption'}
                />

                <SelectOption
                    id={'testing'}
                    label={'Is half rack'}
                    options={textOption}
                />
            </Form>
        </div>
    )
}
