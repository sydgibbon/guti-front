import { useEffect } from "react";
import { useGetNetworkDevicesModelsSelect } from "../../hooks/NetworksDevices/useGetNetworkDevicesModelsSelect";
import { useGetNetworkDevicesTypesSelect } from "../../hooks/NetworksDevices/useGetNetworkDevicesTypesSelect";
import SelectOption from "../SelectOption";
import TextArea from "../TextArea";
import TextInput from "../TextInput";
import Form from "./Form";
import { useGetUserInChargeSelect } from "../../hooks/Users/useGetUserInChargeSelect";
import { useGetManufacturersSelect } from "../../hooks/Manufacturers/useGetManufacturersSelect";
import { useGetGroupInChargeSelect } from "../../hooks/Groups/useGetGroupInChargeSelect";
import { useGetGroupsSelect } from "../../hooks/Groups/useGetGroupsSelect";
import { useGetNetworksSelect } from "../../hooks/Networks/useGetNetworksSelect";
import { useGetStatesSelect } from "../../hooks/States/useGetStatesSelect";
import { useGetLocationsSelect } from "../../hooks/Locations/useGetLocationsSelect";
import { useGetUsersSelect } from "../../hooks/Users/useGetUsersSelect";
import { useGetAutoupdatesystemsSelect } from "../../hooks/Autoupdatesystems/useGetAutoupdatesystemsSelect";
import { useGetSnmpCredentialsSelect } from "../../hooks/SnmpCredentials/useGetSnmpCredentialsSelect";
import { NetworkDeviceData } from "../../../domain/models/forms/NetworkDeviceData";
import { networkDevicesService } from "../../../domain/services/api/NetworkDevices.service";

export default function NetDeviceForm() {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(
      formData.entries()
    ) as unknown as NetworkDeviceData;
    networkDevicesService.createNetworkDevice(formJson);
  };

  const userInChargeOptions = useGetUserInChargeSelect();
  const networkDeviceModelOptions = useGetNetworkDevicesModelsSelect();
  const networkDeviceTypeOptions = useGetNetworkDevicesTypesSelect();
  const manufacturerOptions = useGetManufacturersSelect();
  const groupInChargeOptions = useGetGroupInChargeSelect();
  const groupsOptions = useGetGroupsSelect();
  const networkOptions = useGetNetworksSelect();
  const stateOptions = useGetStatesSelect();
  const locationOptions = useGetLocationsSelect();
  const usersOptions = useGetUsersSelect();
  const autoupdatesystemOptions = useGetAutoupdatesystemsSelect();
  const snpmCredentialOptions = useGetSnmpCredentialsSelect();

  useEffect(() => {
    networkDeviceModelOptions.get();
    networkDeviceTypeOptions.get();
    userInChargeOptions.get();
    manufacturerOptions.get();
    groupInChargeOptions.get();
    groupsOptions.get();
    networkOptions.get();
    stateOptions.get();
    locationOptions.get();
    usersOptions.get();
    autoupdatesystemOptions.get();
    snpmCredentialOptions.get();
  }, []);

  return (
    <div className="bg-white rounded container_form_computer">
      <Form
        handleSubmit={handleSubmit}
        formHeader={"Network Devices"}
        iconName={"NetworkDevices"}
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
            htmlFor="networkequipmenttypes"
          >
            Networking Equipment Types
          </label>
          <SelectOption
            id="networkequipmenttypes"
            options={networkDeviceTypeOptions?.data}
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
            id="manufacturers"
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
            htmlFor="networkequipmentmodels"
          >
            Model
          </label>
          <SelectOption
            id="networkequipmentmodels"
            options={networkDeviceModelOptions?.data}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="contact_num"
          >
            Alternate Username Number
          </label>
          <TextInput
            id={"contact_num"}
            placeholder="Enter your Alternate Username number here"
            required
          />
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
            htmlFor="contact"
          >
            Alternate Username
          </label>
          <TextInput
            id={"contact"}
            placeholder="Enter your Alternate Username here"
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
            htmlFor="sysdescr"
          >
            System description
          </label>
          <TextArea
            id={"sysdescr"}
            rows={3}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="snmpcredentials"
          >
            SNMP credential
          </label>
          <SelectOption
            id="snmpcredentials"
            options={snpmCredentialOptions.data?.data}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="users"
          >
            User
          </label>
          <SelectOption
            id="users"
            options={usersOptions.data?.data}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="networks"
          >
            Network
          </label>
          <SelectOption
            id="networks"
            options={networkOptions.data?.data}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="groups"
          >
            Groups
          </label>
          <SelectOption
            id="groups"
            options={groupsOptions.data?.data}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="uuid"
          >
            UUID
          </label>
          <TextInput
            id="uuid"
            placeholder="Enter your UUID here"
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

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="ram"
          >
            Memory (MB)
          </label>
          <TextInput
            id={"ram"}
            type={"number"}
          />
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="autoupdatesystems"
          >
            Update Source
          </label>
          <SelectOption
            id="autoupdatesystems"
            options={autoupdatesystemOptions.data?.data}
          />
        </div>
      </Form>
    </div>
  );
}
