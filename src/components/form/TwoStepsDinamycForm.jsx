import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';

function TwoStepDynamicForm({ steps, onSubmit }) {
  const [currentStep, setCurrentStep] = useState(0);
  const { handleSubmit, control, formState: { errors, isValid } } = useForm({
    mode: 'onChange',
  });

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const submitHandler = (data) => {
    if (onSubmit) {
      onSubmit(data);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
    {steps[currentStep].map((field) => {
      const options = field.options;
      const isMulti = field.isMulti;

      return (
        <div key={field.name} className="mb-5">
          <label className="block text-sm font-medium text-gray-700">
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
                  <input
                    type={field.type || "text"}
                    {...field}
                    className="block w-full mt-1 p-2.5 border-0 border-b-2 border-gray-300 dark:border-gray-600 appearance-none focus:outline-none focus:border-[#61366b]"
                  />
                )}
              />
            )}
          </label>
          {errors[field.name] && (
            <p className="text-red-500 text-xs mt-1">{errors[field.name].message}</p>
          )}
        </div>
      );
    })}
    <div className="flex justify-between">
      {currentStep > 0 && (
        <button
          type="button"
          onClick={handlePreviousStep}
          className="text-white bg-[#522b5b] hover:bg-[#6d3978] focus:ring-4 focus:outline-none focus:ring-[#6d3978] font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Previous
        </button>
      )}
      {currentStep < steps.length - 1 && (
        <button
          type="button"
          onClick={handleNextStep}
          className={`text-white bg-[#522b5b] hover:bg-[#6d3978] focus:ring-4 focus:outline-none focus:ring-[#6d3978] font-medium rounded-lg text-sm px-5 py-2.5 
           
          `}
        >
          Next
        </button>
      )}
      {currentStep === steps.length - 1 && (
        <button
          type="submit"
          disabled={!isValid}
          className="text-white bg-[#522b5b] hover:bg-[#6d3978] focus:ring-4 focus:outline-none focus:ring-[#6d3978] font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Submit
        </button>
      )}
    </div>
  </form>
  );
}

export default TwoStepDynamicForm;