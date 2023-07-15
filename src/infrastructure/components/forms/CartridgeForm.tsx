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

export default function CartridgeForm() {

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  const numbers = (): OptionValue[] => {
    const options: OptionValue[] = [];
    for (let i = 1; i <= 100; i++) {
      const option: OptionValue = {
        id: i.toString(),
        name: i.toString()
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

  }, [])

  return (
    <div className="m-6 bg-white rounded container_form_computer">
      <Form handleSubmit={handleSubmit}>
        <div className="Name">
          <label className="text-sm mb-2 font-semibold block">Name</label>
          <TextInput
            id={"testing"}
            placeholder={"ingrese su nombre"}
          />
        </div>
        <div className="Locations">
          <label className="text-sm mb-2 font-semibold block">Locations</label>
          <SelectOption
            id={"location"}
            options={locationOptions.data?.data}
          />
        </div>
        <div className="Cartridge Types">
          <label className="text-sm mb-2 font-semibold block">Cartridge Types</label>
          <SelectOption
            id="type"
            options={cartridgeTypeOptions?.data}
          />
        </div>
        <div className="Reference">
          <label className="text-sm mb-2 font-semibold block">Reference</label>
          <TextInput
            id={"reference"}
          />
        </div>
        <div className="Technician in charge of the hardware">
          <label className="text-sm mb-2 font-semibold block">Technician in charge of the hardware</label>
          <SelectOption
            id={"hardware"}
            options={userInChargeOptions.data?.data}
          />
        </div>
        <div className="Manufacturers">
          <label className="text-sm mb-2 font-semibold block">Manufacturers</label>
          <SelectOption
            id="manufacturer"
            options={manufacturerOptions.data?.data}
          />
        </div>
        <div className="Group in charge of the hardware">
          <label className="text-sm mb-2 font-semibold block">Group in charge of the hardware</label>
          <SelectOption
            id={"group-hardware"}
            options={groupInChargeOptions.data?.data}
          />
        </div>
        <div className="Comments">
          <label className="text-sm mb-2 font-semibold block">Comments</label>
          <TextArea
            id={"comment"}
            rows={3}
          />
        </div>
        <div className="Alert Threshold">
          <label className="text-sm mb-2 font-semibold block">Alert Threshold</label>
          <SelectOption
            id={"alertthreshold"}
            options={threshold}
          />
        </div>
        <div className="Pictures">
          <label className="text-sm mb-2 font-semibold block">Pictures</label>
          <ImageInput
            id={"pictures"}
            fileType={".jpg, .jpeg, .png"}
            maxSize={3}
          />
        </div>
        <div className="Stock Target">
          <label className="text-sm mb-2 font-semibold block">Stock Target</label>
          <TextInput
            id={"stock_target"}
            type={"number"}
          />
        </div>
      </Form>
    </div>
  );
}