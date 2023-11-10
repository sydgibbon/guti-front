import { useEffect, useState } from "react"
import SelectOption, { OptionValue } from "../SelectOption"
import TextArea from "../TextArea"
import TextInput from "../TextInput"
import Form from "./Form"
import { useGetUserInChargeSelect } from "../../hooks/Users/useGetUserInChargeSelect"
import { useGetGroupInChargeSelect } from "../../hooks/Groups/useGetGroupInChargeSelect"
import { useGetLocationsSelect } from "../../hooks/Locations/useGetLocationsSelect"
import { useGetStatesSelect } from "../../hooks/States/useGetStatesSelect"
import { useGetManufacturersSelect } from "../../hooks/Manufacturers/useGetManufacturersSelect"
import { useGetAutoupdatesystemsSelect } from "../../hooks/Autoupdatesystems/useGetAutoupdatesystemsSelect"
import { useGetRackmodelsSelect } from "../../hooks/Racks/useGetRackmodelsSelect"
import { useGetRacktypesSelect } from "../../hooks/Racks/useGetRacktypesSelect"
import { useGetDcroomsSelect } from "../../hooks/Racks/useGetDcroomsSelect"
import { RackData } from "../../../domain/models/forms/RackData"
import { racksService } from "../../../domain/services/api/Racks.service"
import { errorNotification, successNotification } from "../../redux/Global";
import { useDispatch } from "react-redux"
import FormModal from "../../utils/modals/FormModal"
import AddButton from "../AddButton"
import StatusForm from "./StatusForm"
import LocationForm from "./LocationForm"
import RackTypeForm from "./RackTypeForm"
import ManufacturerForm from "./ManufacturerForm"
import GroupInChargeForm from "./GroupInChargeForm"
import RackModelForm from "./RackModelForm"

export default function RackForm() {

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(
      formData.entries()
    ) as unknown as RackData;
    racksService.createRack(formJson);

    try {
      await racksService.createRack(formJson);
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

  const [modalContent, setModalContent] = useState<any>("")

  const userInChargeOptions = useGetUserInChargeSelect()
  const groupInChargeOptions = useGetGroupInChargeSelect()
  const locationOptions = useGetLocationsSelect()
  const stateOptions = useGetStatesSelect()
  const manufacturerOptions = useGetManufacturersSelect()
  const rackModelOptions = useGetRackmodelsSelect()
  const rackTypeOptions = useGetRacktypesSelect()
  const autoupdatesystemOptions = useGetAutoupdatesystemsSelect()
  const dcRoomOptions = useGetDcroomsSelect()

  const orientationOptions: OptionValue[] = [
    {
      name: "North",
      id: "1",
    },
    {
      name: "South",
      id: "2",
    },
    {
      name: "East",
      id: "3",
    },
    {
      name: "West",
      id: "4",
    },
  ]

  useEffect(() => {
    userInChargeOptions.get()
    groupInChargeOptions.get()
    locationOptions.get()
    stateOptions.get()
    manufacturerOptions.get()
    rackModelOptions.get()
    rackTypeOptions.get()
    dcRoomOptions.get()
    autoupdatesystemOptions.get()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <FormModal form={modalContent} />
      <Form
        handleSubmit={handleSubmit}
        formHeader={"Racks"}
        iconName={"Racks"}
      >
        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="name"
          >
            Name
          </label>
          <TextInput
            id={"name"}
            placeholder={"ingrese su nombre"}
            required
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="states"
          >
            Status
          </label>
          <div className="flex gap-2">
            <SelectOption
              id="states"
              options={stateOptions.data?.data}
            />
            <AddButton onClick={() => setModalContent(<StatusForm />)} />
          </div>
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="locations"
          >
            Locations
          </label>
          <div className="flex gap-2">
            <SelectOption
              id="locations"
              options={locationOptions.data?.data}
            />
            <AddButton onClick={() => setModalContent(<LocationForm />)} />
          </div>
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="racktypes"
          >
            Rack types
          </label>
          <div className="flex gap-2">
            <SelectOption
              id="racktypes"
              options={rackTypeOptions?.data}
            />
            <AddButton onClick={() => setModalContent(<RackTypeForm />)} />
          </div>
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="users_tech"
          >
            Technician in charge of the hardware
          </label>
          <SelectOption
            id={"users_tech"}
            options={userInChargeOptions.data?.data}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="manufacturers"
          >
            Manufacturers
          </label>
          <div className="flex gap-2">
            <SelectOption
              id="manufacturers"
              options={manufacturerOptions.data?.data}
            />
            <AddButton onClick={() => setModalContent(<ManufacturerForm />)} />
          </div>
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="groups_tech"
          >
            Group in charge of the hardware
          </label>
          <div className="flex gap-2">
            <SelectOption
              id="groups_tech"
              options={groupInChargeOptions.data?.data}
            />
            <AddButton onClick={() => setModalContent(<GroupInChargeForm />)} />
          </div>
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="rackmodels"
          >
            Model
          </label>
          <div className="flex gap-2">
            <SelectOption
              id="rackmodels"
              options={rackModelOptions?.data}
            />
            <AddButton onClick={() => setModalContent(<RackModelForm />)} />
          </div>
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="serial"
          >
            Serial Number
          </label>
          <TextInput
            id={"serial"}
            placeholder="Enter your Serial Number here"
            required
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="otherserial"
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
            className="text-sm mb-2 font-semibold block"
            htmlFor="comment"
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
            className="text-sm mb-2 font-semibold block"
            htmlFor="dcrooms"
          >
            Server Rooms
          </label>
          <SelectOption
            id="dcrooms"
            options={dcRoomOptions?.data}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="position"
          >
            Position in room
          </label>
          <SelectOption
            id={"position"}
            options={orientationOptions}
          />
        </div>
        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="room_orientation"
          >
            Door orientation in room
          </label>
          <SelectOption
            id={"room_orientation"}
            options={orientationOptions}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="number_units"
          >
            Number of units
          </label>
          <TextInput
            id={"number_units"}
            type={"number"}
            required
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="width"
          >
            Width
          </label>
          <TextInput
            id={"width"}
            type={"number"}
            required
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="height"
          >
            Height
          </label>
          <TextInput
            id={"height"}
            type={"number"}
            required
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="depth"
          >
            Depth
          </label>
          <TextInput
            id={"depth"}
            type={"number"}
            required
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="max_power"
          >
            Max. power (in watts)
          </label>
          <TextInput
            id={"max_power"}
            type={"number"}
            required
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="mesured_power"
          >
            Measured Power (in watts)
          </label>
          <TextInput
            id={"mesured_power"}
            type={"number"}
            required
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="max_weight"
          >
            Max. weight
          </label>
          <TextInput
            id={"max_weight"}
            type={"number"}
            required
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="bgcolor"
          >
            Color
          </label>
          <TextInput
            id={"bgcolor"}
            type="text"
          />
        </div>
      </Form>
    </>
  )
};
