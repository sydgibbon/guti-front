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

export default function NetDeviceForm() {
  // const computer = useCreateComputer();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  // useEffect(() => {
  //   if (computer.error) {
  //     alert(computer.error);
  //   }
  // }, [computer.error]);

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
  }, [])


  return (
    <div className="m-6 bg-white rounded container_form_computer">
      <Form handleSubmit={handleSubmit}>
        <div>
          <label className="text-sm mb-2 font-semibold block">Name</label>
          <TextInput
            id={"testing"}
            placeholder={"ingrese su nombre"}
          />
        </div>

        <div>
          <label className="text-sm mb-2 font-semibold block">Status</label>
          <SelectOption
            id={"states"}
            options={stateOptions.data?.data}
          />
        </div>

        <div>
          <label className="text-sm mb-2 font-semibold block">Locations</label>
          <SelectOption
            id={"location"}
            options={locationOptions.data?.data}
          />
        </div>

        <div>
          <label className="text-sm mb-2 font-semibold block">Networking Equipment Types</label>
          <SelectOption
            id="type"
            options={networkDeviceTypeOptions?.data}
          />
        </div>

        <div>
          <label className="text-sm mb-2 font-semibold block">Technician in charge of the hardware</label>
          <SelectOption
            id={"hardware"}
            options={userInChargeOptions.data?.data}
          />
        </div>

        <div>
          <label className="text-sm mb-2 font-semibold block">Manufacturers</label>
          <SelectOption
            id="manufacturer"
            options={manufacturerOptions.data?.data}
          />
        </div>

        <div>
          <label className="text-sm mb-2 font-semibold block">Group in charge of the hardware</label>
          <SelectOption
            id={"group-hardware"}
            options={groupInChargeOptions.data?.data}
          />
        </div>

        <div>
          <label className="text-sm mb-2 font-semibold block">Model</label>
          <SelectOption
            id="model"
            options={networkDeviceModelOptions?.data}
          />
        </div>

        <div>
          <label className="text-sm mb-2 font-semibold block">Alternate Username Number</label>
          <TextInput
            id={"alternativeusernamenumber"}
            placeholder="Enter your Alternate Username number here"
            required
          />
        </div>

        <div>
          <label className="text-sm mb-2 font-semibold block">Serial Number</label>
          <TextInput
            id={"serialnumber"}
            placeholder="Enter your Serial Number here"
            required
          />
        </div>

        <div>
          <label className="text-sm mb-2 font-semibold block">Alternate Username</label>
          <TextInput
            id={"alternativeusername"}
            placeholder="Enter your Alternate Username here"
            required
          />
        </div>

        <div>
          <label className="text-sm mb-2 font-semibold block">Inventory Number</label>
          <TextInput
            id={"otherserial"}
            placeholder="Enter your Inventory Number here"
            required
          />
        </div>

        <div>
          <label className="text-sm mb-2 font-semibold block">System description</label>
          <TextArea
            id={"sysdescr"}
            rows={3}
          />
        </div>

        <div>
          <label className="text-sm mb-2 font-semibold block">SNMP credential</label>
          <SelectOption
            id="snmpcredential"
            options={snpmCredentialOptions.data?.data}
          />
        </div>

        <div>
          <label className="text-sm mb-2 font-semibold block">User</label>
          <SelectOption
            id="user"
            options={usersOptions.data?.data}
          />
        </div>

        <div>
          <label className="text-sm mb-2 font-semibold block">Network</label>
          <SelectOption
            id="network"
            options={networkOptions.data?.data}
          />
        </div>

        <div>
          <label className="text-sm mb-2 font-semibold block">Groups</label>
          <SelectOption
            id="group"
            options={groupsOptions.data?.data}
          />
        </div>

        <div>
          <label className="text-sm mb-2 font-semibold block">UUID</label>
          <TextInput
            id="uuid"
            placeholder="Enter your UUID here"
            required
          />
        </div>

        <div>
          <label className="text-sm mb-2 font-semibold block">Comments</label>
          <TextArea
            id={"comment"}
            rows={3}
          />
        </div>

        <div>
          <label className="text-sm mb-2 font-semibold block">Memory (MB)</label>
          <TextInput
            id={"memory"}
            type={"number"}
          />
        </div>

        <div>
          <label className="text-sm mb-2 font-semibold block">Update Source</label>
          <SelectOption
            id="updatesource"
            options={autoupdatesystemOptions.data?.data}
          />
        </div>
      </Form>
    </div>
  );
}