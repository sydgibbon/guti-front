import { useEffect, useState } from "react";
import SelectOption, { OptionValue } from "../SelectOption";
import TextArea from "../TextArea";
import TextInput from "../TextInput";
import Form from "./Form";
import { useGetUserInChargeSelect } from "../../hooks/Users/useGetUserInChargeSelect";
import { useGetGroupInChargeSelect } from "../../hooks/Groups/useGetGroupInChargeSelect";
import { useGetLocationsSelect } from "../../hooks/Locations/useGetLocationsSelect";
import { useGetStatesSelect } from "../../hooks/States/useGetStatesSelect";
import { useGetManufacturersSelect } from "../../hooks/Manufacturers/useGetManufacturersSelect";
import { useGetPdumodelsSelect } from "../../hooks/Pdus/useGetPdumodelsSelect";
import { useGetPdutypesSelect } from "../../hooks/Pdus/useGetPdutypesSelect";
import { pdusService } from "../../../domain/services/api/Pdus.service";
import { PduData } from "../../../domain/models/forms/PduData";
import { useDispatch } from "react-redux";
import { errorNotification, successNotification } from "../../redux/Global";
import FormModal from "../../utils/modals/FormModal"
import AddButton from "../AddButton"
import StatusForm from "./StatusForm";
import LocationForm from "./LocationForm";
import PduTypeForm from "./PduTypeForm";
import ManufacturerForm from "./ManufacturerForm";
import GroupInChargeForm from "./GroupInChargeForm";
import PduModelForm from "./PduModelForm";

export default function PduForm() {
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(
      formData.entries()
    ) as unknown as PduData;
    pdusService.createPdu(formJson);

    try {
      await pdusService.createPdu(formJson);
      dispatch(
        successNotification()
      );
      form.reset();
    } catch (error) {
      dispatch(
        errorNotification()
      );
    }
  };

  const [modalContent, setModalContent] = useState<any>("")

  const userInChargeOptions = useGetUserInChargeSelect();
  const groupInChargeOptions = useGetGroupInChargeSelect();
  const locationOptions = useGetLocationsSelect();
  const stateOptions = useGetStatesSelect();
  const manufacturerOptions = useGetManufacturersSelect();
  const pduModelOptions = useGetPdumodelsSelect();
  const pduTypeOptions = useGetPdutypesSelect();

  useEffect(() => {
    userInChargeOptions.get();
    groupInChargeOptions.get();
    locationOptions.get();
    stateOptions.get();
    manufacturerOptions.get();
    pduModelOptions.get();
    pduTypeOptions.get();
  }, []);

  const dispatch = useDispatch();

  return (
    <div className="m-6 bg-white rounded container_form_computer">
      <FormModal form={modalContent} />
      <Form
        handleSubmit={handleSubmit}
        formHeader={"PDUs"}
        iconName={"PDUs"}
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
          <div className="flex gap-2">
            <SelectOption
              id="states"
              options={stateOptions.data?.data}
            />
            <AddButton onClick={() => setModalContent(<StatusForm />)} />
          </div>
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="locations"
          >
            Locations
          </label>
          <div className="flex gap-2">
            <SelectOption
              id="locations"
              options={locationOptions.data?.data}
            />
            <AddButton onClick={() => setModalContent(<LocationForm />)} />
          </div>
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="pdutypes"
          >
            PDU types
          </label>
          <div className="flex gap-2">
            <SelectOption
              id={"pdutypes"}
              options={pduTypeOptions?.data}
            />
            <AddButton onClick={() => setModalContent(<PduTypeForm />)} />
          </div>
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
          <div className="flex gap-2">
            <SelectOption
              id="manufacturers"
              options={manufacturerOptions.data?.data}
            />
            <AddButton onClick={() => setModalContent(<ManufacturerForm />)} />
          </div>
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="groups_tech"
          >
            Group in charge of the hardware
          </label>
          <div className="flex gap-2">
            <SelectOption
              id="groups_tech"
              options={groupInChargeOptions.data?.data}
            />
            <AddButton onClick={() => setModalContent(<GroupInChargeForm />)} />
          </div>
        </div>

        <div>
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="pdumodels"
          >
            Model
          </label>
          <div className="flex gap-2">
          <SelectOption
            id={"pdumodels"}
            options={pduModelOptions?.data}
          />
          <AddButton onClick={() => setModalContent(<PduModelForm />)} />
          </div>
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
            Comment
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
