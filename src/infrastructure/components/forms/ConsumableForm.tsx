import { useEffect } from "react"
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

export default function ConsumableForm() {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
  }

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
  }, [])

  return (
    <div className="m-6 bg-white rounded container_form_computer">
      <Form
        handleSubmit={handleSubmit}
        formHeader={"Consumable Models"}
        iconName={"Consumables"}
      >
        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="testing"
          >
            Name
          </label>
          <TextInput
            id={"testing"}
            placeholder={"ingrese su nombre"}
          />
        </div>
        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="location"
          >
            Locations
          </label>
          <SelectOption
            id={"location"}
            options={locationOptions.data?.data}
          />
        </div>
        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="type"
          >
            Consumable Types
          </label>
          <SelectOption
            id="type"
            options={consumableTypeOptions?.data}
          />
        </div>
        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="reference"
          >
            Reference
          </label>
          <TextInput id={"reference"} />
        </div>
        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="hardware"
          >
            Technician in charge of the hardware
          </label>
          <SelectOption
            id={"hardware"}
            options={userInChargeOptions.data?.data}
          />
        </div>
        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="manufacturer"
          >
            Manufacturers
          </label>
          <SelectOption
            id="manufacturer"
            options={manufacturerOptions.data?.data}
          />
        </div>
        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="group-hardware"
          >
            Group in charge of the hardware
          </label>
          <SelectOption
            id={"group-hardware"}
            options={groupInChargeOptions.data?.data}
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
            htmlFor="alertthreshold"
          >
            Alert Threshold
          </label>
          <SelectOption
            id={"alertthreshold"}
            options={threshold}
          />
        </div>
        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="pictures"
          >
            Pictures
          </label>
          <ImageInput
            id={"pictures"}
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
          />
        </div>
      </Form>
    </div>
  )
};
