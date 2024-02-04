import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useToaster } from 'react-hot-toast';
import Select from 'react-select';

function DynamicForm({ fields, onSubmit }) {
  const { handleSubmit, control, formState: { errors } } = useForm();
//   const toast = useToaster();

  const submitHandler = (data) => {
    if (onSubmit) {
      onSubmit(data);
    //   toast.success('Form submitted successfully!');
    }
  };

//   useEffect(() => {
//    fields.map((field) => (
//         console.log(field.options)
//     ))
    
//   }, [])

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
    {fields.map((field) => {
      const options = field.options;
      const isMulti = field.isMulti;

      return (
        <div key={field.name}>
          <label>
            {field.label}:
            {field.type === 'select' ? (
              <Controller
                name={field.name}
                control={control}
                defaultValue={field.default || (isMulti ? [] : null)}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={options}
                    isClearable
                    isMulti={isMulti}
                    onChange={(selectedOption) => {
                      const value = isMulti
                        ? (selectedOption || []).map((option) => option.value)
                        : selectedOption ? selectedOption.value : null;

                    //   setValue(field.name, value);
                      field.onChange(value);
                    }}
                    value={options.filter((option) =>
                      field.value ? field.value.includes(option.value) : false
                    )}
                  />
                )}
              />
            ) : (
              <Controller
                name={field.name}
                control={control}
                defaultValue={field.default || ""}
                render={({ field }) => (
                  <input type={field.type || "text"} {...field} />
                )}
              />
            )}
          </label>
          {errors[field.name] && (
            <p className="error-message">{field.errorMsg || `${field.label} is required`}</p>
          )}
        </div>
      );
    })}
    <button type="submit">Submit</button>
  </form>
);
}


export default DynamicForm;