import Form from './Form'
import SelectOption from '../SelectOption'
import TextArea from '../TextArea'
import TextInput from '../TextInput'
import { useEffect, useState } from 'react'
import { useGetUserInChargeSelect } from '../../hooks/Users/useGetUserInChargeSelect'
import { useGetUsersSelect } from '../../hooks/Users/useGetUsersSelect'
import { useGetGroupInChargeSelect } from '../../hooks/Groups/useGetGroupInChargeSelect'
import { useGetGroupsSelect } from '../../hooks/Groups/useGetGroupsSelect'
import { useGetLocationsSelect } from '../../hooks/Locations/useGetLocationsSelect'
import { useGetStatesSelect } from '../../hooks/States/useGetStatesSelect'
import { useGetManufacturersSelect } from '../../hooks/Manufacturers/useGetManufacturersSelect'
import { useGetComputermodelsSelect } from '../../hooks/Computers/useGetComputermodelsSelect'
import { useGetComputertypesSelect } from '../../hooks/Computers/useGetComputertypesSelect'
import { useGetNetworksSelect } from '../../hooks/Networks/useGetNetworksSelect'
import { useGetAutoupdatesystemsSelect } from '../../hooks/Autoupdatesystems/useGetAutoupdatesystemsSelect'
import { ComputerData } from '../../../domain/models/forms/ComputerData'
import { computersService } from '../../../domain/services/api/Computers.service'
import AddButton from '../AddButton'
import ModalCustom from '../../components/modals/ModalCustom'
import LocationForm from './LocationForm'

export default function ComputersForm() {
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        const formData = new FormData(form)
        const formJson = Object.fromEntries(
            formData.entries()
        ) as unknown as ComputerData
        computersService.createComputer(formJson)
        debugger
    }
    const userInChargeOptions = useGetUserInChargeSelect()
    const usersOptions = useGetUsersSelect()
    const groupInChargeOptions = useGetGroupInChargeSelect()
    const groupsOptions = useGetGroupsSelect()
    const locationOptions = useGetLocationsSelect()
    const stateOptions = useGetStatesSelect()
    const manufacturerOptions = useGetManufacturersSelect()
    const computerModelOptions = useGetComputermodelsSelect()
    const computerTypeOptions = useGetComputertypesSelect()
    const networkOptions = useGetNetworksSelect()
    const autoupdatesystemOptions = useGetAutoupdatesystemsSelect()

    useEffect(() => {
        usersOptions.get()
        userInChargeOptions.get()
        groupsOptions.get()
        groupInChargeOptions.get()
        locationOptions.get()
        stateOptions.get()
        manufacturerOptions.get()
        computerModelOptions.get()
        computerTypeOptions.get()
        networkOptions.get()
        autoupdatesystemOptions.get()
    }, [])

    const [showLocationForm, setShowLocationForm] = useState(false)

    const openLocationForm = () => {
        setShowLocationForm(true)
    }

    // const modalIsOpen = useAppSelector(getModalIsOpen);

    // const dispatch = useAppDispatch();

    // const handleClose = () => {
    //   dispatch(setModalIsOpen(false));
    // };

    // useEffect(() => {
    //   dispatch(setModalIsOpen(true));
    // }, []);

    return (
        <div>
            <div className='m-6 bg-white rounded container_form_computer'>
                <Form
                    handleSubmit={handleSubmit}
                    formHeader={'Computers'}
                    iconName={'Computers'}
                >
                    <TextInput
                        id={'name'}
                        label='Name'
                        placeholder='Enter your name here'
                        required
                    />

                    <SelectOption
                        id='locations'
                        label='Location'
                        options={locationOptions.data?.data}
                    />
                    <AddButton onClick={openLocationForm} />

                    <SelectOption
                        id='hardware'
                        label='Technician in Charge of the Hardware'
                        options={userInChargeOptions.data?.data}
                    />

                    <SelectOption
                        id='group-hardware'
                        label='Group in Charge of the Hardware'
                        options={groupInChargeOptions.data?.data}
                    />

                    <TextInput
                        id={'alternativeusernamenumber'}
                        label='Alternate username number'
                        placeholder='Enter your alternate username number here'
                        required
                    />

                    <TextInput
                        id={'alternativeusername'}
                        label='Alternate Username'
                        placeholder='Enter your Alternate Username here'
                        required
                    />

                    <SelectOption
                        id='user'
                        label='User'
                        options={usersOptions.data?.data}
                    />

                    <SelectOption
                        id='group'
                        label='Group'
                        options={groupsOptions.data?.data}
                    />

                    <TextArea
                        id='comment'
                        label='Comment'
                        placeholder='Enter your comment here'
                    />

                    <SelectOption
                        id='states'
                        label='Status'
                        options={stateOptions.data?.data}
                    />
                    <SelectOption
                        id='type'
                        label='Type'
                        options={computerTypeOptions?.data}
                    />
                    <SelectOption
                        id='manufacturer'
                        label='Manufacturer'
                        options={manufacturerOptions.data?.data}
                    />
                    <SelectOption
                        id='model'
                        label='Model'
                        options={computerModelOptions?.data}
                    />

                    <TextInput
                        id={'serialnumber'}
                        label='Serial Number'
                        placeholder='Enter your Serial Number here'
                        required
                    />
                    <TextInput
                        id={'inventoryassetnumber'}
                        label='Inventory/Asset Number'
                        placeholder='Enter your Inventory/Asset Number here'
                        required
                    />
                    <SelectOption
                        id='network'
                        label='Network'
                        options={networkOptions.data?.data}
                    />
                    <TextInput
                        id='uuid'
                        label='UUID'
                        placeholder='Enter your UUID here'
                        required
                    />
                    <SelectOption
                        id='updatesource'
                        label='Update Source'
                        options={autoupdatesystemOptions.data?.data}
                    />
                    <ModalCustom
                        state={showLocationForm}
                        handleClose={() => setShowLocationForm(false)}
                    >
                        <LocationForm />
                    </ModalCustom>
                </Form>
            </div>
        </div>
    )
}
