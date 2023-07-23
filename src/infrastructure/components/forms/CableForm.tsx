import { useEffect, useState } from 'react'
import SelectOption, { OptionValue } from '../SelectOption'
import TextArea from '../TextArea'
import TextInput from '../TextInput'
import Form from './Form'
import { useGetStatesSelect } from '../../hooks/States/useGetStatesSelect'
import { useGetCabletypesSelect } from '../../hooks/Cables/useGetCabletypesSelect'
import { useGetCablestrandsSelect } from '../../hooks/Cables/useGetCablestrandsSelect'
import { useGetSocketmodelsSelect } from '../../hooks/Cables/useGetSocketmodelsSelect'
import { useGetSocketsSelect } from '../../hooks/Cables/useGetSocketsSelect'
import { useGetUserInChargeSelect } from '../../hooks/Users/useGetUserInChargeSelect'
import { useGetAllComputers } from '../../hooks/Computers/useGetAllComputers'
import { useGetAllNetworkDevices } from '../../hooks/NetworksDevices/useGetAllNetworkDevices'
import { useGetAllDevices } from '../../hooks/Devices/GetAllDevices'
import { useGetAllPhones } from '../../hooks/Phones/useGetAllPhones'
import { useGetAllPrinters } from '../../hooks/Printers/useGetAllPrinters'
import { useGetAllPassiveDevices } from '../../hooks/PassiveDevices/useGetAllPassiveDevices'

