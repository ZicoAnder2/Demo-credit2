import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const BlacklistCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="reason" multiline source="reason" />
        <NumberInput step={1} label="userId" source="userId" />
      </SimpleForm>
    </Create>
  );
};
