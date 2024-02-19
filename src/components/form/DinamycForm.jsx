import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useToaster } from 'react-hot-toast';
import Select from 'react-select';

function DynamicForm({ fields, onSubmit }) {
  const { handleSubmit, control, formState: { errors, isValid } } = useForm({
    mode: 'onChange', // Enable onChange mode for real-time validation
  });

  const submitHandler = (data) => {
    if (onSubmit) {
      onSubmit(data);
    }
  };

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
                  rules={{ required: `${field.label} is required` }}
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

                        field.onChange(value);
                      }}
                      value={
                        isMulti
                          ? options.filter((option) =>
                              field.value ? field.value.includes(option.value) : false
                            )
                          : options.find((option) => option.value === field.value)
                      }
                    />
                  )}
                />
              ) : (
                <Controller
                  name={field.name}
                  control={control}
                  defaultValue={field.default || ""}
                  rules={{ required: `${field.label} is required` }}
                  render={({ field }) => (
                    <input type={field.type || "text"} {...field} />
                  )}
                />
              )}
            </label>
            {errors[field.name] && (
              <p className="error-message">{errors[field.name].message}</p>
            )}
          </div>
        );
      })}
      <button type="submit" className={`${isValid ? "bg-black" : "bg-slate-500"}`} disabled={!isValid}>
        Submit
      </button>
    </form>
  );
}



export default DynamicForm;