export default function CableForm() {
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
    }

    const stateOptions = useGetStatesSelect()
    const cabletypesOption = useGetCabletypesSelect()
    const userInChargeOptions = useGetUserInChargeSelect()
    const cablestrandsOption = useGetCablestrandsSelect()
    const socketmodelsOption = useGetSocketmodelsSelect()
    const socketOption = useGetSocketsSelect()
    const allComputers = useGetAllComputers()
    const allNetworkDevices = useGetAllNetworkDevices()
    const allDevices = useGetAllDevices()
    const allPhones = useGetAllPhones()
    const allPrinters = useGetAllPrinters()
    const allPassiveDevices = useGetAllPassiveDevices()

    const assetOption = [
        { id: '0', name: 'Computers' },
        { id: '1', name: 'Network Devices' },
        { id: '2', name: 'Devices' },
        { id: '3', name: 'Phones' },
        { id: '4', name: 'Printers' },
        { id: '5', name: 'Passive Devices' },
    ]

    const [selectedAssetA, setSelectedAssetA] = useState<OptionValue>({
        id: '0',
        name: 'Computers',
    })
    const [selectedAssetB, setSelectedAssetB] = useState<OptionValue>({
        id: '0',
        name: 'Computers',
    })
    const [dataOptionsA, setDataOptionsA] = useState<OptionValue[]>([])
    const [dataOptionsB, setDataOptionsB] = useState<OptionValue[]>([])

    const [isDataVisibleA, setIsDataVisibleA] = useState(true)
    const [isDataVisibleB, setIsDataVisibleB] = useState(true)

    useEffect(() => {
        stateOptions.get()
        cabletypesOption.get()
        userInChargeOptions.get()
        cablestrandsOption.get()
        socketmodelsOption.get()
        socketOption.get()
        allComputers.get()
        allNetworkDevices.get()
        allDevices.get()
        allPhones.get()
        allPrinters.get()
        allPassiveDevices.get()
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            if (selectedAssetA) {
                if (selectedAssetA.name === 'Computers') {
                    setDataOptionsA(allComputers?.data)
                } else if (selectedAssetA.name === 'Network Devices') {
                    setDataOptionsA(allNetworkDevices?.data)
                } else if (selectedAssetA?.name === 'Devices') {
                    setDataOptionsA(allDevices?.data)
                } else if (selectedAssetA.name === 'Phones') {
                    setDataOptionsA(allPhones?.data)
                } else if (selectedAssetA.name === 'Printers') {
                    setDataOptionsA(allPrinters?.data)
                } else if (selectedAssetA.name === 'Passive Devices') {
                    setDataOptionsA(allPassiveDevices?.data)
                }
            }
        }
        fetchData()
    }, [
        selectedAssetA,
        allComputers,
        allNetworkDevices,
        allDevices,
        allPhones,
        allPrinters,
        allPassiveDevices,
    ])

    useEffect(() => {
        const fetchData = async () => {
            if (selectedAssetB) {
                if (selectedAssetB.name === 'Computers') {
                    setDataOptionsB(allComputers?.data)
                } else if (selectedAssetB.name === 'Network Devices') {
                    setDataOptionsB(allNetworkDevices?.data)
                } else if (selectedAssetA?.name === 'Devices') {
                    setDataOptionsB(allDevices?.data)
                } else if (selectedAssetB.name === 'Phones') {
                    setDataOptionsB(allPhones?.data)
                } else if (selectedAssetB.name === 'Printers') {
                    setDataOptionsB(allPrinters?.data)
                } else if (selectedAssetB.name === 'Passive Devices') {
                    setDataOptionsB(allPassiveDevices?.data)
                }
            }
        }
        fetchData()
    }, [
        selectedAssetB,
        allComputers,
        allNetworkDevices,
        allDevices,
        allPhones,
        allPrinters,
        allPassiveDevices,
    ])

    useEffect(() => {
        if (
            selectedAssetA?.name === 'Phones' ||
            selectedAssetA?.name === 'Printers'
        ) {
            setIsDataVisibleA(false)
        } else {
            setIsDataVisibleA(true)
        }
    }, [selectedAssetA])

    useEffect(() => {
        if (
            selectedAssetB?.name === 'Phones' ||
            selectedAssetB?.name === 'Printers'
        ) {
            setIsDataVisibleB(false)
        } else {
            setIsDataVisibleB(true)
        }
    }, [selectedAssetB])

    return (
        <div className='bg-white rounded container_form_computer'>
            <Form
                handleSubmit={handleSubmit}
                formHeader={'Cables'}
                iconName={''}
            >
                <TextInput
                    id={'name'}
                    label={'Name'}
                    placeholder={'ingrese su nombre'}
                />

                <SelectOption
                    id={'status'}
                    label={'Status'}
                    options={stateOptions.data?.data}
                />
                <SelectOption
                    id={'cabletypes'}
                    label='Type'
                    options={cabletypesOption?.data}
                />
                <SelectOption
                    id={'user_tech'}
                    label={'Technician in charge of the hardware'}
                    options={userInChargeOptions.data?.data}
                />

                <TextInput
                    id={'serial'}
                    label='Inventory Number'
                    placeholder='Enter your Inventory Number here'
                    required
                />
                <TextArea
                    id={'comment'}
                    label='Comment'
                    rows={3}
                />

                <SelectOption
                    id={'cablestrands'}
                    label='Cable strand'
                    options={cablestrandsOption?.data}
                />

                <TextInput
                    id={'color'}
                    type='text'
                    label={'Color'}
                />
                <SelectOption
                    id={'items_endpoint_a'}
                    label='Asset'
                    options={assetOption}
                    onSelect={setSelectedAssetA}
                />
                <SelectOption
                    id={'items_endpoint_a'}
                    label='Asset'
                    options={assetOption}
                    onSelect={setSelectedAssetB}
                />

                <SelectOption
                    id={'items_endpoint_a'}
                    label=''
                    options={dataOptionsA}
                    style={isDataVisibleA ? {} : { visibility: 'hidden' }}
                />
                <SelectOption
                    id={'items_endpoint_b'}
                    label=''
                    options={dataOptionsB}
                    style={isDataVisibleB ? {} : { visibility: 'hidden' }}
                />

                <SelectOption
                    id={'socketmodels_endpoint_a'}
                    label='Socket Model'
                    options={socketmodelsOption?.data}
                />
                <SelectOption
                    id={'socketmodels_endpoint_b'}
                    label='Socket Model'
                    options={socketmodelsOption?.data}
                />

                <SelectOption
                    id={'sockets_endpoint_a'}
                    label='Socket'
                    options={socketOption?.data}
                />
                <SelectOption
                    id={'sockets_endpoint_b'}
                    label='Socket'
                    options={socketOption?.data}
                />
            </Form>
        </div>
    )
}
