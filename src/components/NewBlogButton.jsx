import styles from "./styles/NewBlogButton.module.css"

export default function NewBlogButton({ showForm, setForm }) {
	return (
		!showForm && (
			<button className={styles.button} onClick={() => setForm((prev) => !prev)}>New Blog</button>
		)
	);
}
