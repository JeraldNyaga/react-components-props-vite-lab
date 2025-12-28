import styles from "./styles/AddBlog.module.css"
import { format } from "date-fns";

const genId = ()=>{
    let idNum = 4;
    return ()=>{
        return idNum++
    }
}

export default function AddBlog({setShowForm, handleDataPosts}) {
	

	function handleForm(formData) {
        const blogTitle  = formData.get("blogTitle")
        const blogBody = formData.get("blogBody");
        const blogDate = format(new Date(), "MMMM dd, yyyy");
        const idNum = genId()
        setShowForm(prev=>!prev)

        handleDataPosts((prev) =>
			prev.map((blog) => [
				...blog,
				{
					id: idNum(),
					title: blogTitle,
					date: blogDate,
					preview: blogBody,
					minutes: Math.floor(blogBody.length / 100),
				},
			])
		);
    }
	return (
		<section>
			<form action={handleForm}>
				<label htmlFor="blogTitle">Blog Title</label>

				<input id="blogTitle" name="blogTitle" type="text" />


				<br />

				<label htmlFor="blogBody">Blog Body</label>

				<textarea name="blogBody" id="blogBody"/>

                <button>Submit Blog</button>

			</form>
		</section>
	);
}
