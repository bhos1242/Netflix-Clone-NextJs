import heroStyles from "@/app/styles/herosection.module.css";
import styles from "@/app/styles/common.module.css";
import Link from "next/link";
import Image from "next/image";
const Herosection = ({ title, src }) => {
  return (
    <>
      <main className={heroStyles.main_section}>
        <div className={styles.container}>
          <div className={styles.grid_two_section}>
            <div className={heroStyles.hero_content}>
              <h1>{title}</h1>
              <p>
                {" "}
                From award-winning dramas to blockbuster action movies,
                we&apos;ve got you covered. Browse our selection of the latest
                and greatest movies, and find your new favorite today.
              </p>
              <Link href="/movie">
                <button className="">Explore Movies</button>
              </Link>
            </div>
            <div className={heroStyles.hero_image}>
              <Image src={src} alt="hero img" width={500} height={500}></Image>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Herosection;
