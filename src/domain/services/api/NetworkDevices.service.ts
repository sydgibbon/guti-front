import { NetworkDevicesData } from '../../models/forms/NetworkDevicesData'
import { networkDevicesRepository } from '../../repositories/newtorkDevices.repository'

export const networkDevicesService = {
    createNetworkDevice: (body: NetworkDevicesData) => {
        return networkDevicesRepository.createNetworkDevice(body)
    },
    getAllNetworkDevices: () => {
        return networkDevicesRepository.getAllNewtorkDevices()
    },
    getNetworkDevicesTypesSelect: () => {
        return networkDevicesRepository.getNetworkDevicesTypesSelect()
    },
    getNetworkDevicesModelsSelect: () => {
        return networkDevicesRepository.getNetworkDevicesModelsSelect()
    },

    getNetworkequipmentsCount: () => {
        return networkDevicesRepository.getNetworkequipmentsCount()
    },

    getNetworkequipmentsByManufacturers: () => {
        return networkDevicesRepository.getNetworkequipmentsByManufacturers()
    },
}
