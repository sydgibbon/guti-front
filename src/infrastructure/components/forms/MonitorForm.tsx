import { useRef, useEffect } from "react";
import SelectOption from "../SelectOption";
import TextArea from "../TextArea";
import TextInput from "../TextInput";
import Form from "./Form";
import { useCreateMonitors } from "../../hooks/Monitors/useCreateMonitors";

// const textOption: OptionValue[] = [{
//   text: "Boca",
//   value: "boca"
// },
// {
//   text: "River",
//   value: "river"
// }]

export default function  MonitorForm() {
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
        
        <TextArea id={"group"}
          label={"Upgrade"}
          placeholder={"Aca va un checkbox"}
          rows={2} />
      </Form>
    </div>
  );
}