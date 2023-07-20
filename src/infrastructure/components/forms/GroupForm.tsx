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

export default function GroupForm() {
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
                formHeader={'Testing'}
            >
                <TextInput
                    id={'testing'}
                    label={'Name'}
                    placeholder={'ingrese su nombre'}
                />

                <SelectOption
                    id={'testing'}
                    label={'As Child of'}
                />

                <SelectOption
                    id={'testing'}
                    label='Requester'
                    options={textOption}
                />
                <SelectOption
                    id={'testing'}
                    label='Watcher'
                    options={textOption}
                />
                <SelectOption
                    id={'testing'}
                    label='Assigned to'
                    options={textOption}
                />
                <SelectOption
                    id={'testing'}
                    label='Task'
                    options={textOption}
                />
                <SelectOption
                    id={'testing'}
                    label='Can be notified'
                    options={textOption}
                />

                <TextArea
                    id={'comment'}
                    label='Comment'
                    rows={3}
                />

                <SelectOption
                    id={'testing'}
                    label='Can be manager'
                    options={textOption}
                />
                <SelectOption
                    id={'testing'}
                    label='Items'
                    options={textOption}
                />
                <SelectOption
                    id={'testing'}
                    label='Users'
                    options={textOption}
                />
            </Form>
        </div>
    )
}
