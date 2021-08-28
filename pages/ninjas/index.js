import Link from "next/link";
import styles from "../../styles/Users.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json()

  return {
    props: {
      usersList: data,
    }
  }

}

const Ninjas = ({ usersList }) => {
  return (
    <div>
      <h1>All Ninjas</h1>
      {usersList.map((user, idx) => (
        <div key={idx}>
          <Link href={`/ninjas/${user?.id}`}>
            <a className={styles.single}>
              <h3>{user?.name}</h3>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Ninjas;