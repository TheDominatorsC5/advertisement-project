import OurStory from "../components/AboutUs/OurStory";
import StatsOverview from "../components/AboutUs/StatsOverview";
import TeamMembers from "../components/AboutUs/TeamMembers";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function AboutUs() {
    return (
        <>
            <Navbar />
            <OurStory />
            <StatsOverview />
            <TeamMembers />
            <Footer />
        </>
    );
}