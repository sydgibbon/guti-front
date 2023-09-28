import { useEffect } from "react";
import SelectOption, { OptionValue } from "../SelectOption";
import TextArea from "../TextArea";
import TextInput from "../TextInput";
import Form from "./Form";
import { useGetUserInChargeSelect } from "../../hooks/Users/useGetUserInChargeSelect";
import { useGetGroupInChargeSelect } from "../../hooks/Groups/useGetGroupInChargeSelect";
import { useGetManufacturersSelect } from "../../hooks/Manufacturers/useGetManufacturersSelect";
import { useGetStatesSelect } from "../../hooks/States/useGetStatesSelect";
import { useGetLocationsSelect } from "../../hooks/Locations/useGetLocationsSelect";
import { useGetEnclosuremodelsSelect } from "../../hooks/Enclosures/useGetEnclosuremodelsSelect";
import { EnclosureData } from "../../../domain/models/forms/EnclosureData";
import { enclosuresService } from "../../../domain/services/api/Enclosures.service";

interface formProps {
  isEditing?: boolean;
}

export default function EnclosuresForm(formProps: formProps) {
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
    ) as unknown as EnclosureData;
    enclosuresService.createEnclosure(formJson);
    // debugger;
  };

  const userInChargeOptions = useGetUserInChargeSelect();
  const groupInChargeOptions = useGetGroupInChargeSelect();
  const locationOptions = useGetLocationsSelect();
  const stateOptions = useGetStatesSelect();
  const manufacturerOptions = useGetManufacturersSelect();
  const enclosureModelOptions = useGetEnclosuremodelsSelect();

  useEffect(() => {
    userInChargeOptions.get();
    groupInChargeOptions.get();
    locationOptions.get();
    stateOptions.get();
    manufacturerOptions.get();
    enclosureModelOptions.get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="m-6 bg-white rounded container_form_computer">
      <Form
        handleSubmit={handleSubmit}
        formHeader={"Enclosures"}
        iconName={"Enclosures"}
        isEditing={isEditing}
      >
        <div>
          <label
            htmlFor="name"
            className="text-sm mb-2 font-semibold block"
          >
            Name
          </label>
          <TextInput
            id={"name"}
            placeholder={"ingrese su nombre"}
            required
          />
        </div>
        <div>
          <label
            htmlFor="states"
            className="text-sm mb-2 font-semibold block"
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
            htmlFor="locations"
            className="text-sm mb-2 font-semibold block"
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
            htmlFor="users_tech"
            className="text-sm mb-2 font-semibold block"
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
            htmlFor="manufacturers"
            className="text-sm mb-2 font-semibold block"
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
            htmlFor="groups_tech"
            className="text-sm mb-2 font-semibold block"
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
            htmlFor="enclosuremodels"
            className="text-sm mb-2 font-semibold block"
          >
            Model
          </label>
          <SelectOption
            id="enclosuremodels"
            options={enclosureModelOptions?.data}
          />
        </div>
        <div>
          <label
            htmlFor="serial"
            className="text-sm mb-2 font-semibold block"
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
            htmlFor="otherserial"
            className="text-sm mb-2 font-semibold block"
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
            htmlFor="comment"
            className="text-sm mb-2 font-semibold block"
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
            htmlFor="power_supplies"
            className="text-sm mb-2 font-semibold block"
          >
            Power supplies
          </label>
          <TextInput
            id={"power_supplies"}
            type={"number"}
            required
          />
        </div>
      </Form>
    </div>
  );
}
