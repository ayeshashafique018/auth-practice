import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className="card text-center">
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
          <div className={styles.intro}>
            <h1 className="text-3xl font-bold text-[#5b21b6] mb-4">
              Welcome to Your Lavender App
            </h1>
            <p className="text-gray-700">
              Get started by editing the <code>page.js</code> file.
            </p>
            <p className="mt-2">
              Explore <a href="https://nextjs.org">Next.js documentation</a> 
              or deploy with <a href="https://vercel.com">Vercel</a>.
            </p>
          </div>
          <div className="mt-6 flex justify-center gap-4">
            <a href="#" className="btn-primary flex items-center gap-2">
              <Image src="/vercel.svg" width={16} height={16} alt="Vercel"/>
              Deploy Now
            </a>
            <a href="#" className="btn-secondary">Documentation</a>
          </div>
        </div>
      </main>
    </div>
  );
}
