import Form from "@/components/Form";
import Header from "@/components/Header";
import PostFeed from "@/components/Posts/PostFeed";

export default function Home() {
  return (
    <main className="text-white">
      <Header shouldBackArrow label="Home" />
      <Form placeholder="Whats happening?" />
      <PostFeed />
    </main>
  );
}
