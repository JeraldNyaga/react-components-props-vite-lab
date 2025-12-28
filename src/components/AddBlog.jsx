import { useRef, useEffect } from "react";
import styles from "./styles/AddBlog.module.css";
import { format } from "date-fns";

const genId = () => {
	let idNum = 4;
	return () => {
		return idNum++;
	};
};

export default function AddBlog({ setShowForm, handleDataPosts, showForm }) {
	let formRef = useRef(null);
	useEffect(() => {
		if (showForm && formRef.current) {
			formRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [showForm]);

	function handleForm(formData) {
		const blogTitle = formData.get("blogTitle");
		const blogBody = formData.get("blogBody");
		const blogDate = format(new Date(), "MMMM dd, yyyy");
		const idNum = genId();
		setShowForm((prev) => !prev);

		handleDataPosts((prev) =>([
				...prev,
				{
					id: idNum(),
					title: blogTitle,
					date: blogDate,
					preview: blogBody,
					minutes: Math.floor(blogBody.length / 100),
				},
			])
		);
		formRef.current.reset();
	}
	
	return (
		<section className={styles.container}>
			<form ref={formRef} action={handleForm} className={styles.form}>
				<h2>Create New Blog</h2>
				<label htmlFor="blogTitle">Blog Title</label>

				<input
					id="blogTitle"
					name="blogTitle"
					type="text"
					placeholder="Enter blog title"
					required
				/>

				<br />

				<label htmlFor="blogBody">Blog Body</label>

				<textarea
					name="blogBody"
					id="blogBody"
					rows={6}
					placeholder="Write your blog content here..."
					required
				/>
				<div className={styles.btn_div}>
					<button type="submit">Submit Blog</button>
					<button
						onClick={() => setShowForm((prev) => !prev)}
						type="button"
						className={styles.close}
					>
						Close
					</button>
				</div>
			</form>
		</section>
	);
}
