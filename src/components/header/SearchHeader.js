import '../.././scss/custom.scss'
import { Form } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';

function SearchHeader() {
    return <Form className={'d-flex ms-xl-3 ms-0'}>
    <div className={'position-relative '}>
      <Form.Control
        type={'search'}
        placeholder={'Search'}
        className={'me-2'}
        aria-label={'Search'}
      />
      <Search className={'position-absolute cursor-pointer'} style={{top: '33%', right: '.5rem'}} />
    </div>
  </Form>
}

export default SearchHeader;