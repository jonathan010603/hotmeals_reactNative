import { Footer, Header } from "../../components";
import Hero from "./Hero";
import Showcase from "./Showcase";
import { ScrollView } from "react-native";

const HomeScreen = () => {
    return (
        <ScrollView>
            <Hero />
            <Showcase />
        </ScrollView>
    )
}

export default HomeScreen;