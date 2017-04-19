import { injectGlobal } from "styled-components";
import { normalize } from "polished";
import App from "../components/App";

injectGlobal`${normalize()}`;

const Index = () => <App />;

export default Index;
