import { useEffect, useState } from "react";
import SelectOption from "../SelectOption";
import TextArea from "../TextArea";
import TextInput from "../TextInput";
import Form from "./Form";
import Checkbox from "../CheckBox";
import { useGetUserInChargeSelect } from "../../hooks/Users/useGetUserInChargeSelect";
import { useGetUsersSelect } from "../../hooks/Users/useGetUsersSelect";
import { useGetGroupInChargeSelect } from "../../hooks/Groups/useGetGroupInChargeSelect";
import { useGetGroupsSelect } from "../../hooks/Groups/useGetGroupsSelect";
import { useGetLocationsSelect } from "../../hooks/Locations/useGetLocationsSelect";
import { useGetStatesSelect } from "../../hooks/States/useGetStatesSelect";
import { useGetManufacturersSelect } from "../../hooks/Manufacturers/useGetManufacturersSelect";
import { useGetAutoupdatesystemsSelect } from "../../hooks/Autoupdatesystems/useGetAutoupdatesystemsSelect";
import { useGetMonitormodelsSelect } from "../../hooks/Monitors/useGetMonitormodelsSelect";
import { useGetMonitortypesSelect } from "../../hooks/Monitors/useGetMonitortypesSelect";
import { MonitorData } from "../../../domain/models/forms/MonitorData";
import { monitorsService } from "../../../domain/services/api/Monitors.service";

interface formProps {
  isEditing?: boolean;
}

