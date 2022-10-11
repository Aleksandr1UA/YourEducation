import MainBlock from "./main/MainBlock";
import MainBoxStart from "./main/MainBoxStart";
import MainCourse from "./main/MainCourse";
import MainRewiews from "./main/MainRewiews";
import MainTrendingCourses from "./main/MainTrendingCourses";


function Main() {
    return <main>
        <MainBlock />
        <MainCourse />
        <MainTrendingCourses />
        <MainBoxStart />
        <MainRewiews />
    </main>
}

export default Main;