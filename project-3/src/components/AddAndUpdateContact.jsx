import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import Modal from "./Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";

const contactSchemaValidation = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const AddAndUpdateContact = ({ onClose, isOpen, isUpdate, contact }) => {
  const addContact = async (contact) => {
    try {
      console.log("Jup into addContact function");
      const contactsRef = collection(db, "contacts");
      await addDoc(contactsRef, contact);
      onClose();
      toast.success("Contact Added Successfully");
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const updateContact = async (contact, id) => {
    try {
      console.log("Jup into updateContact function");
      const userRef = doc(db, "contacts", id);
      await updateDoc(userRef, contact);
      onClose();
      toast.success("Contact Updated Successfully");
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div>
      <Modal onClose={onClose} isOpen={isOpen}>
        <Formik
          validationSchema={contactSchemaValidation}
          initialValues={
            isUpdate
              ? {
                  name: contact.name,
                  email: contact.email,
                }
              : {
                  name: "",
                  email: "",
                }
          }
          onSubmit={(values) => {
            console.log(isUpdate);
            isUpdate ? updateContact(values, contact.id) : addContact(values);
          }}
        >
          <Form>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <label htmlFor="name">Name</label>
                <Field id="name" className="h-[32px] border" name="name" />
                <div className="text-xs text-red-500">
                  <ErrorMessage name="name" />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email">Email</label>
                <Field id="email" className="h-[32px] border" name="email" />
                <div className="text-xs text-red-500">
                  <ErrorMessage name="email" />
                </div>
              </div>
              <button
                type="submit"
                className="mt-2 cursor-pointer self-end border bg-[#FCCA3F] px-4 py-2 hover:opacity-75"
              >
                {isUpdate ? "Update Contact" : "Add Contact"}
              </button>
            </div>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndUpdateContact;
