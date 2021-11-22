
import Password from "../components/Password";
import StyledButton from "../components/StyledButton";
import Username from "../components/Username";
import GoogleSignIn from "../components/GoogleSignIn";
import MainSearchBar from "../components/MainSearchBar";
import QuestionsSearchBar from "../components/QuestionsSearchBar";
import Answers from "../components/Answers";
import PreviousSearches from "../components/PreviousSearches";
import Positive from "../components/Postive";
import Negative from "../components/Negative";
import Neutral from "../components/Neutral";

function SearchPage() {
  return (
    <div class="bg-gray-900 h-screen">
      <MainSearchBar placeholder="How can we help?" />
      <StyledButton text="LOG IN" />
      <GoogleSignIn text="Sign In" />
      <Password placeholder="PASSWORD" />
      <Username placeholder="USERNAME" />
      <QuestionsSearchBar placeholder="Got Questions to Ask? (We can get you through the fluff)" />
      <Answers />
      <PreviousSearches />
      <CaptionDisplay />
    </div>
  );
}

export default SearchPage;
