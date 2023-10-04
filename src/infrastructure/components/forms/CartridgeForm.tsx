import { useEffect } from "react";
import SelectOption, { OptionValue } from "../SelectOption";
import ImageInput from "../ImageInput";
import TextArea from "../TextArea";
import TextInput from "../TextInput";
import Form from "./Form";
import { useGetUserInChargeSelect } from "../../hooks/Users/useGetUserInChargeSelect";
import { useGetGroupInChargeSelect } from "../../hooks/Groups/useGetGroupInChargeSelect";
import { useGetLocationsSelect } from "../../hooks/Locations/useGetLocationsSelect";
import { useGetManufacturersSelect } from "../../hooks/Manufacturers/useGetManufacturersSelect";
import { useGetCartridgetypesSelect } from "../../hooks/Cartridges/useGetCartridgetypesSelect";
import { CartridgeData } from "../../../domain/models/forms/CartridgesData";
import { cartridgesService } from "../../../domain/services/api/Cartridges.service";

interface formProps {
  isEditing?: boolean;
}

export default function CartridgeForm(formProps: formProps) {
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
    ) as unknown as CartridgeData;

    return isEditing
      ? cartridgesService.editCartridge(formJson, id)
      : cartridgesService.createCartridge(formJson);
  };

  const numbers = (): OptionValue[] => {
    const options: OptionValue[] = [];
    for (let i = 1; i <= 100; i++) {
      const option: OptionValue = {
        id: i.toString(),
        name: i.toString(),
      };
      options.push(option);
    }

    return options;
  };

  const threshold = numbers();
  const userInChargeOptions = useGetUserInChargeSelect();
  const groupInChargeOptions = useGetGroupInChargeSelect();
  const locationOptions = useGetLocationsSelect();
  const manufacturerOptions = useGetManufacturersSelect();
  const cartridgeTypeOptions = useGetCartridgetypesSelect();

  useEffect(() => {
    userInChargeOptions.get();
    groupInChargeOptions.get();
    locationOptions.get();
    manufacturerOptions.get();
    cartridgeTypeOptions.get();
  }, []);

  return (
    <div className="m-6 bg-white rounded container_form_computer">
      <Form
        handleSubmit={handleSubmit}
        formHeader={"Cartridge Models"}
        iconName={"Cartridges"}
        isEditing={isEditing}
      >
        <div className="Name">
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
        <div className="Locations">
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
        <div className="Cartridge Types">
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="cartridgeitemtypes"
          >
            Cartridge Types
          </label>
          <SelectOption
            id="cartridgeitemtypes"
            options={cartridgeTypeOptions?.data}
          />
        </div>
        <div className="Reference">
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="ref"
          >
            Reference
          </label>
          <TextInput id={"ref"} />
        </div>
        <div className="Technician in charge of the hardware">
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="users"
          >
            Technician in charge of the hardware
          </label>
          <SelectOption
            id={"users"}
            options={userInChargeOptions.data?.data}
          />
        </div>
        <div className="Manufacturers">
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
        <div className="Group in charge of the hardware">
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="group-hardware"
          >
            Group in charge of the hardware
          </label>
          <SelectOption
            id={"group-hardware"}
            options={groupInChargeOptions.data?.data}
          />
        </div>
        <div className="Comments">
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
        <div className="Alert Threshold">
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="alarm_threshold"
          >
            Alert Threshold
          </label>
          <SelectOption
            id={"alarm_threshold"}
            options={threshold}
          />
        </div>
        <div className="Pictures">
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="pic"
          >
            Pictures
          </label>
          <ImageInput
            id={"pic"}
            fileType={".jpg, .jpeg, .png"}
            maxSize={3}
          />
        </div>
        <div className="Stock Target">
          <label
            className="text-sm mb-2 font-semibold block"
            htmlFor="stock_target"
          >
            Stock Target
          </label>
          <TextInput
            id={"stock_target"}
            type={"number"}
          />
        </div>
      </Form>
    </div>
  );
}
