import { useRef, useEffect, useState } from "react";
import SelectOption from "../SelectOption";
import TextArea from "../TextArea";
import TextInput from "../TextInput";
import Form from "./Form";
import Checkbox from "../CheckBox";
import { useCreateMonitors } from "../../hooks/Monitors/useCreateMonitors";


export default function MonitorForm() {
  const monitors = useCreateMonitors();

  // Forms Referencias 
  const monitorName = useRef("")
  const AlternateUsername = useRef("")
  const AlternateUsernameNumber = useRef("")
  const SerialNumber = useRef("")
  const InventoryNumber = useRef("")
  const User = useRef("")
  const Size = useRef("")
  const UUID = useRef("")
  const Comment = useRef("")
  const Upgrade = useRef()

  const formsMonitors = {
    name: monitorName.current,
    alternateUsername: AlternateUsername.current,
    serialNumber: SerialNumber.current,
    alternateUsernameNumber: AlternateUsernameNumber.current,
    inventoryNumber: InventoryNumber.current,
    user: User.current,
    size: Size.current,
    uuid: UUID.current,
    comment: Comment.current,
    upgrade: Upgrade.current,
  }

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

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    monitors.post(formsMonitors)
  };

  useEffect(() => {
    if (monitors.error) {
      alert(monitors.error);
    }
  }, [monitors.error]);


  return (
    <div className="m-6 bg-white rounded container_form_computer">
      <Form handleSubmit={handleSubmit}>
        <TextInput
          id={"testing"}
          label={"Name"}
          placeholder={"ingrese su nombre"}
          inputRef={monitorName}
        />

        <SelectOption id={"status"} label={"Status"} />
        <SelectOption id={"location"} label={"Location"} />
        <SelectOption id="type" label="Type" />
        <SelectOption id={"hardware"} label={"Technician in charge of the hardware"} />
        <SelectOption id="manufacturer" label="Manufactuter" />
        <SelectOption id={"group-hardware"} label={"Group in charge of the hardware"} />
        <SelectOption id="model" label="Model" />

        <TextInput
          id={"alternativeusernamenumber"}
          label="Alternate Username Number"
          placeholder="Enter your Alternate Username number here"
          required
          inputRef={AlternateUsernameNumber}
        />
        <TextInput
          id={"serialnumber"}
          label="Serial Number"
          placeholder="Enter your Serial Number here"
          required
          inputRef={SerialNumber}
        />
        <TextInput
          id={"alternativeusername"}
          label="Alternate Username"
          placeholder="Enter your Alternate Username here"
          required
          inputRef={AlternateUsername}
        />
        <TextInput
          id={"otherserial"}
          label="Inventory Number"
          placeholder="Enter your Inventory Number here"
          required
          inputRef={InventoryNumber}
        />

        <SelectOption id="user" label="User" />
        <SelectOption id="managmenttype" label="Managment Type" />

        <TextInput
          id={"size"}
          label="Size"
          inputRef={Size}
        />

        <SelectOption id="group" label="Group" />

        <TextInput
          id="uuid"
          label="UUID"
          placeholder="Enter your UUID here"
          required
          inputRef={UUID}
        />
        <TextArea id={"comment"}
          label={"Comment"}
          placeholder="Enter your comment here"
          rows={3}
        />
        <SelectOption id="updatesource" label="Update Source" />

        <div className="  rounded-lg">
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