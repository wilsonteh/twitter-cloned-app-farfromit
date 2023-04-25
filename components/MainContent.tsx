import NewTweetForm from "./NewTweetForm";
import TweetList from "./TweetList";

interface Props {
  tweets: any;
}

const MainContent = ({ tweets }: Props) => {
  return (
    <div className="w-[500px]">
      <NewTweetForm />
      <TweetList tweets={tweets} />
    </div>
  );
}
 
export default MainContent;