import Form from "./Form";
import SelectOption from "../SelectOption";
import TextArea from "../TextArea";
import TextInput from "../TextInput";
import useCreateComputer from "../../hooks/Computers/useCreateComputer";
import { useEffect } from "react";
import { ComputerDTO } from "../../../domain/http/dto/ComputerDTO";

export default function RefactorFormTemplate() {
  const computer = useCreateComputer();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      name: { value: string };
      locations: { value: string };
      uuid: { value: string };
      inventoryassetnumber: { value: string };
      alternativeusername: { value: string };
      alternativeusernamenumber: { value: string };
    };

    const data: ComputerDTO = {
      id: 1,
      name: target.name.value,
      locations: target.locations.value,
      otherserial: target.inventoryassetnumber.value,
      contact: target.alternativeusername.value,
      uuid: target.uuid.value,
      contact_num: target.alternativeusernamenumber.value,
      is_template: 0,
      is_deleted: 0,
      is_dynamic: 0,
      is_recursive: 0,
      comment: null,
      computermodels: null,
      computertypes: null,
      date_creation: null,
      date_mod: null,
      entities: null,
      groups: null,
      groups_tech: null,
      last_inventory_update: null,
      manufacturers: null,
      networks: null,
      serial: null,
      states: null,
      template_name: null,
      ticket_tco: null,
      users: null,
      users_tech: null,
    };

    computer.post(data);
  };

  useEffect(() => {
    if (computer.error) {
      alert(computer.error);
    }
  }, [computer.error]);

  return (
    <div className="m-6 bg-white rounded container_form_computer">
      <Form handleSubmit={handleSubmit}>
        <TextInput
          id={"name"}
          label="Name"
          placeholder="Enter your name here"
          required
        />

        <SelectOption id="locations" label="Location" />

        <SelectOption
          id="hardware"
          label="Technician in Charge of the Hardware"
        />

        <SelectOption
          id="group-hardware"
          label="Group in Charge of the Hardware"
        />

        <TextInput
          id={"alternativeusernamenumber"}
          label="Alternate username number"
          placeholder="Enter your alternate nsername number here"
          required
        />

        <TextInput
          id={"alternativeusername"}
          label="Alternate Username"
          placeholder="Enter your Alternate Username here"
          required
        />

        <SelectOption id="user" label="User" />

        <SelectOption id="group" label="Group" />

        <TextArea
          id="comment"
          label="Comment"
          placeholder="Enter your comment here"
        />

        <SelectOption id="status" label="Status" />
        <SelectOption id="type" label="Type" />
        <SelectOption id="manufacturer" label="Manufactuter" />
        <SelectOption id="model" label="Model" />

        <TextInput
          id={"serialnumber"}
          label="Serial Number"
          placeholder="Enter your Serial Number here"
          required
        />
        <TextInput
          id={"inventoryassetnumber"}
          label="Inventory/Asset Number"
          placeholder="Enter your Inventory/Asset Number here"
          required
        />
        <SelectOption id="network" label="Network" />
        <TextInput
          id="uuid"
          label="UUID"
          placeholder="Enter your UUID here"
          required
        />
        <SelectOption id="updatesource" label="Update Source" />
      </Form>
    </div>
  );
}
