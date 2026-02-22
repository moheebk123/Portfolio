import { useReducer, useRef, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import tick from "../../assets/img/contact/tick.png";
import cross from "../../assets/img/contact/cross.png";
import { configuration } from "../../configuration/configuration";

type FormStatus = "filling" | "submitted" | "success" | "error";

type FormAction =
  | { type: "FORM_FILLING" }
  | { type: "FORM_SUBMITTED" }
  | { type: "FORM_SUBMITTED_SUCCESS" }
  | { type: "FORM_SUBMITTED_FAIL" };

const formStatusReducer = (
  state: FormStatus,
  action: FormAction,
): FormStatus => {
  switch (action.type) {
    case "FORM_FILLING":
      return "filling";
    case "FORM_SUBMITTED":
      return "submitted";
    case "FORM_SUBMITTED_SUCCESS":
      return "success";
    case "FORM_SUBMITTED_FAIL":
      return "error";
    default:
      return state;
  }
};

const ContactForm: React.FC = () => {
  const [formStatus, dispatchFormStatus] = useReducer(
    formStatusReducer,
    "filling",
  );

  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);

  const changeFormStatus = (status: FormStatus) => {
    if (status === "submitted") {
      dispatchFormStatus({ type: "FORM_SUBMITTED" });
    } else if (status === "filling") {
      dispatchFormStatus({ type: "FORM_FILLING" });
    }
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    changeFormStatus("submitted");

    if (!nameRef.current || !emailRef.current || !messageRef.current) return;

    emailjs
      .send(
        configuration.serviceId,
        configuration.templateId,
        {
          name: nameRef.current.value,
          email: emailRef.current.value,
          message: messageRef.current.value,
          on: "portfolio",
        },
        {
          publicKey: configuration.publicKey,
        },
      )
      .then(
        () => {
          dispatchFormStatus({ type: "FORM_SUBMITTED_SUCCESS" });
        },
        () => {
          dispatchFormStatus({ type: "FORM_SUBMITTED_FAIL" });
        },
      );

    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };

  if (formStatus === "filling") {
    return (
      <form onSubmit={sendEmail} className="space-y-6 text-gray-700">
        <div>
          <label className="block font-semibold ml-2 mb-2">Name</label>
          <input
            type="text"
            required
            ref={nameRef}
            placeholder="Enter your name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-semibold ml-2 mb-2">Email</label>
          <input
            type="email"
            required
            ref={emailRef}
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-semibold ml-2 mb-2">Message</label>
          <textarea
            required
            rows={4}
            ref={messageRef}
            placeholder="Enter your message"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    );
  }

  if (formStatus === "submitted") {
    return <div className="text-black text-2xl">Sending Message...</div>;
  }

  return (
    <div className="w-full flex flex-col gap-5 justify-center items-center">
      <img
        className="w-28"
        src={formStatus === "success" ? tick : cross}
        alt={formStatus === "success" ? "Success" : "Error"}
      />
      <h2 className="text-center text-black font-semibold text-xl">
        {formStatus === "success"
          ? "Message Sent Successfully!"
          : "Failed to Send!"}
      </h2>
      <button
        type="button"
        onClick={() => changeFormStatus("filling")}
        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
      >
        {formStatus === "success" ? "Okay" : "Submit Again"}
      </button>
    </div>
  );
};

export default ContactForm;
