/* eslint-disable react-hooks/exhaustive-deps */
import Form from "../Form";
import SelectOptionPrimary from "../../Globals/SelectOption/SelectOption";
import TextArea from "../../TextArea";
import TextInputPrimary from "../../Globals/Inputs/TextInputPrimary";
import { useEffect, useState } from "react";
import { useGetAllLocations } from "../../../hooks/Locations/useGetAllLocations";
import useShowError from "../../../hooks/useShowError";
import { MessageError } from "../../../utilis/MessagesErrors";
import { CreateComputer, FieldTypes } from "./types";
import { OptionValue } from "../../Globals/types";
import { LocationDTO } from "../../../../domain/dto/LocationDTO";

const INITIAL_DATA = {
  name: "",
  location: undefined,
};

export default function ComputersForm() {
  // const computer = useCreateComputer();
  const locationsService = useGetAllLocations();

  const [locations, setLocations] = useState<OptionValue[]>();

  const [data, setData] = useState<CreateComputer>(INITIAL_DATA);

  const showError = useShowError();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    // const target = e.target as typeof e.target & {
    //   name: { value: string };
    //   locations: { value: string };
    //   uuid: { value: string };
    //   inventoryassetnumber: { value: string };
    //   alternativeusername: { value: string };
    //   alternativeusernamenumber: { value: string };
    // };

    // const data: ComputerDTO = {
    //   id: 1,
    //   name: target.name.value,
    //   locations: target.locations.value,
    //   otherserial: target.inventoryassetnumber.value,
    //   contact: target.alternativeusername.value,
    //   uuid: target.uuid.value,
    //   contact_num: target.alternativeusernamenumber.value,
    //   is_template: 0,
    //   is_deleted: 0,
    //   is_dynamic: 0,
    //   is_recursive: 0,
    //   comment: null,
    //   computermodels: null,
    //   computertypes: null,
    //   date_creation: null,
    //   date_mod: null,
    //   entities: null,
    //   groups: null,
    //   groups_tech: null,
    //   last_inventory_update: null,
    //   manufacturers: null,
    //   networks: null,
    //   serial: null,
    //   states: null,
    //   template_name: null,
    //   ticket_tco: null,
    //   users: null,
    //   users_tech: null,
    // };

    // computer.post(data);
  };

  const handleChangedData = (
    field: FieldTypes,
    value: string | OptionValue
  ) => {
    setData({ ...data, [field]: value });
  };

  const adaptedLocationToOptionValue = (values: LocationDTO[]): void => {
    setLocations(
      values.map((location) => ({
        text: location.name,
        value: location.id.toString(),
        customValues: location,
      }))
    );
  };

  useEffect(() => {
    locationsService.get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (locationsService.data) {
      adaptedLocationToOptionValue(locationsService.data);
    }
  }, [locationsService.data]);

  useEffect(() => {
    if (locationsService.error) {
      showError.get(MessageError.FETCH_FAILED);
    }
  }, [locationsService.error]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="m-6 bg-white rounded container_form_computer">
      <Form handleSubmit={handleSubmit}>
        <TextInputPrimary
          id="name"
          label="Name"
          placeholder="Enter your name here"
          required
          onChange={(value) => handleChangedData(FieldTypes.NAME, value)}
        />

        <SelectOptionPrimary
          id="locations"
          label="Location"
          possibleOptions={locations}
          onChange={(value) => handleChangedData(FieldTypes.LOCATION, value)}
          isLoading={locationsService.isLoading}
        />

        {/* <SelectOptionPrimary
          id="hardware"
          label="Technician in Charge of the Hardware"
        />

        <SelectOptionPrimary
          id="group-hardware"
          label="Group in Charge of the Hardware"
        /> */}

        <TextInputPrimary
          id={"alternativeusernamenumber"}
          label="Alternate username number"
          placeholder="Enter your alternate username number here"
          required
          onChange={(value) => handleChangedData(FieldTypes.NAME, value)}
        />

        <TextInputPrimary
          id={"alternativeusername"}
          label="Alternate Username"
          placeholder="Enter your Alternate Username here"
          required
          onChange={(value) => handleChangedData(FieldTypes.NAME, value)}
        />

        {/* <SelectOptionPrimary id="user" label="User" />

        <SelectOptionPrimary id="group" label="Group" /> */}

        <TextArea
          id="comment"
          label="Comment"
          placeholder="Enter your comment here"
        />

        {/* <SelectOptionPrimary id="status" label="Status" />

        <SelectOptionPrimary id="type" label="Type" />

        <SelectOptionPrimary id="manufacturer" label="Manufactuter" />

        <SelectOptionPrimary id="model" label="Model" /> */}

        <TextInputPrimary
          id={"serialnumber"}
          label="Serial Number"
          placeholder="Enter your Serial Number here"
          required
          onChange={(value) => handleChangedData(FieldTypes.NAME, value)}
        />

        <TextInputPrimary
          id={"inventoryassetnumber"}
          label="Inventory/Asset Number"
          placeholder="Enter your Inventory/Asset Number here"
          required
          onChange={(value) => handleChangedData(FieldTypes.NAME, value)}
        />

        {/* <SelectOptionPrimary id="network" label="Network" /> */}

        <TextInputPrimary
          id="uuid"
          label="UUID"
          placeholder="Enter your UUID here"
          required
          onChange={(value) => handleChangedData(FieldTypes.NAME, value)}
        />

        {/* <SelectOptionPrimary id="updatesource" label="Update Source" /> */}
      </Form>
    </div>
  );
}
