import SelectOption from '../SelectOption'
import TextArea from '../TextArea'
import TextInput from '../TextInput'
import Form from './Form'

export default function PrinterTypeForm() {
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
                formHeader={'Printer Types'}
                iconName={'Printers'}
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
            </Form>
        </div>
    )
}
