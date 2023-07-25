import React from "react";
import ContactCard from "../components/ContactCard";
import styles from "./contact.module.css";
import ContactForm from "../components/ContactForm";
const Page = () => {
  return (
    <div className={styles.container}>
      <h1 className="text-center text-white bg-red-600">Contact Us</h1>
      <ContactCard />

      <section className={styles.contact_section}>
        <h2>
          We love to hear <span>from you</span>
        </h2>

        <ContactForm />
      </section>

      <section className="flex justify-center">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.756297289571!2d74.89724279999999!3d18.80901100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc356ddfe5dcb5f%3A0x82e984d86c46bada!2sGhogargaon%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1690174969373!5m2!1sen!2sin"
            width={1200}
            height={450}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
};

export default Page;
