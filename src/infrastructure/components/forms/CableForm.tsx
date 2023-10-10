import { useEffect, useState } from "react"
import SelectOption, { OptionValue } from "../SelectOption"
import TextArea from "../TextArea"
import TextInput from "../TextInput"
import Form from "./Form"
import { useGetStatesSelect } from "../../hooks/States/useGetStatesSelect"
import { useGetCabletypesSelect } from "../../hooks/Cables/useGetCabletypesSelect"
import { useGetCablestrandsSelect } from "../../hooks/Cables/useGetCablestrandsSelect"
import { useGetSocketmodelsSelect } from "../../hooks/Cables/useGetSocketmodelsSelect"
import { useGetSocketsSelect } from "../../hooks/Cables/useGetSocketsSelect"
import { useGetUserInChargeSelect } from "../../hooks/Users/useGetUserInChargeSelect"
import { useGetAllComputers } from "../../hooks/Computers/useGetAllComputers"
import { useGetAllNetworkDevices } from "../../hooks/NetworksDevices/useGetAllNetworkDevices"
import { useGetAllDevices } from "../../hooks/Devices/GetAllDevices"
import { useGetAllPhones } from "../../hooks/Phones/useGetAllPhones"
import { useGetAllPrinters } from "../../hooks/Printers/useGetAllPrinters"
import { useGetAllPassiveDevices } from "../../hooks/PassiveDevices/useGetAllPassiveDevices"
import { CableData } from "../../../domain/models/forms/CableData"
import { cablesService } from "../../../domain/services/api/Cable.service"
import { useDispatch } from "react-redux";
import { errorNotification, successNotification } from "../../redux/Global";

