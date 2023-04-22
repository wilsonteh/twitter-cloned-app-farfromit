import CommentIcon from "../icons/CommentIcon";
import HeartIcon from "../icons/HeartIcon";
import RetweetIcon from "../icons/RetweetIcon";

const TweetActionsBar = () => {

  return (
    <div className="flex gap-x-8 text-sm text-slate-700">
      <div className="flex gap-x-2">
        <CommentIcon />
        <span>102</span>
      </div>

      <div className="flex gap-x-2">
        <RetweetIcon />
        <span>90</span>
      </div>

      <div className="flex gap-x-2">
        <HeartIcon />
        <span>1095</span>
      </div>
    </div>
  );
}
 
export default TweetActionsBar;
