import { useEffect, useState } from "react"
import { useGetConsumabletypesSelect } from "../../hooks/Consumables/useGetCartridgetypesSelect"
import { useGetGroupInChargeSelect } from "../../hooks/Groups/useGetGroupInChargeSelect"
import { useGetLocationsSelect } from "../../hooks/Locations/useGetLocationsSelect"
import { useGetManufacturersSelect } from "../../hooks/Manufacturers/useGetManufacturersSelect"
import { useGetUserInChargeSelect } from "../../hooks/Users/useGetUserInChargeSelect"
import SelectOption, { OptionValue } from "../SelectOption"
import TextArea from "../TextArea"
import TextInput from "../TextInput"
import Form from "./Form"
import ImageInput from "../ImageInput"
import { ConsumableItemData } from "../../../domain/models/forms/ConsumableItemData"
import { consumablesService } from "../../../domain/services/api/Consumables.service"
import { useDispatch } from "react-redux";
import { errorNotification, successNotification } from "../../redux/Global";
import FormModal from "../../utils/modals/FormModal"
import AddButton from "../AddButton"
import LocationForm from "./LocationForm"
import ConsumableTypeForm from "./ConsumableTypeForm"
import ManufacturerForm from "./ManufacturerForm"
import GroupInChargeForm from "./GroupInChargeForm"

export default function ConsumableForm() {
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(
      formData.entries()
    ) as unknown as ConsumableItemData;
    consumablesService.createConsumableItem(formJson);

    try {
      await consumablesService.createConsumableItem(formJson);
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

  const numbers = (): OptionValue[] => {
    const options: OptionValue[] = []
    for (let i = 1; i <= 100; i++) {
      const option: OptionValue = {
        id: i.toString(),
        name: i.toString(),
      }
      options.push(option)
    }

    return options
  }

  const threshold = numbers()

  const userInChargeOptions = useGetUserInChargeSelect()
  const groupInChargeOptions = useGetGroupInChargeSelect()
  const locationOptions = useGetLocationsSelect()
  const manufacturerOptions = useGetManufacturersSelect()
  const consumableTypeOptions = useGetConsumabletypesSelect()

  useEffect(() => {
    userInChargeOptions.get()
    groupInChargeOptions.get()
    locationOptions.get()
    manufacturerOptions.get()
    consumableTypeOptions.get()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <FormModal form={modalContent} />
      <Form
        handleSubmit={handleSubmit}
        formHeader={"Consumable Models"}
        iconName={"Consumables"}
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
            htmlFor="consumableitemtypes"
          >
            Consumable Types
          </label>
          <div className="flex gap-2">
            <SelectOption
              id="consumableitemtypes"
              options={consumableTypeOptions?.data}
            />
            <AddButton onClick={() => setModalContent(<ConsumableTypeForm />)} />
          </div>
        </div>
        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="ref"
          >
            Reference
          </label>
          <TextInput id={"ref"} />
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
            htmlFor="otherserial"
          >
            Inventory/Asset Number
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
            htmlFor="alarm_threshold"
          >
            Alert Threshold
          </label>
          <SelectOption
            id={"alarm_threshold"}
            options={threshold}
          />
        </div>
        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="comming_soon"
          >
            Pictures
          </label>
          <ImageInput
            id={"comming_soon"}
            fileType={".jpg, .jpeg, .png"}
            maxSize={3}
          />
        </div>
        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="stock_target"
          >
            Stock Target
          </label>
          <TextInput
            id={"stock_target"}
            type={"number"}
            required
          />
        </div>
      </Form>
    </>
  )
};
