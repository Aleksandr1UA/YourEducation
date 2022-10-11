import { useContext } from "react"
import { Button } from "react-bootstrap";
import { MoonFill, SunFill } from "react-bootstrap-icons";
import ThemeContext from "../context/ThemeContext"

function ChangeTheme() {
    const {theme, setTheme} = useContext(ThemeContext);

    return<>
        {
            theme === 'bg-light text-dark' ? 
                <Button variant={'dark'} onClick={() => setTheme('bg-dark text-white')}>
                    <MoonFill className={'fs-4 m-2'} />
                </Button> :
                <Button variant={'light'} onClick={() => setTheme('bg-light text-dark')}>
                    <SunFill className={'fs-4 m-2 text-warning'} />
                </Button>
        }
    </>
}

export default ChangeTheme;