export default function MonitorForm(formProps: formProps) {
  const { isEditing } = formProps;
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const idParam = urlParams.get("id");
  const id = idParam !== null ? parseInt(idParam) : NaN;
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(
      formData.entries()
    ) as unknown as MonitorData;

    monitorsService.createMonitors(formJson);
  };

  const userInChargeOptions = useGetUserInChargeSelect();
  const usersOptions = useGetUsersSelect();
  const groupInChargeOptions = useGetGroupInChargeSelect();
  const groupsOptions = useGetGroupsSelect();
  const locationOptions = useGetLocationsSelect();
  const stateOptions = useGetStatesSelect();
  const manufacturerOptions = useGetManufacturersSelect();
  const monitorModelOptions = useGetMonitormodelsSelect();
  const monitorTypeOptions = useGetMonitortypesSelect();
  const autoupdatesystemOptions = useGetAutoupdatesystemsSelect();

  const managementTypeOptions = [
    { id: "0", name: "Unit Management" },
    { id: "1", name: "Global Management" },
  ];

  interface CheckboxState {
    microphone: boolean;
    speakers: boolean;
    subD: boolean;
    bnc: boolean;
    dvi: boolean;
    pivot: boolean;
    hdmi: boolean;
    displayPort: boolean;
  }

  const [checkboxes, setCheckboxes] = useState({
    microphone: false,
    speakers: false,
    subD: false,
    bnc: false,
    dvi: false,
    pivot: false,
    hdmi: false,
    displayPort: false,
  });

  const handleCheckboxChange = (checkboxName: keyof CheckboxState) => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkboxName]: !prevCheckboxes[checkboxName],
    }));
  };

  useEffect(() => {
    usersOptions.get();
    userInChargeOptions.get();
    groupsOptions.get();
    groupInChargeOptions.get();
    locationOptions.get();
    stateOptions.get();
    manufacturerOptions.get();
    monitorModelOptions.get();
    monitorTypeOptions.get();
    autoupdatesystemOptions.get();
  }, []);

  return (
    <div className="bg-white rounded container_form_computer">
      <Form
        handleSubmit={handleSubmit}
        formHeader={"Monitors"}
        iconName={"Monitors"}
        isEditing={isEditing}
      >
        <div className="Name">
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="testing"
          >
            Name
          </label>
          <TextInput
            id={"name"}
            placeholder={"ingrese su nombre"}
          />
        </div>

        <div className="Status">
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="status"
          >
            Status
          </label>
          <SelectOption
            id={"states"}
            options={stateOptions.data?.data}
          />
        </div>

        <div className="Locations">
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="location"
          >
            Locations
          </label>
          <SelectOption
            id={"locations"}
            options={locationOptions.data?.data}
          />
        </div>

        <div className="Monitor Type">
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="type"
          >
            Monitor Type
          </label>
          <SelectOption
            id="monitortypes"
            options={monitorTypeOptions?.data}
          />
        </div>

        <div className="Technician in charge of the hardware">
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="hardware"
          >
            Technician in charge of the hardware
          </label>
          <SelectOption
            id={"users_tech"}
            options={userInChargeOptions.data?.data}
          />
        </div>

        <div className="Manufacturers">
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="manufacturer"
          >
            Manufacturers
          </label>
          <SelectOption
            id="manufacturers"
            options={manufacturerOptions.data?.data}
          />
        </div>

        <div className="Group in charge of the hardware">
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="group-hardware"
          >
            Group in charge of the hardware
          </label>
          <SelectOption
            id={"groups_tech"}
            options={groupInChargeOptions.data?.data}
          />
        </div>

        <div className="Model">
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="model"
          >
            Model
          </label>
          <SelectOption
            id="monitormodels"
            options={monitorModelOptions?.data}
          />
        </div>

        <div className="Alternate Username Number">
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="alternativeusernamenumber"
          >
            Alternate Username Number
          </label>
          <TextInput
            id={"contact"}
            placeholder="Enter your Alternate Username number here"
            required
          />
        </div>

        <div className="Serial Number">
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="serialnumber"
          >
            Serial Number
          </label>
          <TextInput
            id={"serial"}
            placeholder="Enter your Serial Number here"
            required
          />
        </div>

        <div className="Alternate Username">
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="alternativeusername"
          >
            Alternate Username
          </label>
          <TextInput
            id={"contact_num"}
            placeholder="Enter your Alternate Username here"
            required
          />
        </div>

        <div className="Inventory Number">
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

        <div className="User">
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="user"
          >
            User
          </label>
          <SelectOption
            id="users"
            options={usersOptions.data?.data}
          />
        </div>

        <div className="Management Type">
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="is_global"
          >
            Management Type
          </label>
          <SelectOption
            id="is_global"
            options={managementTypeOptions}
          />
        </div>

        <div className="Size">
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="size"
          >
            Size
          </label>
          <TextInput
            id={"size"}
            type={"number"}
          />
        </div>

        <div className="Groups">
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="group"
          >
            Groups
          </label>
          <SelectOption
            id="groups"
            options={groupsOptions.data?.data}
          />
        </div>

        <div className="UUID">
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

        <div className="Comment">
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="comment"
          >
            Comment
          </label>
          <TextArea
            id={"comment"}
            placeholder="Enter your comment here"
            rows={3}
          />
        </div>

        <div className="Update Source">
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="updatesource"
          >
            Update Source
          </label>
          <SelectOption id="updatesource" />
        </div>

        <div className="Ports">
          <div className="mb-2 font-semibold">Ports</div>
          <div className="grid grid-cols-4 gap-2">
            <Checkbox
              id="have_micro"
              label="Microphone"
              checked={checkboxes.microphone}
              onChange={() => handleCheckboxChange("microphone")}
            />
            <Checkbox
              id="have_speaker"
              label="Speakers"
              checked={checkboxes.speakers}
              onChange={() => handleCheckboxChange("speakers")}
            />
            <Checkbox
              id="have_subd"
              label="Sub-D (VGA)"
              checked={checkboxes.subD}
              onChange={() => handleCheckboxChange("subD")}
            />
            <Checkbox
              id="have_bnc"
              label="BNC"
              checked={checkboxes.bnc}
              onChange={() => handleCheckboxChange("bnc")}
            />
            <Checkbox
              id="have_dvi"
              label="DVI"
              checked={checkboxes.dvi}
              onChange={() => handleCheckboxChange("dvi")}
            />
            <Checkbox
              id="have_pivot"
              label="Pivot"
              checked={checkboxes.pivot}
              onChange={() => handleCheckboxChange("pivot")}
            />
            <Checkbox
              id="have_hdmi"
              label="HDMI"
              checked={checkboxes.hdmi}
              onChange={() => handleCheckboxChange("hdmi")}
            />
            <Checkbox
              id="have_displayport"
              label="DisplayPort"
              checked={checkboxes.displayPort}
              onChange={() => handleCheckboxChange("displayPort")}
            />
          </div>
        </div>
      </Form>
    </div>
  );
}
