import { useEffect, useState } from 'react'
import { useGetAutoupdatesystemsSelect } from '../../hooks/Autoupdatesystems/useGetAutoupdatesystemsSelect'
import { useGetDevicemodelsSelect } from '../../hooks/Devices/useGetDevicemodelsSelect'
import { useGetDevicetypesSelect } from '../../hooks/Devices/useGetDevicetypesSelect'
import { useGetGroupInChargeSelect } from '../../hooks/Groups/useGetGroupInChargeSelect'
import { useGetGroupsSelect } from '../../hooks/Groups/useGetGroupsSelect'
import { useGetLocationsSelect } from '../../hooks/Locations/useGetLocationsSelect'
import { useGetManufacturersSelect } from '../../hooks/Manufacturers/useGetManufacturersSelect'
import { useGetNetworksSelect } from '../../hooks/Networks/useGetNetworksSelect'
import { useGetPrintermodelsSelect } from '../../hooks/Printers/useGetPrintermodelsSelect'
import { useGetPrintertypesSelect } from '../../hooks/Printers/useGetPrintertypesSelect'
import { useGetSnmpCredentialsSelect } from '../../hooks/SnmpCredentials/useGetSnmpCredentialsSelect'
import { useGetStatesSelect } from '../../hooks/States/useGetStatesSelect'
import { useGetUserInChargeSelect } from '../../hooks/Users/useGetUserInChargeSelect'
import { useGetUsersSelect } from '../../hooks/Users/useGetUsersSelect'
import SelectOption, { OptionValue } from '../SelectOption'
import TextArea from '../TextArea'
import TextInput from '../TextInput'
import Form from './Form'
import Checkbox from '../CheckBox'

export default function PrinterForm() {
    interface CheckboxState {
        serial: boolean
        parallel: boolean
        usb: boolean
        ethernet: boolean
        wifi: boolean
    }

    const [checkboxes, setCheckboxes] = useState({
        serial: false,
        parallel: false,
        usb: false,
        ethernet: false,
        wifi: false,
    })

    const handleCheckboxChange = (checkboxName: keyof CheckboxState) => {
        setCheckboxes((prevCheckboxes) => ({
            ...prevCheckboxes,
            [checkboxName]: !prevCheckboxes[checkboxName],
        }))
    }

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
    }

    // useEffect(() => {
    //   if (computer.error) {
    //     alert(computer.error);
    //   }
    // }, [computer.error]);

    const userInChargeOptions = useGetUserInChargeSelect()
    const usersOptions = useGetUsersSelect()
    const groupInChargeOptions = useGetGroupInChargeSelect()
    const groupsOptions = useGetGroupsSelect()
    const locationOptions = useGetLocationsSelect()
    const stateOptions = useGetStatesSelect()
    const manufacturerOptions = useGetManufacturersSelect()
    const printerModelOptions = useGetPrintermodelsSelect()
    const printerTypeOptions = useGetPrintertypesSelect()
    const autoupdatesystemOptions = useGetAutoupdatesystemsSelect()
    const networkOptions = useGetNetworksSelect()
    const snpmCredentialOptions = useGetSnmpCredentialsSelect()

    const managementTypeOptions = [
        { id: '0', name: 'Unit Management' },
        { id: '1', name: 'Global Management' },
    ]

    useEffect(() => {
        usersOptions.get()
        userInChargeOptions.get()
        groupsOptions.get()
        groupInChargeOptions.get()
        locationOptions.get()
        stateOptions.get()
        manufacturerOptions.get()
        printerModelOptions.get()
        printerTypeOptions.get()
        autoupdatesystemOptions.get()
        networkOptions.get()
        snpmCredentialOptions.get()
    }, [])

    return (
        <div className='bg-white rounded container_form_computer'>
            <Form
                handleSubmit={handleSubmit}
                formHeader={'Printers'}
            >
                <TextInput
                    id={'testing'}
                    label={'Name'}
                    placeholder={'ingrese su nombre'}
                />

                <SelectOption
                    id={'status'}
                    label={'Status'}
                    options={stateOptions.data?.data}
                />
                <SelectOption
                    id={'location'}
                    label={'Locations'}
                    options={locationOptions.data?.data}
                />
                <SelectOption
                    id='type'
                    label='Printer Types'
                    options={printerTypeOptions?.data}
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
                <SelectOption
                    id='model'
                    label='Model'
                    options={printerModelOptions?.data}
                />

                <TextInput
                    id={'alternativeusernamenumber'}
                    label='Alternate Username Number'
                    placeholder='Enter your Alternate Username number here'
                    required
                />
                <TextInput
                    id={'serialnumber'}
                    label='Serial Number'
                    placeholder='Enter your Serial Number here'
                    required
                />
                <TextInput
                    id={'alternativeusername'}
                    label='Alternate Username'
                    placeholder='Enter your Alternate Username here'
                    required
                />
                <TextInput
                    id={'otherserial'}
                    label='Inventory Number'
                    placeholder='Enter your Inventory Number here'
                    required
                />
                <TextArea
                    id={'sysdescr'}
                    label='System description'
                    rows={3}
                />
                <SelectOption
                    id='snmpcredential'
                    label='SNMP credential'
                    options={snpmCredentialOptions.data?.data}
                />
                <SelectOption
                    id='user'
                    label='User'
                    options={usersOptions.data?.data}
                />
                <SelectOption
                    id='managmenttype'
                    label='Managment Type'
                    options={managementTypeOptions}
                />
                <SelectOption
                    id='network'
                    label='Network'
                    options={networkOptions.data?.data}
                />
                <SelectOption
                    id='group'
                    label='Groups'
                    options={groupsOptions.data?.data}
                />

                <TextInput
                    id='uuid'
                    label='UUID'
                    placeholder='Enter your UUID here'
                    required
                />
                <TextArea
                    id={'comment'}
                    label='Comment'
                    rows={3}
                />

                <SelectOption
                    id='updatesource'
                    label='Update Source'
                    options={autoupdatesystemOptions.data?.data}
                />

                <TextInput
                    id={'memory'}
                    label='Memory'
                    type={'number'}
                />
                <TextInput
                    id={'initialpagecounter'}
                    label='Initial page counter'
                    type={'number'}
                />
                <TextInput
                    id={'currentcounterofpages'}
                    label='Current counter of pages'
                    type={'number'}
                />
                <div className='rounded-lg'>
                    <div className='mb-2 font-semibold'>Ports</div>
                    <div className='grid grid-cols-5 gap-2'>
                        <Checkbox
                            id='have_serial'
                            label='Serial'
                            checked={checkboxes.serial}
                            onChange={() => handleCheckboxChange('serial')}
                        />
                        <Checkbox
                            id='have_parallel'
                            label='Parallel'
                            checked={checkboxes.parallel}
                            onChange={() => handleCheckboxChange('parallel')}
                        />
                        <Checkbox
                            id='have_usb'
                            label='USB'
                            checked={checkboxes.usb}
                            onChange={() => handleCheckboxChange('usb')}
                        />
                        <Checkbox
                            id='have_ethernet'
                            label='Ethernet'
                            checked={checkboxes.ethernet}
                            onChange={() => handleCheckboxChange('ethernet')}
                        />
                        <Checkbox
                            id='have_wifi'
                            label='Wifi'
                            checked={checkboxes.wifi}
                            onChange={() => handleCheckboxChange('wifi')}
                        />
                    </div>
                </div>
            </Form>
        </div>
    )
}
