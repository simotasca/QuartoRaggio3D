import { useState } from 'react';
import Button from './buttons/Button';
import { Danger } from './Span';

const MailForm = () => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(null);
  const [email, setEmail] = useState('');
  const [mailError, setMailError] = useState(null);
  const [message, setMessage] = useState('');
  const [messageError, setMessageError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  // check submitted to display message then turn it off to hide message
  // validation
  const validate = (data) => {
    let pass = true;
    if (data.name == '') {
      setNameError('Il campo nome è obbligatorio');
      pass = false;
    }
    if (data.email == '') {
      setMailError('Il campo email è obbligatorio');
      pass = false;
    }
    if (data.message == '') {
      setMessageError('Inserire un messaggio');
      pass = false;
    }

    return pass;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = { name, email, message };

    setNameError(null);
    setMailError(null);
    setMessageError(null);

    if (validate(data)) {
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((res) => {
        console.log('Response received');
        if (res.status === 200) {
          console.log('Response succeeded!');
          setSubmitted(true);
          setName('');
          setEmail('');
          setMessage('');
        }
      });
    }
  };

  return (
    <>
      <div className="row">
        <h3>Scrivici</h3>
        <div className="col-12 col-xl-10 mt-3">
          <div className="input-group border border-dark border-2">
            <span className="input-group-text shadow" id="basic-addon1">
              Nome:
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Il tuo Nome"
              aria-describedby="basic-addon1"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <Danger>{nameError}</Danger>
        </div>
        <div className="col-12 col-xl-10 mt-3">
          <div className="input-group border border-dark border-2">
            <span className="input-group-text shadow" id="basic-addon1">
              eMail:
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="La tua eMail"
              aria-describedby="basic-addon1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Danger>{mailError}</Danger>
        </div>
        <div className="col-12 col-xl-10 mt-3">
          <div className="form-floating shadow">
            <textarea
              className="form-control border border-dark border-2"
              placeholder="Messaggio"
              id="floatingTextarea"
              style={{ height: '150px', borderRadius: 0 }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="floatingTextarea" className="mx-3">
              Messaggio
            </label>
          </div>
          <Danger>{messageError}</Danger>
          <Button
            className="button float-end"
            onClick={(e) => {
              handleSubmit(e);
            }}>
            INVIA
          </Button>
        </div>
      </div>
    </>
  );
};

// (?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])

export default MailForm;
