import Tweet from "./Tweet";

const TweetList = ({ tweets }: any) => {

  return (
    <div className="w-[500px] mx-auto">
      { tweets.map((tweet: any) => (
        <Tweet 
          key={tweet.id} 
          {...tweet} 
          />            
      ))}
    </div>
  );
}
 
export default TweetList;