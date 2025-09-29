import { FaRegUserCircle } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import { IoTrashBinSharp } from "react-icons/io5";
import "../index.css";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import AddAndUpdateContact from "./AddAndUpdateContact";
import useDisclosure from "../hooks/useDisclosure";
import { toast } from "react-toastify";

const ContactsList = ({ contact }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const deleteContact = async (id) => {
    try {
      const userRef = doc(db, "contacts", id);
      await deleteDoc(userRef);
      toast.success("Contact Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        key={contact.id}
        className="flex h-[64px] items-center justify-between rounded-lg bg-yellow-200"
      >
        <div className="flex items-center">
          <div className="ml-2 text-5xl text-[#F6820C]">
            <FaRegUserCircle />
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-medium">{contact.name}</h3>
            <p className="text-[14px]">{contact.email}</p>
          </div>
        </div>
        <div className="mr-2 flex gap-2 text-3xl">
          <FaRegPenToSquare onClick={onOpen} className="cursor-pointer" />
          <IoTrashBinSharp
            onClick={() => deleteContact(contact.id)}
            className="cursor-pointer text-[#5F00D9]"
          />
        </div>
      </div>
      <AddAndUpdateContact
        onClose={onClose}
        isOpen={isOpen}
        isUpdate
        contact={contact}
      />
    </>
  );
};

export default ContactsList;
