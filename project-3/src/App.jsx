import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import { CiSearch } from "react-icons/ci";
import { FaCirclePlus } from "react-icons/fa6";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactsList from "./components/ContactsList";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDisclosure from "./hooks/useDisclosure";
import { ToastContainer, toast } from "react-toastify";
import ContactNotFound from "./components/ContactNotFound";

function App() {
  const [contacts, setContacts] = useState([]);
  const [contactsFiltered, setContactsFiltered] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const FilterContact = (e) => {
    const contactValue = e.target.value;

    const filteredValue = contacts?.filter(
      (contact) =>
        contact.name.toLowerCase().includes(contactValue.toLowerCase()) ||
        contact.email.toLowerCase().includes(contactValue.toLowerCase()),
    );

    setContactsFiltered(filteredValue);
  };

  useEffect(() => {
    const getContacts = async () => {
      setLoading(true);

      try {
        const contactsRef = collection(db, "contacts");

        onSnapshot(contactsRef, (snapshot) => {
          const contactsList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactsList);
          setContactsFiltered(contactsList);
          setLoading(false);

          return contactsList;
        });
      } catch (error) {
        setError("Fail to fetch data !!!");
      }
    };

    // Call function to get data from firebase
    getContacts();
  }, []);

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <>
      <div className="mx-auto max-w-[360px]">
        <NavBar />
        <div className="flex gap-2">
          <div className="relative flex flex-grow items-center">
            <CiSearch className="absolute ml-0.5 text-2xl text-white" />
            <input
              onChange={FilterContact}
              className="h-8 flex-grow rounded-lg border border-white bg-transparent pl-8 text-white"
              type="text"
            />
          </div>
          <FaCirclePlus
            onClick={onOpen}
            className="cursor-pointer text-3xl text-white"
          />
        </div>
        <div className="mt-4 flex flex-col gap-3">
          {contactsFiltered <= 0 ? (
            <ContactNotFound />
          ) : (
            contactsFiltered.map((contact) => (
              <ContactsList key={contact.id} contact={contact} />
            ))
          )}
        </div>
      </div>

      <AddAndUpdateContact onClose={onClose} isOpen={isOpen} />

      <ToastContainer position="bottom-center" />
    </>
  );
}

export default App;
