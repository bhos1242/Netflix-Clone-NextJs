import styles from "@/app/contact/contact.module.css";
import { MdEmail, MdForum, MdVoiceChat } from "react-icons/md";
import Link from "next/link";
const ContactCard = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.grid_card}>
            <i className="flex justify-center text-center">
              <MdEmail />
            </i>
            <h2>Email</h2>
            <p>Monday to Friday Expected</p>
            <p className={styles.last_para}>response time: 72 hours</p>
            <Link href={"/"}>Send Email</Link>
          </div>
          <div className={styles.grid_card}>
            <i className="flex justify-center text-center">
              <MdVoiceChat />
            </i>
            <h2>Live Chat</h2>
            <p>Weekdays: 9 AM - 6PM ET</p>
            <p className={styles.last_para}>Weekends: 9 AM - 5PM ET</p>
            <Link href={"/"}>Chat Now</Link>
          </div>
          <div className={styles.grid_card}>
            <i className="flex justify-center text-center ">
              <MdForum />
            </i>
            <h2>Community Forum</h2>
            <p>Monday to Friday Expected</p>
            <p className={styles.last_para}>response time: 72 hours</p>
            <Link href={"/"} className={styles.anchorLink}>
              Ask the Community
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
