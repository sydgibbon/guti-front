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
                        htmlFor='testing'
                    >
                        As Child of
                    </label>
                    <SelectOption
                        id={'testing'}
                        label={'As Child of'}
                    />
                </div>

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='testing'
                    >
                        Requester
                    </label>
                    <SelectOption
                        id={'testing'}
                        label='Requester'
                        options={textOption}
                    />
                </div>

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='testing'
                    >
                        Watcher
                    </label>
                    <SelectOption
                        id={'testing'}
                        label='Watcher'
                        options={textOption}
                    />
                </div>

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='testing'
                    >
                        Assigned to
                    </label>
                    <SelectOption
                        id={'testing'}
                        label='Assigned to'
                        options={textOption}
                    />
                </div>

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='testing'
                    >
                        Task
                    </label>
                    <SelectOption
                        id={'testing'}
                        label='Task'
                        options={textOption}
                    />
                </div>

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='testing'
                    >
                        Can be notified
                    </label>
                    <SelectOption
                        id={'testing'}
                        label='Can be notified'
                        options={textOption}
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
                        Can be manager
                    </label>
                    <SelectOption
                        id={'testing'}
                        label='Can be manager'
                        options={textOption}
                    />
                </div>

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='testing'
                    >
                        Items
                    </label>
                    <SelectOption
                        id={'testing'}
                        label='Items'
                        options={textOption}
                    />
                </div>

                <div>
                    <label
                        className='text-sm mb-2 font-semibold block'
                        htmlFor='testing'
                    >
                        Users
                    </label>
                    <SelectOption
                        id={'testing'}
                        label='Users'
                        options={textOption}
                    />
                </div>
            </Form>
        </div>
    )
}
