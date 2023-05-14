import {
  Card,
  FormLayout,
  Frame,
  Page,
  PageActions,
  Select,
  TextField,
  Toast,
} from "@sapo/ui-components";
import { useState } from "react";
import { Controller, SubmitErrorHandler, useForm } from "react-hook-form";
import { toString } from "lodash-es";

type FormValues = {
  name: string;
  age: string;
  sex: string;
};

function App() {
  const [toast, setToast] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    watch,
    trigger,
    formState: {
      isValid,
      isDirty,
      errors,
      isSubmitting: submitting,
      isSubmitted: submitted,
    },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      age: "",
      sex: "",
    },
  });

  async function onSubmit(data: FormValues): Promise<void> {
    reset(data);
    setToast(true);
  }

  const onClientError: SubmitErrorHandler<FormValues> = (errors) => {
    console.log("errors", errors);
    setToast(true);
  };

  const submit = handleSubmit(onSubmit, onClientError);

  return (
    <Frame>
      <Page title="Login">
        {toast && (
          <Toast
            content={isValid ? "Update thành công" : "Fix form "}
            success={isValid}
            error={!isValid}
            onDismiss={() => setToast(false)}
          />
        )}
        {/* {isDirty && (
        <ContextualSaveBar
          message="Chỉnh sửa chưa được lưu"
          saveAction={{
            content: "Lưu",
            onAction: submit,
            loading: submitting,
            disabled: !isValid,
          }}
          discardAction={{
            content: "Hủy",
            discardConfirmationModal: true,
            onAction: reset,
            disabled: submitting,
          }}
        />
      )} */}
        <Card sectioned>
          <div>
            <p>You enter name: {watch("name")}</p>
            <p>Form valid: {toString(isValid)}</p>
            <p>Form dirty: {toString(isDirty)}</p>
            <p>Form isSubmitting: {toString(submitting)}</p>
            <p>Form isSubmitted: {toString(submitted)}</p>
            <p>Form errors: {JSON.stringify(errors)}</p>
            <FormLayout>
              <Controller
                name="name"
                control={control}
                rules={{ required: "Enter name" }}
                render={({
                  field: { onChange, value, name },
                  fieldState: { error },
                }) => (
                  <TextField
                    label="Name"
                    placeholder="Enter name"
                    onChange={onChange}
                    value={value}
                    name={name}
                    error={error?.message}
                  />
                )}
              />
              <Controller
                name="age"
                control={control}
                rules={{ required: "Enter age" }}
                render={({
                  field: { onChange, value, name },
                  fieldState: { error },
                }) => (
                  <TextField
                    label="Age"
                    placeholder="Enter age"
                    onChange={onChange}
                    value={value}
                    name={name}
                    error={error?.message}
                  />
                )}
              />
              <Controller
                name="sex"
                control={control}
                rules={{ required: "Enter sex" }}
                render={({
                  field: { onChange, value, name },
                  fieldState: { error },
                }) => (
                  <Select
                    label="Sex"
                    options={["male", "female"]}
                    placeholder="Select sex"
                    onChange={onChange}
                    value={value}
                    name={name}
                    error={error?.message}
                  />
                )}
              />
            </FormLayout>
          </div>
        </Card>
        <PageActions
          secondaryActions={[
            {
              content: "Reset",
              onAction: reset,
            },
            {
              content: "Validate",
              onAction: trigger,
            },
          ]}
          primaryAction={{
            content: "Submit",
            onAction: submit,
          }}
        />
      </Page>
    </Frame>
  );
}

export default App;
