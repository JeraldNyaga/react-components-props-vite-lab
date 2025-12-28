import blogData from "../data/blog";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import ArticleList from "./ArticleList";
import NewBlogButton from "./NewBlogButton";
import AddBlog from "./AddBlog";
import { useState } from "react";

console.log();

function App() {
	const [dataPosts, setDataPosts] = useState(() => blogData.posts);
	const [showForm, setShowForm] = useState(false);

	return (
		<>
			<Header />
			<main>
				<About />
				<NewBlogButton showForm={showForm} setForm={setShowForm} />
				<ArticleList dataPosts={dataPosts} />

				{showForm && (
					<AddBlog
						setShowForm={setShowForm}
						handleDataPosts={setDataPosts}
					/>
				)}
			</main>
			<Footer />
		</>
	);
}

export default App;
