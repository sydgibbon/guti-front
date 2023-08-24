import { useEffect } from "react";
import { useGetGroupInChargeSelect } from "../../hooks/Groups/useGetGroupInChargeSelect";
import { useGetLocationsSelect } from "../../hooks/Locations/useGetLocationsSelect";
import { useGetManufacturersSelect } from "../../hooks/Manufacturers/useGetManufacturersSelect";
import { useGetStatesSelect } from "../../hooks/States/useGetStatesSelect";
import { useGetUserInChargeSelect } from "../../hooks/Users/useGetUserInChargeSelect";
import SelectOption, { OptionValue } from "../SelectOption";
import TextArea from "../TextArea";
import TextInput from "../TextInput";
import Form from "./Form";
import { useGetPassivedcmodelsSelect } from "../../hooks/PassiveDevices/useGetPassivedcmodelsSelect";
import { useGetPassivedctypesSelect } from "../../hooks/PassiveDevices/useGetPassivedctypesSelect";
import { PassiveDevicesService } from "../../../domain/services/api/PassiveDevices.service";
import { PassiveDeviceData } from "../../../domain/models/forms/PassiveDeviceData";

export default function PassiveDeviceForm() {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(
      formData.entries()
    ) as unknown as PassiveDeviceData;
    PassiveDevicesService.createPassiveDevice(formJson);
  };

  const userInChargeOptions = useGetUserInChargeSelect();
  const groupInChargeOptions = useGetGroupInChargeSelect();
  const locationOptions = useGetLocationsSelect();
  const stateOptions = useGetStatesSelect();
  const manufacturerOptions = useGetManufacturersSelect();
  const passiveDeviceModelOptions = useGetPassivedcmodelsSelect();
  const passiveDeviceTypeOptions = useGetPassivedctypesSelect();

  useEffect(() => {
    userInChargeOptions.get();
    groupInChargeOptions.get();
    locationOptions.get();
    stateOptions.get();
    manufacturerOptions.get();
    passiveDeviceModelOptions.get();
    passiveDeviceTypeOptions.get();
  }, []);

  return (
    <div className="m-6 bg-white rounded container_form_computer">
      <Form
        handleSubmit={handleSubmit}
        formHeader={"Passive Devices"}
        iconName={"PassiveDevices"}
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
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="states"
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
            className="text-sm mb-2 font-semibold block"
            htmlFor="locations"
          >
            Locations
          </label>
          <SelectOption
            id={"locations"}
            options={locationOptions.data?.data}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="passivedcequipmenttypes"
          >
            Passive device types
          </label>
          <SelectOption
            id={"passivedcequipmenttypes"}
            options={passiveDeviceTypeOptions?.data}
          />
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
          <SelectOption
            id={"manufacturers"}
            options={manufacturerOptions.data?.data}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="groups_tech"
          >
            Group in charge of the hardware
          </label>
          <SelectOption
            id={"groups_tech"}
            options={groupInChargeOptions.data?.data}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="passivedcequipmentmodels"
          >
            Model
          </label>
          <SelectOption
            id={"passivedcequipmentmodels"}
            options={passiveDeviceModelOptions?.data}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="otherserial"
          >
            Serial Number
          </label>
          <TextInput
            id={"otherserial"}
            placeholder="Enter your Serial Number here"
            required
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="serial"
          >
            Inventory Number
          </label>
          <TextInput
            id={"serial"}
            placeholder="Enter your Inventory Number here"
            required
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="comment"
          >
            Comments
          </label>
          <TextArea
            id={"comment"}
            rows={3}
          />
        </div>
      </Form>
    </div>
  );
}
