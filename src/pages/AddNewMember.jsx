
import { Button, Checkbox, Label, TextInput ,Select} from 'flowbite-react';
import {Datepicker} from 'flowbite-react';

function AddNewMember() {
  return (
    <form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="firstname" value="First Name" />
        </div>
        <TextInput id="firstname" type="text" placeholder="" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="lname" value="Last Name" />
        </div>
        <TextInput id="lname" type="text" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="gender" value="Gender" />
        </div>
        <Select id="countries" required>
        <option>Male</option>
        <option>Female</option>
      </Select>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="joindate" value="Date of Joining" />
        </div>
        <Datepicker
          weekStart={1} // Monday
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default AddNewMember