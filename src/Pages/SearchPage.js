import Password from "../Components/Password";
import StyledButton from "../Components/StyledButton";
import Username from "../Components/Username";
import GoogleSignIn from "../Components/GoogleSignIn";
import MainSearchBar from "../Components/MainSearchBar";
import QuestionsSearchBar from "../Components/QuestionsSearchBar";
import PreviousSearches from "../Components/PreviousSearches";
import CaptionDisplay from "../Components/CaptionDisplay";
import Positive from "../Components/Postive";
import Negative from "../Components/Negative";
import Neutral from "../Components/Neutral";

function SearchPage() {
  return (
    <div class="bg-gray-900 h-screen">
      <MainSearchBar placeholder="How can we help?" />
      <StyledButton text="LOG IN" />
      <GoogleSignIn text="Sign In" />
      <Password placeholder="PASSWORD" />
      <Username placeholder="USERNAME" />
      <QuestionsSearchBar placeholder="Got Questions to Ask? (We can get you through the fluff)" />
      <PreviousSearches />
      <CaptionDisplay />
    </div>
  );
}

export default SearchPage;
