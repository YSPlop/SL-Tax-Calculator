import { Field, Label, Switch } from '@headlessui/react';

interface ToggleSwitchProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ label, checked, onChange }) => {
  return (
    <Field as="div" className="flex items-center">
      <Label className="mr-4">{label}</Label>
      <Switch
        checked={checked}
        onChange={onChange}
        className={`${checked ? 'bg-blue-600' : 'bg-gray-200'} relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span className={`${checked ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform bg-white rounded-full transition-transform`} />
      </Switch>
    </Field>
  );
};

export default ToggleSwitch;
