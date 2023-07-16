import SelectOption from '../SelectOption'
import TextArea from '../TextArea'
import TextInput from '../TextInput'
import Form from './Form'

export default function PrinterModelForm() {
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
            </Form>
        </div>
    )
}
