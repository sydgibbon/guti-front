/* eslint-disable react-hooks/exhaustive-deps */
import Form from "../Form";
import SelectOptionPrimary from "../../Globals/SelectOption/SelectOption";
import TextInputPrimary from "../../Globals/Inputs/TextInputPrimary";
import { useEffect, useState } from "react";
import { useGetAllLocations } from "../../../hooks/Locations/useGetAllLocations";
import useShowNotification from "../../../hooks/useShowError";
import { MessageError } from "../../../utilis/MessagesErrors";
import { CreateComputer, FieldTypes } from "./types";
import { OptionValue } from "../../Globals/types";
import { LocationDTO } from "../../../../domain/dto/LocationDTO";
import { useGetAllUsers } from "../../../hooks/Users/useGetAllUser";
import { UserDTO } from "../../../../domain/dto/UserDTO";
import useCreateComputer from "../../../hooks/Computers/useCreateComputer";
import { AlertType } from "../../../../domain/models/AlertsTypes";

const INITIAL_DATA = {
  name: "",
  locations_id: undefined,
  users_id: undefined,
  contact_num: undefined,
  contact: undefined,
  serial: undefined,
  uuid: undefined,
};

export default function ComputersForm() {
  const computerService = useCreateComputer();

  const locationsService = useGetAllLocations();

  const usersService = useGetAllUsers();

  const [locations, setLocations] = useState<OptionValue[]>();

  const [users, setUsers] = useState<OptionValue[]>();

  const [data, setData] = useState<any>(INITIAL_DATA);

  const showError = useShowNotification();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const newComputer = {
      name: data.name,
      locations_id: data.locations_id?.customValues?.id,
      users_id: data.users_id,
      contact_num: data.contact_num,
      contact: data.contact,
      serial: data.serial,
      uuid: data.uuid,
    };

    computerService.post(newComputer);
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

  const adaptedUserToOptionValue = (values: UserDTO[]): void => {
    setUsers(
      values.map((user) => ({
        text: user.name,
        value: user.id.toString(),
        customValues: user,
      }))
    );
  };

  const handleUser = (field: FieldTypes, value: OptionValue) => {
    handleChangedData(field, value.customValues.id);
  };

  useEffect(() => {
    locationsService.get();
    usersService.get();
  }, []);

  useEffect(() => {
    if (locationsService.data) {
      adaptedLocationToOptionValue(locationsService.data);
    }
  }, [locationsService.data]);

  useEffect(() => {
    if (locationsService.error) {
      showError.get(MessageError.FETCH_FAILED, AlertType.ERROR);
    }
  }, [locationsService.error]);

  useEffect(() => {
    if (usersService.data) {
      adaptedUserToOptionValue(usersService.data);
    }
  }, [usersService.data]);

  useEffect(() => {
    if (locationsService.error) {
      showError.get(MessageError.FETCH_FAILED, AlertType.ERROR);
    }
  }, [locationsService.error]);

  useEffect(() => {
    if (computerService.data) {
      showError.get(MessageError.COMPUTERS_POST_SUCESS, AlertType.SUCCESS);
    }
  }, [computerService.data]);

  useEffect(() => {
    if (computerService.error) {
      showError.get(MessageError.COMPUTERS_POST_FAILED, AlertType.ERROR);
    }
  }, [computerService.error]);

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
          id="locations_id"
          label="Location"
          unselectLabel="Seleccionar localidad"
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
          id={"contact_number"}
          label="Alternate username number"
          placeholder="Enter your alternate username number here"
          required
          onChange={(value) =>
            handleChangedData(FieldTypes.CONTACT_NUMBER, value)
          }
        />

        <TextInputPrimary
          id={"contact"}
          label="Alternate Username"
          placeholder="Enter your Alternate Username here"
          required
          onChange={(value) => handleChangedData(FieldTypes.CONTACT, value)}
        />

        <SelectOptionPrimary
          id="users_id"
          label="User"
          unselectLabel="Seleccionar usuario"
          possibleOptions={users}
          onChange={(value) => handleUser(FieldTypes.USER, value)}
          isLoading={usersService.isLoading}
        />

        {/*

        <SelectOptionPrimary id="group" label="Group" /> 

        <TextArea
          id="comment"
          label="Comment"
          placeholder="Enter your comment here"
        />

        <SelectOptionPrimary id="status" label="Status" />

        <SelectOptionPrimary id="type" label="Type" />

        <SelectOptionPrimary id="manufacturer" label="Manufactuter" />

        <SelectOptionPrimary id="model" label="Model" /> */}

        <TextInputPrimary
          id={"serial"}
          label="Serial Number"
          placeholder="Enter your Serial Number here"
          required
          onChange={(value) =>
            handleChangedData(FieldTypes.SERIAL_NUMBER, value)
          }
        />

        {/*
        <TextInputPrimary
          id={"inventoryassetnumber"}
          label="Inventory/Asset Number"
          placeholder="Enter your Inventory/Asset Number here"
          required
          onChange={(value) =>
            handleChangedData(FieldTypes.INVENTORY_ASSET_NUMBER, value)
          }
        />

         <SelectOptionPrimary id="network" label="Network" /> */}

        <TextInputPrimary
          id="uuid"
          label="UUID"
          placeholder="Enter your UUID here"
          required
          onChange={(value) => handleChangedData(FieldTypes.UUID, value)}
        />

        {/* <SelectOptionPrimary id="updatesource" label="Update Source" /> */}
      </Form>
    </div>
  );
}
