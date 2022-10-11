import { Row } from 'react-bootstrap';

function TabContent({content}) {

    return <Row className={'g-4'}>
        {content}
    </Row>
}

export default TabContent;