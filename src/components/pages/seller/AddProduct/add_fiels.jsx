import { useState } from "react";

export default function AddDynamicInputFields({
  formData,
  setFormData,
  inputs,
  setInputs,
  handleAddInput,
  handleInputChange,
  saveFormAsDraft,
}) {
  // const [inputs, setInputs] = useState([{ optionKey: "", optionValue: "" }]);

  const handleKeyValueChange = (event, index) => {
    let { name, value } = event.target;
    let onChangeValue = [...inputs];
    onChangeValue[index][name] = value;
    setInputs(onChangeValue);
    setFormData({
      ...formData,
      features: [
        ...formData.features.slice(0, index),
        { ...formData.features[index], [name]: value },
        ...formData.features.slice(index + 1),
      ],
    });
    saveFormAsDraft(formData);
  };

  const handleDeleteInput = (index) => {
    const newArray = [...inputs];
    newArray.splice(index, 1);
    setInputs(newArray);

    const newFeatures = [...formData.features];
    newFeatures.splice(index, 1);
    setFormData({ ...formData, features: newFeatures });
    saveFormAsDraft(formData);
  };

  return (
    <div className="container">
      {inputs.map((item, index) => (
        <div className="">
          <div className="input_container row" key={index}>
            <div className="mb-3 col-sm-4 ">
              <div className="form-floating form-floating-outline ">
                <div className="position-relative form-floating form-floating-outline form-group">
                  <input
                    name="optionKey"
                    className="form-control"
                    type="text"
                    value={item.optionKey}
                    onChange={(event) => handleKeyValueChange(event, index)}
                  />
                  <label htmlFor="form-repeater-1-2">Key</label>
                </div>
              </div>
            </div>
            <div
              className={inputs.length > 1 ? "mb-3 col-sm-7" : "mb-3 col-sm-8"}
            >
              <div className="form-floating form-floating-outline">
                <input
                  name="optionValue"
                  className="form-control"
                  type="text"
                  value={item.optionValue}
                  onChange={(event) => handleKeyValueChange(event, index)}
                />
                <label htmlFor="form-repeater-1-2">Value</label>
              </div>
            </div>
            <div
              className={inputs.length > 1 ? "mb-3 col-sm-1" : "mb-3 col-sm-1"}
            >
              {inputs.length > 1 && (
                <button
                  className="btn btn-outline-danger p-1 px-2 rounded-2 border-0"
                  onClick={() => handleDeleteInput(index)}
                >
                  <i className="fa-solid fa-trash" />
                </button>
              )}
            </div>
          </div>

          <div className="mb-3 float-end">
            {index === inputs.length - 1 && (
              <button className="btn btn-primary" onClick={() => handleAddInput()}><span className="m-1 me-2 ms-0"><i className="fa-solid fa-plus"></i></span>Add</button>
            )}
          </div>
        </div>
      ))}

      {/* <div className="body"> {JSON.stringify(inputs)} </div> */}
    </div>
  );
}