export default function CableForm() {
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(
      formData.entries()
    ) as unknown as CableData;
    cablesService.createCable(formJson);

    try {
      await cablesService.createCable(formJson);
      dispatch(
        successNotification()
      );
      form.reset();
    } catch (error) {
      dispatch(
        errorNotification()
      );
    }
  };


  const dispatch = useDispatch();

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
    { id: "0", name: "Computers" },
    { id: "1", name: "Network Devices" },
    { id: "2", name: "Devices" },
    { id: "3", name: "Phones" },
    { id: "4", name: "Printers" },
    { id: "5", name: "Passive Devices" },
  ]

  const [selectedAssetA, setSelectedAssetA] = useState<OptionValue>({
    id: "0",
    name: "Computers",
  })
  const [selectedAssetB, setSelectedAssetB] = useState<OptionValue>({
    id: "0",
    name: "Computers",
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },    [])

  useEffect(() => {
    const fetchData = async () => {
      if (selectedAssetA) {
        if (selectedAssetA.name === "Computers") {
          setDataOptionsA(allComputers?.data)
        } else if (selectedAssetA.name === "Network Devices") {
          setDataOptionsA(allNetworkDevices?.data)
        } else if (selectedAssetA?.name === "Devices") {
          setDataOptionsA(allDevices?.data)
        } else if (selectedAssetA.name === "Phones") {
          setDataOptionsA(allPhones?.data)
        } else if (selectedAssetA.name === "Printers") {
          setDataOptionsA(allPrinters?.data)
        } else if (selectedAssetA.name === "Passive Devices") {
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
        if (selectedAssetB.name === "Computers") {
          setDataOptionsB(allComputers?.data)
        } else if (selectedAssetB.name === "Network Devices") {
          setDataOptionsB(allNetworkDevices?.data)
        } else if (selectedAssetA?.name === "Devices") {
          setDataOptionsB(allDevices?.data)
        } else if (selectedAssetB.name === "Phones") {
          setDataOptionsB(allPhones?.data)
        } else if (selectedAssetB.name === "Printers") {
          setDataOptionsB(allPrinters?.data)
        } else if (selectedAssetB.name === "Passive Devices") {
          setDataOptionsB(allPassiveDevices?.data)
        }
      }
    }
    fetchData()
  },
    // eslint-disable-next-line react-hooks/exhaustive-deps
   [
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
      selectedAssetA?.name === "Phones" ||
      selectedAssetA?.name === "Printers"
    ) {
      setIsDataVisibleA(false)
    } else {
      setIsDataVisibleA(true)
    }
  }, [selectedAssetA])

  useEffect(() => {
    if (
      selectedAssetB?.name === "Phones" ||
      selectedAssetB?.name === "Printers"
    ) {
      setIsDataVisibleB(false)
    } else {
      setIsDataVisibleB(true)
    }
  }, [selectedAssetB])

  return (
    <div className="m-6 bg-white rounded container_form_computer">
      <Form
        handleSubmit={handleSubmit}
        formHeader={"Cable"}
        iconName={"Cables"}
      >
        <div>
          <label
            htmlFor="name"
            className="text-sm mb-2 font-semibold block"
          >
            Name
          </label>
          <TextInput
            id={"name"}
            placeholder={"ingrese su nombre"}
          />
        </div>
        <div>
          <label
            htmlFor="status"
            className="text-sm mb-2 font-semibold block"
          >
            Status
          </label>
          <SelectOption
            id={"states"}
            options={stateOptions.data?.data}
          />
        </div>
        <div>
          <label
            htmlFor="cabletypes"
            className="text-sm mb-2 font-semibold block"
          >
            Cable type
          </label>
          <SelectOption
            id={"cabletypes"}
            label="Type"
            options={cabletypesOption?.data}
          />
        </div>

        <div>
          <label
            htmlFor="user_tech"
            className="text-sm mb-2 font-semibold block"
          >
            Technician in charge of the hardware
          </label>
          <SelectOption
            id={"user_tech"}
            options={userInChargeOptions.data?.data}
          />
        </div>

        <div>
          <label
            htmlFor="otherserial"
            className="text-sm mb-2 font-semibold block"
          >
            Inventory Number
          </label>
          <TextInput
            id={"otherserial"}
            placeholder="Enter your Inventory Number here"
            required
          />
        </div>

        <div>
          <label
            htmlFor="comment"
            className="text-sm mb-2 font-semibold block"
          >
            Comment
          </label>
          <TextArea
            id={"comment"}
            rows={3}
          />
        </div>

        <div>
          <label
            htmlFor="cablestrands"
            className="text-sm mb-2 font-semibold block"
          >
            Cable strand
          </label>
          <SelectOption
            id={"cablestrands"}
            options={cablestrandsOption?.data}
          />
        </div>

        <div>
          <label
            htmlFor="colorr"
            className="text-sm mb-2 font-semibold block"
          >
            Color
          </label>
          <TextInput
            id={"colorr"}
            type="text"
          />
        </div>

        <div>
          <label
            htmlFor="itemtype_endpoint_a"
            className="text-sm mb-2 font-semibold block"
          >
            Asset
          </label>
          <SelectOption
            id={"itemtype_endpoint_a"}
            options={assetOption}
            onSelect={setSelectedAssetA}
          />
        </div>

        <div>
          <label
            htmlFor="itemtype_endpoint_b"
            className="text-sm mb-2 font-semibold block"
          >
            Asset
          </label>
          <SelectOption
            id={"itemtype_endpoint_b"}
            options={assetOption}
            onSelect={setSelectedAssetB}
          />
        </div>

        <div>
          <label
            htmlFor="items_endpoint_a"
            className="text-sm mb-2 font-semibold block"
          ></label>
          <SelectOption
            id={"items_endpoint_a"}
            options={dataOptionsA}
            style={isDataVisibleA ? {} : { visibility: "hidden" }}
          />
        </div>

        <div>
          <label
            htmlFor="items_endpoint_b"
            className="text-sm mb-2 font-semibold block"
          ></label>
          <SelectOption
            id={"items_endpoint_b"}
            options={dataOptionsB}
            style={isDataVisibleB ? {} : { visibility: "hidden" }}
          />
        </div>

        <div>
          <label
            htmlFor="socketmodels_endpoint_a"
            className="text-sm mb-2 font-semibold block"
          >
            Socket Model
          </label>
          <SelectOption
            id={"socketmodels_endpoint_a"}
            options={socketmodelsOption?.data}
          />
        </div>

        <div>
          <label
            htmlFor="socketmodels_endpoint_b"
            className="text-sm mb-2 font-semibold block"
          >
            Socket Model
          </label>{" "}
          <SelectOption
            id={"socketmodels_endpoint_b"}
            options={socketmodelsOption?.data}
          />
        </div>

        <div>
          <label
            htmlFor="sockets_endpoint_a"
            className="text-sm mb-2 font-semibold block"
          >
            Socket
          </label>
          <SelectOption
            id={"sockets_endpoint_a"}
            options={socketOption?.data}
          />
        </div>

        <div>
          <label
            htmlFor="sockets_endpoint_b"
            className="text-sm mb-2 font-semibold block"
          >
            Socket
          </label>
          <SelectOption
            id={"sockets_endpoint_b"}
            options={socketOption?.data}
          />
        </div>
      </Form>
    </div>
  )
};
