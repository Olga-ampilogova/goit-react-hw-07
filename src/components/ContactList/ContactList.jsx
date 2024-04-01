import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
//import { visibleContact } from "../../redux/filtersSlice";
//import { visibleContact } from "../../redux/filtersSlice";
//import { selectContacts } from "../../redux/contactsSlice";
import { visibleContact } from "../../redux/filtersSlice";
//import { visibleContact } from "../../redux/filtersSlice";

export default function ContactList() {
  const contacts = useSelector(visibleContact);

  //const contacts = useSelector(selectContacts);
  // const contacts = useSelector((state) => state.contacts);
  // console.log(contacts);
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}
