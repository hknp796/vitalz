import { FaEye, FaPenSquare, FaRegTrashAlt, FaRupeeSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Button, Modal, Label, TextInput, Select } from "flowbite-react";
import ConfirmDelete from "../components/ConfirmDelete";
import { useState } from "react";
import useAxios from "../hooks/useAxios";
import { toast } from "react-toastify";
import { Spinner } from "flowbite-react";
import moment from "moment";

export default function DataTable(props) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [loading, setLoading] = useState(false);
  const [openPaymentModal, setOpenPaymentModal] = useState(false);
  const [isDelete, setIsDelete] = useState([]);
  const [deleteId, setDeleteId] = useState();
  const [isOpenDeleteConfirm, setIsOpenDeleteConfirm] = useState(false);
  const [inputValues, setInputValues] = useState({
    month: "",
    amount: "",
  });
  const navigate = useNavigate();
  function selectClient() {
    props.details(props.person.name);
    navigate(`/${props.person.name}`);
  }

  const setDeleteMember = (id) => {
    isDelete.push(id);
    setDeleteId(id);
    setIsOpenDeleteConfirm(true);
  };

  const deleteUser = () => {
    useAxios({
      method: "post",
      url: `/members/delete/${deleteId}`,
      successCallBack: ({ message }) => {
        toast.success(message);
        props.getClient();
      },
      setLoading,
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const submitForm = () => {
    console.log(inputValues);
  };

  const setPayment = (id) => {
    setOpenPaymentModal(true);
    // api calls
  };

  const editMembers = (id) => {
    navigate(`/add-members/${id}`);
  };

  const viewMembers = (id) => {
    navigate(`/members/view/${id}`);
  };

  return (
    <div className="">
      <div className="rounded-lg border">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              {props.headers.map((header, index) => (
                <th key={index} className="py-2 px-4">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.clients.map((client, index) => (
              <tr
                key={client._id}
                className={`border-b border-gray-200 text-black text-center ${
                  (index + 1) % 2 === 0 ? "bg-blue-200" : ""
                }`}
              >
                <td className="py-3 px-4">{index + 1}</td>

                <td className="py-3 px-4 flex items-center justify-center gap-3">
                  <img
                    src="https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg"
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="">
                    <div>{client.firstName}</div>
                    <div className="text-xs text-gray-500">
                      {client.billingStatus}
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4">{client.age}</td>
                <td className="py-3 px-4">{client.contact}</td>
                <td className="py-3 px-4">
                  {moment(client.dateOfJoining).format("DD-MM-YYYY")}
                </td>
                <td className="py-3 px-4">{client.billingStatus}</td>
                <td className="py-3 px-4">
                  <button
                    className="mr-2 bg-gray-100 p-2 rounded-lg"
                    onClick={() => viewMembers(client._id)}
                  >
                    <FaEye size={20} />
                  </button>
                  {props.isDashboard && (
                    <button
                      className="mr-2 bg-gray-100 p-2 rounded-lg"
                      onClick={() => setPayment(client.id)}
                    >
                      <FaRupeeSign size={20} />
                    </button>
                  )}

                  <button
                    className="mr-2 bg-gray-100 p-2 rounded-lg"
                    onClick={() => editMembers(client._id)}
                  >
                    <FaPenSquare size={20} />
                  </button>
                  {isDelete.includes(client._id) && loading ? (
                    <Spinner aria-label="Default status example" />
                  ) : (
                    <button
                      className="bg-gray-100 p-2 rounded-lg"
                      onClick={() => setDeleteMember(client._id)}
                    >
                      <FaRegTrashAlt size={20} />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        dismissible
        show={openPaymentModal}
        onClose={() => setOpenPaymentModal(false)}
        className="overflow-visible"
      >
        <Modal.Header>Add Payment</Modal.Header>
        <Modal.Body className="overflow-visible">
          <div>
            <div className=" block">
              <Label htmlFor="months" value="Month" />
            </div>
            <Select
              id="month"
              required
              onChange={handleInputChange}
              name="month"
            >
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </Select>
          </div>
          <div>
            <div className="block">
              <Label htmlFor="amount" value="Add Amount" />
            </div>
            <TextInput
              id="amount"
              type="number"
              required
              onChange={handleInputChange}
              name="amount"
            />
          </div>
          <div className="flex justify-end mt-3">
            <Button onClick={submitForm}> Add Payment</Button>
          </div>
        </Modal.Body>
      </Modal>
      <ConfirmDelete
        isOpen={isOpenDeleteConfirm}
        confirm={deleteUser}
        closeModal={() => setIsOpenDeleteConfirm(false)}
      />
    </div>
  );
}
