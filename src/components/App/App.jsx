import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
//import Contact from "../Contact/Contact";
import SearchBox from "../SearchBox/SearchBox";
import "./App.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAll } from "../../redux/contactsOps";
import { Loader } from "../Loader/Loader";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
//import { ErrorMessage } from "formik";
//import { selectContacts } from "../../redux/contactsSlice";
// import toast, { Toaster } from "react-hot-toast";
export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);

  useEffect(() => {
    dispatch(fetchAll());
    // .unwrap()
    // .then(() => {
    //   toast.success("The conacts are successfuly loaded!");
    // })
    // .catch(() => {
    //   toast.error("Please, reload the page");
    // });
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      {/* {loading ? <Loader /> : <ContactList />} */}
      {/* {contacts && contacts.length > 0 && <ContactList />} */}
      <ContactList />
      <SearchBox />
      {loading && <Loader />}
      {error && <ErrorMessage />}
    </>
  );
}
